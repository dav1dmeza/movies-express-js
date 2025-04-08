import MovieNotFoundException from '../exceptions/MovieNotFoundException.js'
import deleteMovieService from '../services/deleteMovieService.js'

export default function deleteMovieController (req, res) {
  const {
    params: { id }
  } = req

  deleteMovieService(id)
    .then(() => res.status(204).send())
    .catch((err) => {
      if (err instanceof MovieNotFoundException) {
        return res.status(404).json({ message: err.message })
      }

      console.log(err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
