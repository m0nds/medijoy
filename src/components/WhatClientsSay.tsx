import { Star } from 'lucide-react'

function GoogleLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mx-auto" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

const testimonials = [
  {
    name: 'Ogala Esther',
    text: 'Results speak louder than words at Medijoy Aesthetics. After my first treatment, i couldn\'t help the glow afterwards',
    image: '/assets/images/ogalaEsther.png',
    initial: null,
  },
  {
    name: 'Janet Holmes',
    text: 'Professional, knowledgeable, and caring. I trust Joy completely with my skincare journey',
    image: '/assets/images/janetHolmes.png',
    initial: null,
  },
  {
    name: 'Keez Kaplin',
    text: 'I visited Medijoy for microneedling recently, and i can honestly say it was a positive experience from start to finish.',
    image: null,
    initial: 'K',
  },
]

export default function WhatClientsSay() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2d4700] px-2">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-slate-600 px-2">
          Real experiences from real people we&apos;ve had the privilege to help
        </p>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
          {testimonials.map(({ name, text, image, initial }) => (
            <div
              key={name}
              className="flex flex-col items-center rounded-lg bg-[#FFD181]/15 p-4 sm:p-6 md:p-8 shadow-[0_2px_5px_rgba(0,0,0,0.05)]"
            >
              <div className="flex flex-col items-center text-center">
                {image ? (
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full bg-slate-200">
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-[#4285F4] text-lg sm:text-xl font-semibold text-white">
                    {initial}
                  </div>
                )}
                <div className="mt-3 sm:mt-4 flex gap-0.5 text-[#FFC107]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[#333333]">{text}</p>
                <p className="mt-3 sm:mt-4 font-medium text-xs sm:text-sm text-[#333333]">- {name}</p>
                <div className="mt-4 sm:mt-5">
                  <GoogleLogo />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
