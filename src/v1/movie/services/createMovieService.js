import connection from '../../../config/database.js'

export default async function createMovieService ({
  title,
  description,
  release_date,
  duration
}) {
  const [result] = await connection.query(
    'INSERT INTO movies (title, description, release_date, duration) VALUES (?, ?, ?, ?)',
    [title, description, release_date, duration]
  )

  return {
    id: result.insertId,
    title,
    description,
    release_date,
    duration
  }
}
