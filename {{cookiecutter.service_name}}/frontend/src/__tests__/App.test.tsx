import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the service name heading', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toBeDefined()
  })

  it('renders the service description', () => {
    render(<App />)
    const heading = screen.getByRole('heading')
    expect(heading.tagName).toBe('H1')
  })

  it('renders a paragraph with description', () => {
    render(<App />)
    const paragraphs = document.querySelectorAll('p')
    expect(paragraphs.length).toBeGreaterThan(0)
  })
})
