import { acneProven, antiAgingProven, chemicalPeelProven, crowFeetProven, deepCleansingProven, dermalFillersProven, foreheadLinesProven, jawlineProven, microneedlingProven, profhiloProven, skinboosterProven, underEyesProven, vvpProven } from "../assets/images/proven results"

const slides = [
  { image: acneProven },
  { image: antiAgingProven },
  { image: deepCleansingProven },
  { image: microneedlingProven },
  { image: skinboosterProven },
  { image: jawlineProven },
  { image: profhiloProven },
  { image: vvpProven },
  { image: dermalFillersProven },
  { image: crowFeetProven },
  { image: chemicalPeelProven },
  { image: foreheadLinesProven },
  { image: underEyesProven },
]

export default function ProvenResults() {
  return (
    <section id="proven-results" className="py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700] px-2">
          Proven Results
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-[#333333] px-2">
          Swipe through to see some results we are proud of achieving with our clients.
        </p>
        <p className="mx-auto mt-1 max-w-2xl text-center text-xs sm:text-sm text-[#333333] px-2">
          Before-and-after photos are available during your consultation to help you understand
          what&apos;s possible.
        </p>

        <div className="mt-6 sm:mt-10 flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth px-1 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory no-scrollbar">
          {slides.map(({ image }, i) => (
            <div
              key={i}
              className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] max-w-[90vw] sm:max-w-[480px] shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)] snap-start"
            >
              <img
                src={image}
                alt={`Proven result ${i + 1}`}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
