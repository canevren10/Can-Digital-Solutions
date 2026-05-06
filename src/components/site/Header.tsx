import { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/#hizmetler' },
  { label: 'Neden Ben?', href: '/#neden-ben' },
  { label: 'İletişim', href: '/#iletisim' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const routerState = useRouterState()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [routerState.location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.includes('#')) {
      const id = href.split('#')[1]
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="font-semibold text-neutral-900 text-sm tracking-tight">
              Can Digital
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.includes('#')) {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }
                }}
                className="px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 rounded-md hover:bg-neutral-100 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#iletisim"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('/#iletisim')
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-md border-b border-neutral-200`}
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.includes('#')) {
                  e.preventDefault()
                  handleNavClick(link.href)
                } else {
                  setMobileOpen(false)
                }
              }}
              className="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-neutral-100">
            <a
              href="/#iletisim"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('/#iletisim')
              }}
              className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Teklif Al
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
