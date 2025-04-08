import connection from '../../../config/database.js'

export default async function createMovieService ({
  title,
  description,
  releaseDate,
  duration
}) {
  const [result] = await connection.query(
    'INSERT INTO movies (title, description, release_date, duration) VALUES (?, ?, ?, ?);',
    [title, description, releaseDate, duration]
  )

  return {
    id: result.insertId,
    title,
    description,
    releaseDate,
    duration
  }
}
