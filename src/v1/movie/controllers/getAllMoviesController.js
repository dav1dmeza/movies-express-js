import getAllMoviesService from '../services/getAllMoviesService.js'

export default function getAllMoviesController (_req, res) {
  getAllMoviesService()
    .then((movies) => res.status(200).json(movies))
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
