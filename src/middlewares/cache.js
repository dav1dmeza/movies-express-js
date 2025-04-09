import apicache from 'apicache'

const cache = apicache.middleware

function setCache (duration) {
  return cache(duration)
}

function cleanCache (_req, _res, next) {
  apicache.clear()
  next()
}

export {
  setCache,
  cleanCache
}
