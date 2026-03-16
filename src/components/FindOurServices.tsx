import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const services = [
  {
    title: 'Facials',
    description: 'Deep cleansing hydration and rejuvenation',
    image: '/assets/images/facials.png',
    categorySlug: 'facial-treatment',
  },
  {
    title: 'Advanced Treatment',
    description: 'Microneedling, peels and skin resurfacing',
    image: '/assets/images/advancedTreatment.png',
    categorySlug: 'advanced-treatment',
  },
  {
    title: 'Botox',
    description: 'Wrinkle reduction and facial contouring',
    image: '/assets/images/botox.png',
    categorySlug: 'botox',
  },
  {
    title: 'Skin Booster',
    description: 'Deep hydration and quality improvement',
    image: '/assets/images/skinBooster.png',
    categorySlug: 'skin-boosters',
  },
]

export default function FindOurServices() {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 sm:pt-20 lg:pt-24 border-t border-dashed bg-[#f3f4f3] sm:bg-transparent"
    >
      <div className="">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-medium text-[#2D4700] px-2">
          Find Our Services
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-black px-4 tracking-wide">
          Explore our comprehensive range of medical aesthetics treatments.
        </p>
        {/* Mobile pill-style list, desktop keeps card grid */}
        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:grid sm:gap-12 lg:gap-28 sm:grid-cols-2">
          {services.map(({ title, description, image, categorySlug }) => (
            <Link
              key={categorySlug}
              to={`/services?category=${categorySlug}`}
              className="group block overflow-hidden rounded-2xl sm:rounded-xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 px-4 py-3 sm:block sm:p-0">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-200 sm:h-48 sm:w-full sm:rounded-xl sm:mb-2">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>
                <div className="flex-1 sm:p-3 sm:pt-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base sm:text-xl font-medium text-[#1a1a1a]">
                      {title}
                    </h3>
                    <ChevronRight className="h-4 w-4 text-slate-400 sm:hidden" />
                  </div>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-black font-light">
                    {description}
                  </p>
                  <span className="hidden sm:inline-flex mt-2 items-center gap-1 text-xs sm:text-sm font-normal text-[#89A35D] group-hover:underline">
                    Learn more
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 sm:mt-20 flex justify-center">
          <Link
            to="/services"
            className="rounded-4xl bg-[#89A35D] w-full md:w-auto text-center px-8 py-4 sm:px-16 sm:py-3 text-white hover:opacity-95 text-lg sm:text-base"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
