import { router } from '../routes'

describe('API Routes', () => {
  it('router is defined', () => {
    expect(router).toBeDefined()
  })
  it('router registers /hello route', () => {
    const paths = (router as any).stack
      .filter((layer: any) => layer.route)
      .map((layer: any) => layer.route.path as string)
    expect(paths).toContain('/hello')
  })
})
