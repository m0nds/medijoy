import { useState } from 'react'
import { ChevronDown, ChevronLeftIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FAQ_CATEGORIES } from '../data/faqs'

export default function FaqPage() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <section id="faqs" className="pb-12 sm:pb-20 pt-6 sm:pt-8">
      <div className="px-4 sm:px-6">
        <div className="flex items-center gap-20 lg:justify-center">
         <Link to="/" className="block lg:hidden bg-gray-200 rounded-full p-2">
         <ChevronLeftIcon className="w-5 h-5" />
         </Link>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
          FAQs
        </h2>
         </div>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-[#333333] px-2">
          Everything you need to know about treatments, consultations, and
          booking at Medijoy.
        </p>

        {/* Optional hero image */}
        <div className="mt-6 sm:mt-10 overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src="/src/assets/images/faq.png"
            alt="FAQ"
            className="w-full h-40 sm:h-52 md:h-fit object-cover object-center"
          />
        </div>

        {/* FAQ categories with accordions */}
        <div className="mt-10 sm:mt-14 space-y-10 sm:space-y-14 mx-auto max-w-3xl">
          {FAQ_CATEGORIES.map((category, catIndex) => (
            <div key={category.title}>
              <h3 className="mb-4 sm:mb-6 text-center text-lg sm:text-xl font-semibold text-[#1a1a1a] px-2">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${catIndex}-${itemIndex}`
                  const isOpen = openKey === key
                  return (
                    <div
                      key={key}
                      className="overflow-hidden rounded-lg sm:rounded-xl border border-slate-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-5 sm:py-4 text-left"
                      >
                        <span className="font-semibold text-sm sm:text-base text-[#1a1a1a] text-left">
                          {item.question}
                        </span>
                        <span
                          className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[var(--medijoy-green)] text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <ChevronDown
                            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        </span>
                      </button>
                      <div
                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="border-t border-slate-100 px-4 pb-3 pt-1.5 sm:px-5 sm:pb-4 sm:pt-2">
                            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
