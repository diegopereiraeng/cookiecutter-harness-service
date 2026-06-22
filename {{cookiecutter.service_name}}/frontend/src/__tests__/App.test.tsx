import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('is a function component', () => {
    expect(typeof App).toBe('function')
  })
  it('has the correct display name', () => {
    expect(App.name).toBe('App')
  })
})
