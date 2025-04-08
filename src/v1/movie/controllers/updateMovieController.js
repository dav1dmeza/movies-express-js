import MovieNotFoundException from '../exceptions/MovieNotFoundException.js'
import parseData from '../schema/MovieSchema.js'
import updateMovieService from '../services/updateMovieService.js'

export default function updateMovieController (req, res) {
  const {
    params: { id },
    body
  } = req

  const [error, movie] = parseData(body)

  if (error) {
    return res.status(400).json({ message: error })
  }

  updateMovieService({
    id,
    ...movie
  })
    .then((updatedMovie) => res.status(200).json(updatedMovie))
    .catch((err) => {
      if (err instanceof MovieNotFoundException) {
        return res.status(404).json({ message: err.message })
      }

      console.log('Error: ', err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
