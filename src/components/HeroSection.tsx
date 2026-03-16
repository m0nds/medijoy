import { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { useMobile } from '../hooks/useMobile'

export default function HeroSection() {
  const isMobile = useMobile()
  const statsRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  const responsiveImage = isMobile
    ? '/assets/images/mobileBackground.png'
    : '/assets/images/desktopBackground.png'

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="relative w-full bg-no-repeat bg-cover bg-center rounded-none sm:rounded-2xl mb-4"
      style={{ backgroundImage: `url(${responsiveImage})` }}
    >
      <div className="mx-auto grid min-h-[70vh] sm:min-h-[80vh] pt-36 lg:min-h-[85vh] items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col max-w-5xl mx-auto w-full px-0 sm:px-6 lg:px-16 text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight text-white">
            Medical-Led Aesthetic Care for Confident, Healthy Skin
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg max-w-[80%] sm:max-w-[90%] lg:w-[80%] leading-relaxed text-white mx-auto">
            Consultation led treatments, transparent pricing and natural results. At Medijoy your
            confidence begins with honest advice and expert care.
          </p>
          <a
            href="https://booking.appointy.com/en-US/revivetherapies/bookings/service"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-8 w-full  md:mx-auto inline-block rounded-full bg-[var(--medijoy-green)] px-8 py-5 sm:px-12 sm:py-3.5 font-medium text-white hover:opacity-95 text-base sm:text-base"
          >
            Book a Consultation
          </a>
          <p className="mt-3 w-[70%] md:w-full sm:mt-4 mx-auto text-sm sm:text-sm font-normal text-[var(--medijoy-gold)]">
            £20 Consultation fee, redeemable against your treatment
          </p>
        </div>
      </div>

      {/* Stats bar - full width at bottom of hero */}
      <div ref={statsRef} className="">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-5 py-6 sm:py-10 sm:px-6">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              {inView ? (
                <CountUp end={100} duration={2} suffix="+" useEasing startOnMount />
              ) : (
                '0+'
              )}
            </div>
            <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-white/95">
              Impressed Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              {inView ? (
                <CountUp end={10} duration={2} suffix="+" useEasing startOnMount />
              ) : (
                '0+'
              )}
            </div>
            <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-white/95">
              Years of Clinical Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              {inView ? (
                <CountUp end={98} duration={2} suffix="%" useEasing startOnMount />
              ) : (
                '0%'
              )}
            </div>
            <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-white/95">
              Client&apos;s Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
