import { Link, useSearchParams } from 'react-router-dom'
import {
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from '../data/services'
import { ChevronLeftIcon } from 'lucide-react'

const isValidCategory = (slug: string) =>
  SERVICE_CATEGORIES.some((c) => c.slug === slug)

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const activeFilter =
    categoryFromUrl && isValidCategory(categoryFromUrl)
      ? categoryFromUrl
      : SERVICE_CATEGORIES[0].slug

  const setFilter = (slug: string) => {
    setSearchParams({ category: slug })
  }

  const services = getServicesByCategory(activeFilter)

  return (
    <section id="services" className="pb-12 sm:pb-20 pt-6 sm:pt-8">
      <div className="flex items-center justify-between lg:justify-center">
        <Link to="/" className="block lg:hidden bg-gray-200 rounded-full p-2">
          <ChevronLeftIcon className="w-5 h-5" />
        </Link>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
          Find Our Services
        </h2>
        <div></div>
      </div>
      <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-slate-600 px-4">
        Each service is designed to address specific concerns with expert care
        and precision.
      </p>

      {/* Filter sub-nav */}
      <nav
        className="mt-6 sm:mt-10 flex overflow-x-auto px-2 lg:justify-center gap-2 no-scrollbar"
        aria-label="Service categories"
      >
        {SERVICE_CATEGORIES.map(({ slug, label }) => (
          <button
            key={slug}
            type="button"
            onClick={() => setFilter(slug)}
            className={
              activeFilter === slug
                ? 'rounded-full bg-[var(--medijoy-green)] px-4 py-2 sm:px-6 sm:py-2.5 text-base sm:text-sm font-medium text-white whitespace-nowrap shrink-0'
                : 'rounded-full border-2 border-[var(--medijoy-green)] bg-transparent px-4 py-2 sm:px-6 sm:py-2.5 text-base sm:text-sm font-medium text-[var(--medijoy-green)] hover:bg-[#f8f9f6] whitespace-nowrap shrink-0'
            }
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Service cards grid */}
      <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.slug}
            className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
          >
            <div className="w-full bg-slate-200 h-36">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-medium text-[#1a1a1a]">
                {service.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">{service.description}</p>
              <div className="mt-2 sm:mt-3 flex items-baseline justify-between gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-medium text-[#1a1a1a]">
                  From £{service.priceFrom}
                </span>
                <span className="text-xs sm:text-sm text-slate-500">{service.duration}</span>
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="mt-2 sm:mt-3 inline-block text-xs sm:text-sm font-normal text-[var(--medijoy-green)] hover:underline"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
