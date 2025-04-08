import connection from '../../../config/database.js'

export default async function getAllMoviesService () {
  const [results] = await connection.query(
    'SELECT id, title, description, release_date, duration FROM movies;'
  )

  return results
}
