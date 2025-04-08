import connection from '../../../config/database.js'
import MovieNotFoundException from '../exceptions/MovieNotFoundException.js'

export default async function updateMovieService ({
  id,
  title,
  description,
  release_date,
  duration
}) {
  const [result] = await connection.query(
    'UPDATE movies set title = ?, description = ?, release_date = ?, duration = ? WHERE id = ?;',
    [title, description, release_date, duration, id]
  )

  if (result.affectedRows === 0) {
    throw new MovieNotFoundException()
  }

  return {
    id,
    title,
    description,
    release_date,
    duration
  }
}
