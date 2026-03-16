const qualifications = [
  {
    title: 'Qualified & Certified',
    description:
      'Level 7 Aesthetics Practitioner with advanced training in injectables and skin treatments',
    image: '/assets/images/qualifiedCertified.png',
  },
  {
    title: 'Client Centered Care',
    description:
      'Every treatment is personalized, every client is heard, and every result is natural',
    image: '/assets/images/clientCenteredCare.png',
  },
  {
    title: '10+ Years of Experience',
    description:
      'A decade of helping clients achieve their skin goals with expertise and care',
    image: '/assets/images/tenYearsExperience.png',
  },
]

export default function MeetCeo() {
  return (
    <section id="meet-joy" className="py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#336633]">
          Meet Joy
        </h2>
        <p className="mt-1.5 sm:mt-2 text-center text-sm sm:text-base text-slate-600">
          Founder & Lead Aesthetics Practitioner
        </p>

        {/* Two-column: portrait + intro text */}
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="overflow-hidden rounded-xl shadow-md max-w-md mx-auto lg:max-w-none">
            <img
              src="/assets/images/meetJoy.png"
              loading="lazy"
              decoding="async"
              alt="Joy - Founder & Lead Aesthetics Practitioner"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div>
            <p className="text-left text-sm sm:text-base text-[#1a1a1a] leading-relaxed">
              With over 40 years of experience as a qualified registered nurse (RGN) and
              aesthetician, I founded Medijoy with a clear mission to restore confidence through
              personalised, results-driven treatment.
            </p>
            <p className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-[#1a1a1a] leading-relaxed">
              Trained by leading experts in the industry, I provide treatments with precision,
              safety, and exceptional care.
            </p>
            <p className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-[#1a1a1a] leading-relaxed">
              By listening closely, educating thoroughly, and designing bespoke treatment plans, I
              ensure you receive care that truly works for you.
            </p>
            <p className="mt-6 sm:mt-8 text-right text-sm sm:text-base font-normal text-[#1a1a1a]">Dr. Joy Marivate</p>
          </div>
        </div>

        {/* Qualification and experience */}
        <h2 className="mt-12 sm:mt-16 lg:mt-20 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#336633]">
          Qualification and experience
        </h2>
        <p className="mt-1.5 sm:mt-2 text-center text-sm sm:text-base text-slate-600">
          You deserve an expert you can trust
        </p>
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {qualifications.map(({ title, description, image }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="relative h-14 w-14 sm:h-[70px] sm:w-[70px] shrink-0 overflow-hidden rounded-full bg-slate-200">
                <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-[#1a1a1a]">{title}</h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-[#1a1a1a] px-1">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-16 flex justify-center">
          <a
            href="/meet-joy"
            className="rounded-4xl bg-[#8BB070] w-full md:w-auto text-center px-8 py-4 sm:px-16 sm:py-3 text-white hover:opacity-95 text-lg sm:text-base"
          >
            Learn more about Joy
          </a>
        </div>
      </div>
    </section>
  )
}
