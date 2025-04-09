import connection from '../../../config/database.js'

function toNumber (value, defaultValue) {
  const result = parseInt(value)

  if (isNaN(result)) {
    return defaultValue
  }

  if (result <= 0) {
    return defaultValue
  }

  return result
}

export default async function getAllMoviesService ({ limit, page, title }) {
  const DEFAULT_LIMIT = 10
  const DEFAULT_PAGE = 1

  const currentLimit = toNumber(limit, DEFAULT_LIMIT)
  const currentPage = toNumber(page, DEFAULT_PAGE)

  const offset = (currentPage - 1) * currentLimit

  let queryStringCount = 'SELECT COUNT(*) AS total FROM movies'
  let queryStringRows = 'SELECT id, title, description, release_date AS releaseDate, duration FROM movies'
  const params = []

  if (title) {
    queryStringCount += ' WHERE title LIKE ?'
    queryStringRows += ' WHERE title LIKE ?'
    params.push(`%${title}%`)
  }

  const [count] = await connection.query(`${queryStringCount};`, params)

  const [results] = await connection.query(
    `${queryStringRows};`,
    [...params, currentLimit, offset]
  )

  const totalPage = Math.ceil(count[0].total / currentLimit)

  return {
    items: results,
    meta: {
      totaItems: count[0].total,
      itemsPerPage: currentLimit,
      previousPage: currentPage === 1 ? null : currentPage - 1,
      currentPage,
      nextPage: currentPage === totalPage ? null : currentPage + 1,
      totalPage
    }
  }
}
