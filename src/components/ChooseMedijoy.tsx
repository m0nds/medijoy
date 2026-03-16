const reasons = [
  {
    title: 'Personalized Care',
    description:
      'Every treatment is tailored to your unique skin type, concerns, and goals.',
    image: '/assets/images/personalizedCare.png',
  },
  {
    title: 'Expert Guidance',
    description:
      'Led by Joy, a certified aesthetician with over 40 years of medical experience, Medijoy Clinic combines advanced medical knowledge with aesthetic expertise to deliver trusted, professional skin care solutions.',
    image: '/assets/images/expertGuidance.png',
  },
  {
    title: 'Evidence-Based Approach',
    description:
      'We use proven treatments backed by science, not trends. Your skin deserves methods that work.',
    image: '/assets/images/evidenceBased.png',
  },
  {
    title: 'Clean environment',
    description:
      'A peaceful clean space where you can relax, ask questions, feel supported throughout your journey.',
    image: '/assets/images/cleanEnvironment.png',
  },
  {
    title: 'Safe & Regulated',
    description:
      'All treatments follow strict safety protocols and are carried out to the highest medical standards.',
    image: '/assets/images/safeRegulated.png',
  },
]

export default function ChooseMedijoy() {
  return (
    <section id="about" className="border-t border-dashed py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-medium text-[#2D4700] px-2">
          Why Choose Medijoy?
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-black px-4 tracking-wide">
          Your skin health is our priority. We combine medical expertise with genuine care to help
          you feel confident in your skin.
        </p>
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {reasons.map(({ title, description, image }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="relative h-36 w-36 sm:h-44 sm:w-44 lg:h-48 lg:w-48 shrink-0 overflow-hidden rounded-full bg-slate-200">
                <img src={image} alt={title} className="h-full w-full object-cover hover:scale-105 transition-all duration-300" />
              </div>
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-[#1a1a1a]">{title}</h3>
              <p className="mt-1.5 sm:mt-2 max-w-sm text-xs sm:text-sm leading-relaxed text-black font-light px-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
