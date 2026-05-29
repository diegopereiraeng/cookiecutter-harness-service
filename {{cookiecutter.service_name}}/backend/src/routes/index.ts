import { Router } from 'express'

export const router = Router()

/**
 * @openapi
 * /api/hello:
 *   get:
 *     summary: Hello World endpoint
 *     tags: [Hello]
 *     responses:
 *       200:
 *         description: Returns a greeting
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/hello', (_req, res) => {
  res.json({ message: 'Hello from {{ cookiecutter.service_name }}!' })
})
