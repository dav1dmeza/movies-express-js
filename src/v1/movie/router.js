import { Router } from 'express'
import { cleanCache, setCache } from '../../middlewares/cache.js'
import createMovieController from './controllers/createMovieController.js'
import deleteMovieController from './controllers/deleteMovieController.js'
import getAllMoviesController from './controllers/getAllMoviesController.js'
import getByIdMovieController from './controllers/getByIdMovieController.js'
import updateMovieController from './controllers/updateMovieController.js'

const router = Router()

/**
* @openapi
* /api/v1/movies:
*   get:
*     tags:
*       - Movies
*     parameters:
*       - in: query
*         name: page
*         schema:
*           type: number
*         description: Número de página
*       - in: query
*         name: limit
*         schema:
*           type: number
*         description: Límite de registros por página
*       - in: query
*         name: title
*         schema:
*           type: string
*         description: Título de una película
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 items:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: number
*                         example: 1
*                       title:
*                         type: string
*                         example: Iron Man
*                       description:
*                         type: string
*                         example: Iron Man es una película de superhéroes basada en el personaje de Marvel Comics del mismo nombre. Dirigida por Jon Favreau, la película protagonizada por Robert Downey Jr. interpreta a Tony Stark, un industrialista multimillonario y genio inventor que construye un traje de alta tecnología para convertirse en el superhéroe Iron Man. La película también cuenta con Terrence Howard como Rhodey, el socio de negocios de Stark, y Gwyneth Paltrow como Pepper Potts, la asistente *                           personal de Stark. Jeff Bridges interpreta a Obadiah Stane, el antagonista principal que busca robar la tecnología de Stark para sus propios fines.
*                       releaseDate:
*                         type: date
*                         example: 2008-05-02T05:00:00.000Z
*                       duration:
*                         type: number
*                         example: 126
*                 meta:
*                   type: object
*                   properties:
*                     totaItems:
*                       type: number
*                       example: 2
*                     itemsPerPage:
*                       type: number
*                       example: 1
*                     previousPage:
*                       type: number | null
*                       example: null
*                     currentPage:
*                       type: number
*                       example: 1
*                     nextPage:
*                       type: number | null
*                       example: 2
*                     totalPage:
*                       type: number
*                       example: 2
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Lo sentimos, ocurrió un error
*/

router.get('/', setCache('10 minutes'), getAllMoviesController)

router.get('/:id', setCache('10 minutes'), getByIdMovieController)

router.post('/', cleanCache, createMovieController)

router.patch('/:id', cleanCache, updateMovieController)

router.delete('/:id', cleanCache, deleteMovieController)

export default router
