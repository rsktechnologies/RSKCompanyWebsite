import { render, screen } from '@testing-library/react'
import ServicesPage from '@/app/services/page'

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

// Mock framer-motion
jest.mock('@/components/motion/Reveal', () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('ServicesPage', () => {
  it('renders the services page', () => {
    render(<ServicesPage />)
    expect(screen.getByText((content, element) => content.includes('Technology services that deliver results'))).toBeInTheDocument()
  })

  it('renders service cards', () => {
    render(<ServicesPage />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('App Development')).toBeInTheDocument()
    expect(screen.getByText('MVP & Startup Acceleration')).toBeInTheDocument()
  })

  it('renders the process section', () => {
    render(<ServicesPage />)
    expect(screen.getByText('A process designed for results.')).toBeInTheDocument()
    expect(screen.getByText('Discovery')).toBeInTheDocument()
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Launch')).toBeInTheDocument()
    expect(screen.getByText('Evolve')).toBeInTheDocument()
  })

  it('renders CTA section', () => {
    render(<ServicesPage />)
    expect(screen.getByText('Ready to accelerate your technology?')).toBeInTheDocument()
    expect(screen.getByText('Start a conversation')).toBeInTheDocument()
  })

  it('displays correct technologies for web development', () => {
    render(<ServicesPage />)
    expect(screen.getByText('React/Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Responsive Design')).toBeInTheDocument()
  })

  it('displays correct technologies for app development', () => {
    render(<ServicesPage />)
    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('Flutter')).toBeInTheDocument()
    expect(screen.getByText('iOS Swift')).toBeInTheDocument()
  })
})