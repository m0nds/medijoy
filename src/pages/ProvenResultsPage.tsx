import { useState } from 'react'
import {
  PROVEN_RESULT_FILTERS,
  getResultsByFilter,
} from '../data/provenResults'
import WhatClientsSay from '../components/WhatClientsSay'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from 'lucide-react'

export default function ProvenResultsPage() {
  const [activeFilter, setActiveFilter] = useState(PROVEN_RESULT_FILTERS[0].slug)
  const results = getResultsByFilter(activeFilter)

  return (
    <section id="proven-results" className="pb-12 sm:pb-20 pt-6 sm:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-20 lg:justify-center">
         <Link to="/" className="block lg:hidden bg-gray-200 rounded-full p-2">
         <ChevronLeftIcon className="w-5 h-5" />
         </Link>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
          Proven Results
        </h2>
         </div>
        <p className="mx-auto mt-2 sm:mt-3 max-w-3xl text-center text-sm sm:text-base text-[#333333] px-2">
          See the incredible results our clients have achieved with personalized
          treatment plans at Medijoy.
        </p>

        {/* Filter sub-nav */}
        <nav
          className="mt-6 sm:mt-10 flex overflow-x-auto px-2 lg:justify-center gap-2 no-scrollbar"
          aria-label="Filter results"
        >
          {PROVEN_RESULT_FILTERS.map(({ slug, label }) => (
            <button
              key={slug}
              type="button"
              onClick={() => setActiveFilter(slug)}
              className={
                activeFilter === slug
                  ? 'rounded-full bg-[var(--medijoy-green)] px-4 py-2 sm:px-5 sm:py-2.5 text-base sm:text-sm font-medium text-white whitespace-nowrap shrink-0'
                  : 'rounded-full border-2 border-[var(--medijoy-green)] bg-transparent px-4 py-2 sm:px-5 sm:py-2.5 text-base sm:text-sm font-medium text-[var(--medijoy-green)] hover:text-[#2d4700] hover:border-[#2d4700] cursor-pointer whitespace-nowrap shrink-0'
              }
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Results grid - before & after cards */}
        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <div
              key={result.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-[#E5D0B0] shadow-sm"
            >
              <img
                src={result.image}
                alt={result.treatmentName}
                className="w-full h-56 object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <p className="mt-12 text-center text-slate-600">
            No results in this category yet.
          </p>
        )}

      </div>
      <WhatClientsSay/>
    </section>
  )
}
