import connection from '../../../config/database.js'

function toNumeber (value, defaultValue) {
  const result = parseInt(value)

  if (isNaN(result)) {
    return defaultValue
  }

  if (result <= 0) {
    return defaultValue
  }

  return result
}

export default async function getAllMoviesService ({ limit, page }) {
  const DEFAULT_LIMIT = 10
  const DEFAULT_PAGE = 1

  const currentLimit = toNumeber(limit, DEFAULT_LIMIT)
  const currentPage = toNumeber(page, DEFAULT_PAGE)

  const offset = (currentPage - 1) * currentLimit

  const [count] = await connection.query('SELECT COUNT(*) AS total FROM movies;')

  const [results] = await connection.query(
    'SELECT id, title, description, release_date AS releaseDate, duration FROM movies LIMIT ? OFFSET ?;',
    [currentLimit, offset]
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
