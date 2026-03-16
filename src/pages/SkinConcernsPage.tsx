import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRight } from 'lucide-react'
import { SKIN_CONCERN_CARDS } from '../data/skinConcerns'

const WHY_PROFESSIONAL_ITEMS = [
  {
    title: 'Advanced Ingredients',
    description:
      'Professional-grade products and advanced formulations that deliver visible results you can\'t achieve at home.',
    image: '/src/assets/images/advancedIngredients.png',
  },
  {
    title: 'Expert Assessment',
    description:
      'Personalised treatment plans based on a thorough analysis of your skin type, concerns and goals.',
    image: '/src/assets/images/expertGuidance.png',
  },
  {
    title: 'Clinical Technology',
    description:
      'Medical-grade equipment and proven techniques that work at a deeper level to address root causes.',
    image: '/src/assets/images/clinicalTechnology.png',
  },
  {
    title: 'Ongoing Support',
    description:
      'Continuous support and maintenance plans to help you achieve and sustain healthy, confident skin.',
    image: '/src/assets/images/ongoingSupport.png',
  },
]

export default function SkinConcernsPage() {
  return (
    <>
      {/* Find Skin Concerns */}
      <section className="pb-12 sm:pb-20 pt-6 sm:pt-8 px-0">
        <div className="flex items-center gap-20 lg:justify-center">
         <Link to="/" className="block lg:hidden bg-gray-200 rounded-full p-2">
         <ChevronLeftIcon className="w-5 h-5" />
         </Link>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
          Find Skin Concerns
        </h2>
         </div>
        <p className="mx-auto mt-2 sm:mt-3 w-full text-center text-sm sm:text-base max-w-3xl text-black px-4">
          Every skin journey is different. Whether you are dealing with
          breakouts, ageing, or texture concerns we have expert solutions
          tailored just for you.
        </p>
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SKIN_CONCERN_CARDS.map(({ title, description, image, slug }) => (
            <Link
              key={slug}
              to={`/skin-concerns/${slug}`}
              className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="w-full bg-slate-200">
                <img
                  src={image}
                  alt={title}
                  className="h-32 w-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4 lg:px-6 lg:py-8">
                <h3 className="text-lg sm:text-xl font-normal text-[#1a1a1a]">{title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-black">{description}</p>
                <span className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-normal text-[var(--medijoy-green)] hover:underline">
                  View Treatment
                  <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Professional Treatment Matters */}
      <section className="pb-8 sm:pb-12 pt-6 sm:pt-8">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
          Why Professional Treatment Matters
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-black px-4">
          Professional treatment works at a deeper level to address the root
          causes of your skin concerns, not just the symptoms.
        </p>
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_PROFESSIONAL_ITEMS.map(({ title, description, image }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-full bg-slate-200">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-[#1a1a1a]">
                {title}
              </h3>
              <p className="mt-1.5 sm:mt-2 max-w-xs text-xs sm:text-sm leading-relaxed text-black px-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
