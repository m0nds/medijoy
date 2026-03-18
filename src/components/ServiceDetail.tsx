import { Link, useNavigate } from 'react-router-dom'
import type { ServiceDetail as ServiceDetailType } from '../data/services'
import { ChevronLeftIcon } from 'lucide-react'

type ServiceDetailProps = {
  service: ServiceDetailType
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const {
    title,
    image,
    detailImage,
    overview,
    benefits,
    priceFrom,
    savePercent,
    duration,
    downtime,
    sessionsOrResults,
    addOns,
  } = service

  const resultImage = detailImage ?? image

  const navigate = useNavigate()
  const handleHistoryBack = () => {
    navigate(-1)
  }

  return (
    <article className="py-10 sm:py-14 lg:py-16 pt-2 sm:pt-16 lg:pt-8">
      <div className="mx-auto max-w-4xl px-0 sm:px-6">
        <div className="flex items-center justify-between lg:justify-center mb-4">
          <Link to="" className="block lg:hidden bg-gray-200 rounded-full p-2" onClick={handleHistoryBack}>
            <ChevronLeftIcon className="w-5 h-5" />
          </Link>
          <div className="text-center text-xl sm:text-2xl md:text-3xl font-medium text-[#2D4700]">
            {title}
          </div>
          <div></div>
        </div>

        {/* Proven result image */}
        <div className="mt-6 sm:mt-8 overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-sm">
          <div
            className="flex flex-col sm:flex-row"
            style={{ backgroundColor: 'var(--medijoy-beige)' }}
          >
            <img
              src={resultImage}
              alt={`${title} results`}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <p className="mt-2 text-center mx-auto max-w-[70%] sm:max-w-full text-xs sm:text-sm italic text-slate-600 px-2">
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
            className="h-fit rounded-xl px-4 py-4 sm:px-5 sm:py-5 flex-1 min-w-0 shadow"
            style={{ backgroundColor: 'var(--medijoy-beige)' }}
          >
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <p className="text-xs sm:text-sm text-[#333333]">From</p>
              <p className="text-4xl sm:text-4xl font-bold text-[#1a1a1a]">
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
          Optional Add Ons
        </h2>
        <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
          {addOns.map((addOn) => (
            <li
              key={addOn.title}
              className="flex sm:flex-wrap items-center justify-between gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-100"
            >
              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base text-[#1a1a1a]">{addOn.title}</p>
                <p className="text-xs sm:text-sm text-slate-600">{addOn.description}</p>
              </div>
              <span className="font-semibold text-sm sm:text-base text-[#1a1a1a] shrink-0">
                +£{addOn.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
