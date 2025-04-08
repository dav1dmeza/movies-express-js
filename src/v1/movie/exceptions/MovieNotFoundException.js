export default class MovieNotFoundException extends Error {
  constructor () {
    super('La película no pudo ser encontrada')
  }
}
