import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Why do i pay for consultation?',
    answer:   'During your £20 consultation, we will discuss your skin concerns, assess your skin condition, review our history, and create a personalised treatment plan. This fee is fully redeemable when you proceed with any treatment.',
  },
  {
    question: 'How long do results last?',
    answer:
      'Results vary by treatment. Botox lasts 3-4 months, fillers 6-18 months, and skin treatments like microneedling improve with multiple sessions. Joy will discuss timelines during your consultation.',
  },
  {
    question: 'are prices transparent?',
    answer:
      'Absolutely. All our prices are clearly listed on our Services page. There are no hidden costs—what you see is what you pay.',
  },
  {
    question: 'Is booking secure?',
    answer:
      'Yes bookings are totally secured via paystack and stripe when you book an appointment with us through Appointly.',
  },
  {
    question: 'What are your payment method?',
    answer:
      'We accept all major credit and debit cards through our secure online booking system powered by Appointly. Payment is taken at the time of booking to confirm your appointment.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2d4700] px-2">
          Frequently Asked Question
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-slate-600 px-2">
          We are here to answer any question you may have about our treatments and process.
        </p>

        {/* Accordion */}
        <div className="mt-6 sm:mt-10 space-y-3 sm:space-y-4">
          {faqs.map(({ question, answer }, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={question}
                className="overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-5 sm:py-4 text-left"
                >
                  <span className="font-semibold text-sm sm:text-base text-[#1a1a1a] text-left">{question}</span>
                  <span
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#89A35D] text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-4 pb-3 pt-1.5 sm:px-5 sm:pb-4 sm:pt-2">
                      <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">{answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
