import { type ReactNode, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronUp } from 'lucide-react'
import AreYouReady from '../AreYouReady'

interface LayoutProps {
  children: ReactNode
}

const navLinks = [
  { to: '/about-medijoy', label: 'About' },
  { to: '/skin-concerns', label: 'Skin Concern' },
  { to: '/services', label: 'Services' },
  { to: '/meet-joy', label: 'Meet Joy' },
  { to: '/proven-results', label: 'Proven Results' },
  { to: '/faqs', label: 'FAQs' },
] as const

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isAboutActive = location.pathname === '/about-medijoy'
  const isSkinConcernActive = location.pathname.startsWith('/skin-concerns')
  const isServicesActive = location.pathname.startsWith('/services')
  const isMeetJoyActive = location.pathname === '/meet-joy'
  const isProvenResultsActive = location.pathname === '/proven-results'
  const isFaqsActive = location.pathname === '/faqs'

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const id = requestAnimationFrame(() => setMenuOpen(false))
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const [showBackToTop, setShowBackToTop] = useState(false)
  useEffect(() => {
    if (!isHome) return
    const onScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const linkActive = (to: string) => {
    if (to === '/about-medijoy') return isAboutActive
    if (to === '/skin-concerns') return isSkinConcernActive
    if (to === '/services') return isServicesActive
    if (to === '/meet-joy') return isMeetJoyActive
    if (to === '/proven-results') return isProvenResultsActive
    if (to === '/faqs') return isFaqsActive
    return false
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--page-bg)] text-[#1a1a1a]">
      <header className="sticky top-0 z-40 w-full bg-[var(--page-bg)] shrink-0 border-b border-slate-200/60 lg:border-0">
        <nav className="flex px-4 sm:px-6 lg:mx-14 items-center justify-between gap-4 py-4 sm:py-5 lg:py-6">
          <Link to="/" className="flex items-center gap-2 text-[#1a1a1a] hover:opacity-90 shrink-0" onClick={() => setMenuOpen(false)}>
            <img src="/assets/logo/medijoyLogo.png" alt="Medijoy Logo" className="h-7 w-auto sm:h-8 max-w-[140px] sm:max-w-none" fetchPriority="high" decoding="async" width="140" height="32" />
          </Link>

          {/* Desktop nav - hidden on mobile/tablet */}
          <div className="hidden lg:flex flex-wrap items-center justify-end gap-6 xl:gap-8">
            <Link to="/about-medijoy" className={isAboutActive ? 'font-semibold text-[var(--medijoy-green)]' : 'text-[#1a1a1a] hover:opacity-80'}>About</Link>
            <Link to="/skin-concerns" className={isSkinConcernActive ? 'font-semibold text-[var(--medijoy-green)]' : 'text-[#1a1a1a] hover:opacity-80'}>Skin Concern</Link>
            <Link to="/services" className={isServicesActive ? 'font-semibold text-[var(--medijoy-green)]' : 'text-[#1a1a1a] hover:opacity-80'}>Services</Link>
            <Link to="/meet-joy" className={isMeetJoyActive ? 'font-semibold text-[var(--medijoy-green)]' : 'text-[#1a1a1a] hover:opacity-80'}>Meet Joy</Link>
            <Link to="/proven-results" className={isProvenResultsActive ? 'font-semibold text-[var(--medijoy-green)]' : 'text-[#1a1a1a] hover:opacity-80'}>Proven Results</Link>
            <Link to="/faqs" className={isFaqsActive ? 'font-semibold text-[var(--medijoy-green)]' : 'text-[#1a1a1a] hover:opacity-80'}>FAQs</Link>
            <a href="https://api.whatsapp.com/send/?phone=447404964889&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border-2 border-[var(--medijoy-green)] bg-[#f8f9f6] px-6 py-2.5 text-sm font-medium text-[var(--medijoy-green)] hover:bg-[#eef0e9] xl:px-8">
              Chat With Joy On WhatsApp
            </a>
          </div>

          {/* Hamburger - visible on mobile/tablet only with whatsapp icon beside it*/}
          <div className="flex items-center gap-2">
            <a 
              href="https://api.whatsapp.com/send/?phone=447404964889&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
            className="text-[#1a1a1a] hover:opacity-80 lg:hidden">
              <img src="/assets/images/whatsappImage.png" alt="" className="h-8 w-8" loading="lazy" decoding="async" width="32" height="32" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg text-[#1a1a1a] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[var(--medijoy-green)] focus:ring-offset-2 transition-colors"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile/tablet menu overlay + panel */}
      <div
        className="fixed inset-0 z-50 lg:hidden"
        aria-hidden={!menuOpen}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[min(320px,85vw)] max-w-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100">
            <span className="text-sm font-medium text-slate-500">Menu</span>
            <button type="button" onClick={() => setMenuOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col flex-1 overflow-y-auto py-4">
            {navLinks.map(({ to, label }) => {
              const active = linkActive(to)
              const className = `px-4 py-3.5 text-left text-base font-medium transition-colors ${active ? 'text-[var(--medijoy-green)] bg-[var(--medijoy-green)]/10' : 'text-[#1a1a1a] hover:bg-slate-50'}`
              return <Link key={to} to={to} className={className} onClick={() => setMenuOpen(false)}>{label}</Link>
            })}
            <a
              href="https://api.whatsapp.com/send/?phone=447404964889&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-4 rounded-full border-2 border-[var(--medijoy-green)] bg-[#f8f9f6] px-6 py-3 text-center text-sm font-medium text-[var(--medijoy-green)] hover:bg-[#eef0e9]"
            >
              Chat With Joy On WhatsApp
            </a>
          </nav>
        </div>
      </div>

      <main className="px-4 sm:px-6 lg:mx-14">
        {children}
        <AreYouReady />
      </main>

      {/* Back to top - home page only */}
      {isHome && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className={`fixed bottom-6 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--medijoy-green)] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--medijoy-green)] focus:ring-offset-2 ${
            showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
          }`}
        >
          <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
        </button>
      )}

      <footer className="bg-[var(--medijoy-green)] shrink-0 text-white">
        <div className="px-4 py-10 sm:px-6 sm:py-12 lg:mx-14">
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm leading-relaxed">
                Expert medical aesthetics clinic in the UK, offering safe, results-driven treatments
                with honest consultations.
              </p>
              <p className="text-lg sm:text-xl font-semibold leading-relaxed pt-3">Follow us</p>
              <div className="mt-4 flex gap-3">
                <a href="https://www.instagram.com/medijoy_aesthetics/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 hover:bg-white/30" aria-label="Instagram">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                {/* <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 hover:bg-white/30" aria-label="Facebook">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a> */}
                <a
                  href="https://www.tiktok.com/@medijoy_aesthetics?_r=1&_t=ZS-94aRb53Kr6T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
                  aria-label="Tiktok"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.25 6.75c.63.57 1.36 1.04 2.16 1.36.36.14.74.24 1.13.3v2.28a6.1 6.1 0 0 1-3.29-1.01 6.52 6.52 0 0 1-1.2-1.04v6.48c0 2.96-2.4 5.38-5.36 5.38A5.37 5.37 0 0 1 5.5 15.7c0-2.96 2.42-5.38 5.39-5.38.39 0 .77.04 1.13.13v2.25a3.2 3.2 0 0 0-1.13-.21 3.13 3.13 0 0 0-3.16 3.21 3.13 3.13 0 0 0 3.16 3.2 3.16 3.16 0 0 0 3.13-3.2V3.75h2.3c.07.8.34 1.56.83 2.26z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li><Link to="/about-medijoy" className="hover:underline">About Medijoy</Link></li>
                <li><Link to="/skin-concerns" className="hover:underline">Skin Concern</Link></li>
                <li><Link to="/services" className="hover:underline">Services</Link></li>
                <li><Link to="/meet-joy" className="hover:underline">Meet Joy</Link></li>
                <li><a href="https://api.whatsapp.com/send/?phone=447404964889&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Learn More</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
                <li><Link to="/proven-results" className="hover:underline">Proven Results</Link></li>
                <li><a href="https://booking.appointy.com/en-US/revivetherapies/bookings/service" target="_blank" rel="noopener noreferrer" className="hover:underline">Booking a Consultation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>77 Bedfont Ln, Feltham TW149BH</li>
                <li>+44 7404 964889</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 h-px bg-white/40" />
          <div className="mt-6 text-center text-sm opacity-90">
            © 2026 Medijoy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
