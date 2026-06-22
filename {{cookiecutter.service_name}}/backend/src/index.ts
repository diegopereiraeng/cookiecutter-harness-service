import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use('/api', router)

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Service is healthy
 */
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: '{{ cookiecutter.service_name }}', version: process.env.APP_VERSION || 'dev' })
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 {{ cookiecutter.service_name }}-api running on port ${PORT}`)
  })
}

export default app
