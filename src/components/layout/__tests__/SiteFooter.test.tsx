import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { SiteFooter } from '@/components/layout/SiteFooter'

// Mock Next.js Link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('SiteFooter', () => {
  it('renders the company name', () => {
    render(<SiteFooter />)
    expect(screen.getByText('RSK TECHNOLOGIES GROUP')).toBeInTheDocument()
  })

  it('renders company description', () => {
    render(<SiteFooter />)
    expect(screen.getByText(/We design, build, and operate modern digital products/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<SiteFooter />)
    // Social links are present
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(5) // Company + services + social
  })

  it('renders company links', () => {
    render(<SiteFooter />)
    expect(screen.getAllByText('Services')).toHaveLength(2) // one in company, one in services section
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })

  it('renders services links', () => {
    render(<SiteFooter />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('App Development')).toBeInTheDocument()
    expect(screen.getByText('MVP Development')).toBeInTheDocument()
  })

  it('renders copyright notice', () => {
    render(<SiteFooter />)
    expect(screen.getByText(/© 2026 RSK TECHNOLOGIES GROUP/)).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<SiteFooter />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  })
})