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
  default: (props: Record<string, unknown>) => {
    const { alt, ...imageProps } = props
    delete imageProps.fill
    delete imageProps.priority

    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imageProps} alt={String(alt ?? '')} />
  },
}))

// Mock framer-motion
jest.mock('@/components/motion/Reveal', () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('PortfolioPage', () => {
  it('renders the portfolio page', () => {
    render(<PortfolioPage />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Real systems built for businesses that need to move/i,
      })
    ).toBeInTheDocument()
  })

  it('renders project cards', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('Money Lender Pro')).toBeInTheDocument()
    expect(screen.getByText('RSK-Tech Production Line')).toBeInTheDocument()
  })

  it('renders project categories', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('Fintech App')).toBeInTheDocument()
    expect(screen.getByText('Business System')).toBeInTheDocument()
  })

  it('renders technologies', () => {
    render(<PortfolioPage />)
    expect(screen.getAllByText('React')).toHaveLength(2)
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Finance Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Inventory Control')).toBeInTheDocument()
  })

  it('renders CTA section', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('Ready to start your project?')).toBeInTheDocument()
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  it('renders view project links', () => {
    render(<PortfolioPage />)
    const viewLinks = screen.getAllByText('View live work')
    expect(viewLinks).toHaveLength(2)
  })
})
