import connection from '../../../config/database.js'
import MovieNotFoundException from '../exceptions/MovieNotFoundException.js'

const deleteMovieService = async (id) => {
  const [result] = await connection.query('DELETE FROM movies WHERE id = ?;', [
    id
  ])

  if (result.affectedRows === 0) {
    throw new MovieNotFoundException()
  }
}

export default deleteMovieService
