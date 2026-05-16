import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import PortfolioPage from '@/app/portfolio/page'

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: Record<string, unknown>) => <img {...props} alt="" />,
}))

// Mock framer-motion
jest.mock('@/components/motion/Reveal', () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('PortfolioPage', () => {
  it('renders the portfolio page', () => {
    render(<PortfolioPage />)
    expect(screen.getByRole('heading', { level: 1, name: /Projects that/ })).toBeInTheDocument()
  })

  it('renders project cards', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Mobile Banking App')).toBeInTheDocument()
    expect(screen.getByText('SaaS Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Startup MVP')).toBeInTheDocument()
  })

  it('renders project categories', () => {
    render(<PortfolioPage />)
    expect(screen.getAllByText('Web Development')).toHaveLength(2)
    expect(screen.getByText('App Development')).toBeInTheDocument()
    expect(screen.getByText('MVP Development')).toBeInTheDocument()
  })

  it('renders technologies', () => {
    render(<PortfolioPage />)
    expect(screen.getAllByText('React')).toHaveLength(2)
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Stripe')).toBeInTheDocument()
    expect(screen.getByText('React Native')).toBeInTheDocument()
  })

  it('renders CTA section', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('Ready to start your project?')).toBeInTheDocument()
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  it('renders view project links', () => {
    render(<PortfolioPage />)
    const viewLinks = screen.getAllByText('View project')
    expect(viewLinks).toHaveLength(4)
  })
})