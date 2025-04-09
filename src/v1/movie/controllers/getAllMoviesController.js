import getAllMoviesService from '../services/getAllMoviesService.js'

export default function getAllMoviesController (req, res) {
  const {
    query: {
      limit, page, title
    }
  } = req

  getAllMoviesService({ limit, page, title })
    .then((movies) => res.status(200).json(movies))
    .catch((err) => {
      console.log('Error: ', err.message)
      res.status(500).json({ message: 'Lo sentimos, ocurrió un error' })
    })
}
