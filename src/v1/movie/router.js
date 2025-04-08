import { Router } from 'express'
import createMovieController from './controllers/createMovieController.js'
import deleteMovieController from './controllers/deleteMovieController.js'
import getAllMoviesController from './controllers/getAllMoviesController.js'
import getByIdMovieController from './controllers/getByIdMovieController.js'
import updateMovieController from './controllers/updateMovieController.js'

const router = Router()

router.get('/', getAllMoviesController)

router.get('/:id', getByIdMovieController)

router.post('/', createMovieController)

router.patch('/:id', updateMovieController)

router.delete('/:id', deleteMovieController)

export default router
