import { Link } from 'react-router-dom'
import type { ServiceDetail as ServiceDetailType } from '../data/services'

type ServiceDetailProps = {
  service: ServiceDetailType
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const {
    title,
    image,
    overview,
    benefits,
    priceFrom,
    savePercent,
    duration,
    downtime,
    sessionsOrResults,
    resultWeeks,
    addOns,
  } = service

  return (
    <article className="py-10 sm:py-14 lg:py-16 pt-14 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          to="/services"
          className="mb-4 sm:mb-6 inline-flex items-center text-xs sm:text-sm text-[var(--medijoy-green)] hover:underline"
        >
          ← Back to Services
        </Link>

        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#2D4700] px-2">
          {title}
        </h1>

        {/* Before & After / Hero image */}
        <div className="mt-6 sm:mt-8 overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-sm">
          <div
            className="flex flex-col sm:flex-row"
            style={{ backgroundColor: 'var(--medijoy-beige)' }}
          >
            <img
              src={image}
              alt={title}
              className="h-48 sm:h-80 w-full sm:w-1/2 object-cover"
            />
            <img
              src={image}
              alt={`${title} results`}
              className="h-48 sm:h-80 w-full sm:w-1/2 object-cover"
            />
          </div>
          <div
            className="flex justify-between items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-[#1a1a1a] text-sm sm:text-base"
            style={{ backgroundColor: 'var(--medijoy-beige)' }}
          >
            <span className="font-medium truncate">{title}</span>
            {resultWeeks != null && (
              <span className="text-xs sm:text-sm shrink-0">{resultWeeks} Weeks</span>
            )}
          </div>
        </div>
        <p className="mt-2 text-center text-xs sm:text-sm italic text-slate-600 px-2">
          *Individual results may vary, Images shown with client&apos;s consent
        </p>

        {/* Treatment Overview */}
        <h2 className="mt-8 sm:mt-10 text-lg sm:text-xl font-semibold text-[#2D4700]">
          Treatment Overview
        </h2>
        <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-[#333333] leading-relaxed">{overview}</p>

        {/* Benefits + Pricing - stack on mobile */}
        <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl font-semibold text-[#2D4700]">Benefits</h2>
            <ul className="mt-2 sm:mt-3 list-disc space-y-1 sm:space-y-1.5 pl-4 sm:pl-5 text-sm sm:text-base text-[#333333]">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div
            className="h-fit rounded-xl px-4 py-4 sm:px-5 sm:py-5 flex-1 min-w-0"
            style={{ backgroundColor: 'var(--medijoy-beige)' }}
          >
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <p className="text-xs sm:text-sm text-[#333333]">From</p>
              <p className="text-2xl sm:text-4xl font-bold text-[#1a1a1a]">
                £{priceFrom}
              </p>
              <p className="text-xs sm:text-sm text-[#333333]">Save {savePercent}%</p>
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#333333]">{duration}</p>
            <p className="mt-1 text-sm sm:text-base text-[#333333]">Downtime: {downtime}</p>
            <p className="mt-1 text-sm sm:text-base text-[#333333]">{sessionsOrResults}</p>
          </div>
        </div>

        {/* Additional Add Ons */}
        <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold text-[#2D4700]">
          Additional Add Ons
        </h2>
        <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
          {addOns.map((addOn) => (
            <li
              key={addOn.title}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-100"
            >
              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base text-[#1a1a1a]">{addOn.title}</p>
                <p className="text-xs sm:text-sm text-slate-600">{addOn.description}</p>
              </div>
              <span className="font-medium text-sm sm:text-base text-[#1a1a1a] shrink-0">
                +£{addOn.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
