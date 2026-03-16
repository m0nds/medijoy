import { ChevronLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

const PHILOSOPHY_ITEMS = [
  {
    title: 'Client First Approach',
    description:
      'Your comfort, safety and satisfaction are at the heart of everything we do.',
    image: '/assets/images/clientCenteredCare.png',
  },
  {
    title: 'Natural Enhancement',
    description:
      'We believe in enhancing your natural beauty, not changing who you are.',
    image: '/assets/images/evidenceBased.png',
  },
  {
    title: 'Education & Transparency',
    description:
      'We take time to explain every treatment so you feel informed and confident.',
    image: '/assets/images/expertGuidance.png',
  },
]

const APPROACH_ITEMS = [
  {
    title: 'Natural, Subtle Results',
    text: "I believe in enhancing your natural beauty, not changing it. My goal is to help you look like the best version of yourself—refreshed, radiant, and confident.",
  },
  {
    title: 'Education & Transparency',
    text: "I always explain what I'm doing, why I'm doing it, and what you can expect. I want you to feel informed, comfortable, and excited about your treatment not confused or overwhelmed.",
  },
  {
    title: 'Client Centered Care',
    text: 'Every treatment is personalized, every client is heard, and every result is natural.',
  },
]

const CERTIFICATION_IMAGES = [
  '/assets/images/certifcation1.png',
  '/assets/images/certification2.png',
  '/assets/images/certification3.png',
  '/assets/images/certification4.png',
]

export default function MeetJoyPage() {
  return (
    <>
      {/* Meet Joy - hero + intro */}
      <section className="pb-12 sm:pb-20 pt-6 sm:pt-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center gap-20 lg:justify-center">
         <Link to="/" className="block lg:hidden bg-gray-200 rounded-full p-2">
         <ChevronLeftIcon className="w-5 h-5" />
         </Link>
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
            Meet Joy
          </h2>
         </div>
          <p className="mt-1.5 sm:mt-2 text-center text-sm sm:text-base text-slate-600">
            Your experienced aesthetician and skin health expert
          </p>

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="overflow-hidden rounded-xl shadow-md max-w-md mx-auto lg:max-w-none">
              <img
                src="/assets/images/meetJoy.png"
                alt="Joy Marivate - Founder & Lead Aesthetician"
                className="aspect-square w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div>
              <p className="text-left text-sm sm:text-base text-[#1a1a1a] leading-relaxed">
                With over 40 years of experience as a qualified registered nurse
                (RGN) and aesthetician, I founded Medijoy with a clear mission to
                restore confidence through personalized, results-driven treatment.
              </p>
              <p className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-[#1a1a1a] leading-relaxed">
                Trained by leading experts in the industry, I provide treatments
                with precision, safety, and exceptional care.
              </p>
              <p className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-[#1a1a1a] leading-relaxed">
                By listening closely, educating thoroughly, and designing bespoke
                treatment plans, I ensure you receive care that truly works for
                you.
              </p>
              <p className="mt-6 sm:mt-8 text-right text-sm sm:text-base font-normal text-[#1a1a1a]">
                - Joy Marivate
              </p>
              <p className="mt-1 text-right text-xs sm:text-sm font-semibold text-[#1a1a1a]">
                Founder & Lead Aesthetician
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
            Our Philosophy
          </h2>
          <p className="mt-1.5 sm:mt-2 text-center text-sm sm:text-base text-slate-600">
            The principles that guide every treatment and interaction at Medijoy
          </p>
          <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-3">
            {PHILOSOPHY_ITEMS.map(({ title, description, image }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full bg-slate-200">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-[#1a1a1a]">
                  {title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 px-2">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My approach to Aesthetics */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
            My approach to Aesthetics
          </h2>
          <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
            {APPROACH_ITEMS.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-lg sm:rounded-xl px-4 py-4 sm:px-6 sm:py-5"
                style={{ backgroundColor: 'var(--medijoy-beige)' }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#2D4700]">{title}</h3>
                <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-[#333333] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
            Certifications & Awards
          </h2>
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            {CERTIFICATION_IMAGES.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg sm:rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={src}
                  alt={`Certification ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final quote / Mission */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-[#2D4700]">
            My mission is simple; to help you feel like the best version of
            yourself. When you feel confident in your skin, it changes
            everything.
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#333333]">- Joy Marivate</p>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-[#333333]">
            CEO Founder Medijoy Aesthetics Clinic
          </p>
        </div>
      </section>
    </>
  )
}
