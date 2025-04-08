import connection from '../../../config/database.js'
import MovieNotFoundException from '../exceptions/MovieNotFoundException.js'

export default async function getByIdMovieService (id) {
  const [result] = await connection.query(
    'SELECT id, title, description, release_date AS releaseDate, duration FROM movies WHERE id = ?;',
    [id]
  )

  if (result.length === 0) {
    throw new MovieNotFoundException()
  }

  return result[0]
}
