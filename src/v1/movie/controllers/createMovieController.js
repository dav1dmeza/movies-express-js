import createMovieService from '../services/createMovieService.js'

export default function createMovieController (req, res) {
  const movie = req.body

  createMovieService(movie)
    .then((createdMovie) => res.status(201).json(createdMovie))
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
