const request = require('supertest')
const app = require('../src/app')

describe('Main Service API', () => {
  it('should return Hello from Main Service', async () => {
    const res = await request(app).get('/')
    expect(res.text).toBe('Hello from Main Service')
  })
})
