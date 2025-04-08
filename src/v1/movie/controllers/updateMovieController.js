import MovieNotFoundException from '../exceptions/MovieNotFoundException.js'
import updateMovieService from '../services/updateMovieService.js'

export default function updateMovieController (req, res) {
  const {
    params: { id },
    body
  } = req

  const movie = {
    id,
    ...body
  }

  updateMovieService(movie)
    .then((updatedMovie) => res.status(200).json(updatedMovie))
    .catch((err) => {
      if (err instanceof MovieNotFoundException) {
        return res.status(404).json({ message: err.message })
      }

      console.log(err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
