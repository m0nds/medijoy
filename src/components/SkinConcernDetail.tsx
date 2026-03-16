import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRight } from 'lucide-react'
import ProvenResults from './ProvenResults'

export type TreatmentCard = {
  title: string
  description: string
  image: string
}

type SkinConcernDetailProps = {
  id: string
  title: string
  heroImage: string
  whatIs: string
  howWeHelp: string
  treatments: TreatmentCard[]
}

export default function SkinConcernDetail({
  id,
  title,
  heroImage,
  whatIs,
  howWeHelp,
  treatments,
}: SkinConcernDetailProps) {
  const navigate = useNavigate()
  const handleHistoryBack = () => {
    navigate(-1)
  }
  return (
    <section id={id} className="py-10 sm:py-14 lg:py-16 pt-2 sm:pt-16 lg:pt-8 scroll-mt-20 sm:scroll-mt-24 bg-[var(--page-bg)]">
      <div className="mx-auto w-full px-4 sm:px-6 ">
        <div className="flex items-center gap-16 lg:justify-center mb-4">
         <Link to="" className="block lg:hidden bg-gray-200 rounded-full p-2" onClick={handleHistoryBack}>
         <ChevronLeftIcon className="w-5 h-5" />
         </Link>
         <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2D4700]">
          {title}
         </div>
        </div>
        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>
        <h2 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-[#2D4700]">
          What is {title}, and why it appears?
        </h2>
        <p className="mt-2 sm:mt-3 mb-8 sm:mb-10 text-sm sm:text-base text-[#333333] leading-relaxed">{whatIs}</p>

        <div className="py-8 sm:py-12 border-t border-b border-gray-300">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2D4700]">
            How Medijoy Helps
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#333333] leading-relaxed">{howWeHelp}</p>
        </div>

        <h2 className="mt-8 sm:mt-12 text-xl sm:text-2xl md:text-3xl font-medium text-[#2D4700]">
          Recommended Treatment
        </h2>
        <div className="mt-4 sm:mt-6 grid gap-6 sm:gap-12 lg:gap-32 grid-cols-1 sm:grid-cols-2">
          {treatments.map(({ title: tTitle, description, image }) => (
            <div
              key={tTitle}
              className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
            >
              <div className="w-full bg-slate-200 ">
                <img
                  src={image}
                  alt={tTitle}
                  className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-medium text-[#1a1a1a]">{tTitle}</h3>
                <p className="mt-1 text-xs sm:text-sm text-black">{description}</p>
                <a
                  href="/#services"
                  className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-normal text-[var(--medijoy-green)] hover:underline"
                >
                  Learn more
                  <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 sm:mt-12 rounded-lg sm:rounded-xl px-4 py-4 sm:px-6 sm:py-5 w-full sm:w-fit"
          style={{ backgroundColor: 'var(--medijoy-beige)' }}
        >
          <p className="text-sm sm:text-base text-[#333333]">
            <span className="font-semibold">Redeemable Consultation Fee:</span>{' '}
            No obligation, no pressure. Just honest conversation about your skin
            and how we can help.
          </p>
        </div>
        <div className="mt-4 sm:mt-6 flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth px-1 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory">
         <ProvenResults/>
        </div>
        <p className="mt-3 sm:mt-4 text-base text-slate-500  text-center sm:text-left italic">
          *Individual results may vary. Images shown with client consent.
        </p>
      </div>
    </section>
  )
}
