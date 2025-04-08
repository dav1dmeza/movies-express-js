import parseData from '../schema/MovieSchema.js'
import createMovieService from '../services/createMovieService.js'

export default function createMovieController (req, res) {
  const { body } = req

  const [error, movie] = parseData(body)

  if (error) {
    return res.status(400).json({ message: error })
  }

  createMovieService(movie)
    .then((createdMovie) => res.status(201).json(createdMovie))
    .catch((err) => {
      console.log('Error: ', err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
