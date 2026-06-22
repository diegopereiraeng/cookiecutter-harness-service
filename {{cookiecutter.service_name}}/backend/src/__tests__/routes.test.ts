import request from 'supertest'
import app from '../index'

describe('Health', () => {
  it('GET /health returns 200 with status ok', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
  })
})

describe('API Routes', () => {
  it('GET /api/hello returns 200 with message', async () => {
    const res = await request(app).get('/api/hello')
    expect(res.status).toBe(200)
    expect(res.body.message).toBeDefined()
    expect(typeof res.body.message).toBe('string')
  })
})
