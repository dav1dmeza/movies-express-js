import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

describe('test api movies', () => {
  it('debería devolver la película', async () => {
    const response = await fetch('http://localhost:3000/api/v1/movies/1')
    const movie = await response.json()
    assert.strictEqual(response.status, 200)
    assert.deepEqual(movie, {
      id: 1,
      title: 'Iron Man',
      description: 'Iron Man es una película de superhéroes basada en el personaje de Marvel Comics del mismo nombre. Dirigida por Jon Favreau, la película protagonizada por Robert Downey Jr. interpreta a Tony Stark, un industrialista multimillonario y genio inventor que construye un traje de alta tecnología para convertirse en el superhéroe Iron Man. La película también cuenta con Terrence Howard como Rhodey, el socio de negocios de Stark, y Gwyneth Paltrow como Pepper Potts, la asistente personal de Stark. Jeff Bridges interpreta a Obadiah Stane, el antagonista principal que busca robar la tecnología de Stark para sus propios fines.',
      releaseDate: '2008-05-02T05:00:00.000Z',
      duration: 126
    })
  })

  it('debería devolver el error', async () => {
    const response = await fetch('http://localhost:3000/api/v1/movies/100')
    const movie = await response.json()
    assert.strictEqual(response.status, 404)
    assert.deepEqual(movie, {
      message: 'La película no pudo ser encontrada'
    })
  })
})
