import { Router } from 'express'
import { cleanCache, setCache } from '../../middlewares/cache.js'
import createMovieController from './controllers/createMovieController.js'
import deleteMovieController from './controllers/deleteMovieController.js'
import getAllMoviesController from './controllers/getAllMoviesController.js'
import getByIdMovieController from './controllers/getByIdMovieController.js'
import updateMovieController from './controllers/updateMovieController.js'

const router = Router()

router.get('/', setCache('10 minutes'), getAllMoviesController)

router.get('/:id', setCache('10 minutes'), getByIdMovieController)

router.post('/', cleanCache, createMovieController)

router.patch('/:id', cleanCache, updateMovieController)

router.delete('/:id', cleanCache, deleteMovieController)

export default router
