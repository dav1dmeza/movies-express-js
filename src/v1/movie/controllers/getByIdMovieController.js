import MovieNotFoundException from '../exceptions/MovieNotFoundException.js'
import getByIdMovieService from '../services/getByIdMovieService.js'

export default function getByIdMovieController (req, res) {
  const {
    params: { id }
  } = req

  getByIdMovieService(id)
    .then((movie) => res.status(200).json(movie))
    .catch((err) => {
      if (err instanceof MovieNotFoundException) {
        return res.status(404).json({ message: err.message })
      }

      console.log(err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
