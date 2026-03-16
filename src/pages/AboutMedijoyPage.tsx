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

const DIFFERENCE_ITEMS = [
  {
    title: 'Medical Grade Standard',
    description:
      'All treatments use premium, clinically proven products and techniques for maximum safety and efficacy.',
    image: '/assets/images/medicalGradeStandard.png',
  },
  {
    title: 'Tailored Skin Treatment Plan',
    description:
      'No two skin types are the same. We create personalised plans based on your unique concerns and goals.',
    image: '/assets/images/tailoredPlan.png',
  },
  {
    title: 'Long-Term Relationship',
    description:
      'We are here for your entire skin journey, from first consultation through ongoing maintenance and support.',
    image: '/assets/images/longTermRelations.png',
  },
]

export default function AboutMedijoyPage() {
  return (
    <>
      {/* About Medijoy */}
      <section className="pb-12 sm:pb-16 lg:pb-20 pt-6 sm:pt-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center gap-20 lg:justify-center">
         <Link to="/" className="block lg:hidden bg-gray-200 rounded-full p-2">
         <ChevronLeftIcon className="w-5 h-5" />
         </Link>
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700]">
            About Medijoy
          </h1>
          </div>
          <div className="mt-6 sm:mt-8 overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
            <img
              src="/assets/images/aboutMedijoyClinic.png"
              alt="Reception at Medijoy Aesthetics Clinic"
              className="w-full h-56 sm:h-72 md:h-80 lg:h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          <p className="mt-6 text-sm sm:text-base text-center text-[#333333] leading-relaxed max-w-3xl mx-auto">
            At Medijoy, we believe that beautiful skin is healthy skin. Our mission is to help you
            achieve your best complexion through expert care, advanced treatments, and genuine
            support.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-12 sm:pb-16 lg:pb-20 pt-4 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-medium text-[#2D4700]">
            Our Story
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#333333] leading-relaxed text-center">
            Medijoy was founded on a simple belief: everyone deserves to feel confident in their
            own skin. Too often, the aesthetics industry can feel impersonal, rushed or focused
            solely on the latest trend rather than what&apos;s truly right for you.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#333333] leading-relaxed text-center">
            We are different. At Medijoy, you are not just a client, you are part of our community.
            We take the time to listen, to understand your unique concerns and to create a treatment
            plan that works for your skin, your lifestyle and your goals.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#333333] leading-relaxed text-center">
            With over 40 years of experience in medical aesthetics and a passion for skin health,
            we combine clinical expertise with a warm, welcoming approach.
          </p>
          <img src="/assets/images/ourStory.png" alt="Our Story" className="mt-8 w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700]">
            Our Philosophy
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            The principles that guide every treatment and interaction at Medijoy.
          </p>
          <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-3">
            {PHILOSOPHY_ITEMS.map(({ title, description, image }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full bg-slate-200">
                  <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
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

      {/* What makes Medijoy different? */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700]">
            What makes Medijoy different?
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            The principles that guide every treatment and interaction at Medijoy.
          </p>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3">
            {DIFFERENCE_ITEMS.map(({ title, description, image }) => (
              <div
                key={title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col"
              >
                <div className="w-full bg-slate-100 h-40 sm:h-44 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold text-[#1a1a1a]">{title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calm. Confidence. You */}
      <section className="py-12 sm:py-16 lg:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2D4700] italic">
            Calm. Confidence. You
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#333333] leading-relaxed">
            Our treatment philosophy is simple; enhance what you already have, never change who you
            are. We believe in results that look natural and feel right for you whether that&apos;s
            a subtle glow, smoother texture or more radiant and confident skin.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#333333] leading-relaxed">
            Every treatment is delivered with precision, care, and your safety as our top priority.
            We use only the highest quality products and the latest techniques, backed by clinical
            research and over 40 years of expertise.
          </p>
        </div>
      </section>
    </>
  )
}

