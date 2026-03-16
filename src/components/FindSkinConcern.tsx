import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const concerns = [
  {
    title: 'Acne',
    description: 'Persistent breakouts affecting confidence',
    image: '/src/assets/images/acne.png',
    slug: 'acne-breakouts',
  },
  {
    title: 'Hyperpigmentation',
    description: 'Dark spots and uneven skin tones',
    image: '/src/assets/images/hyperpigmentation.png',
    slug: 'hyperpigmentation',
  },
  {
    title: 'Uneven Texture',
    description: 'Rough, bumpy skin surface',
    image: '/src/assets/images/unevenTexture.png',
    slug: 'uneven-texture',
  },
  {
    title: 'Dull Skin',
    description: 'Tired, lacklustre complexion',
    image: '/src/assets/images/dullSkin.png',
    slug: 'dull-dehydrated-skin',
  },
]

export default function FindSkinConcern() {
  return (
    <section
      id="skin-concern"
      className="py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-24 scroll-mt-20 sm:scroll-mt-24 bg-[#f3f4f3] sm:bg-transparent"
    >
      <div className="">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-medium text-[#2D4700] px-2">
          Find Skin Concern
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-black px-4 tracking-wide">
          Tap any concern to learn how we can help
        </p>

        {/* Mobile list layout, desktop keeps card grid feel */}
        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:grid sm:gap-12 lg:gap-28 sm:grid-cols-2">
          {concerns.map(({ title, description, image, slug }) => (
            <Link
              key={slug}
              to={`/skin-concerns/${slug}`}
              className="group block rounded-2xl sm:rounded-xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 px-4 py-3 sm:block sm:p-0">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full lg:rounded-b-none bg-slate-200 sm:h-48 sm:w-full sm:rounded-xl sm:mb-2">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="flex-1 sm:p-3 sm:pt-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-base sm:text-xl text-[#1a1a1a]">
                      {title}
                    </h3>
                    <ChevronRight className="h-4 w-4 text-slate-400 sm:hidden" />
                  </div>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-black font-light">
                    {description}
                  </p>
                  <span className="hidden sm:inline-flex mt-2 items-center gap-1 text-xs sm:text-sm font-normal text-[var(--medijoy-green)] group-hover:underline">
                    Learn more
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 sm:mt-20 text-center px-4">
          <h2 className="text-base lg:text-[24px] font-light text-black">
            Not sure which treatment you need?
          </h2>
          <a href="https://booking.appointy.com/en-US/revivetherapies/bookings/service" target="_blank" rel="noopener noreferrer" className="mt-1 text-[#2D4700] lg:text-[24px] sm:text-base font-light"> 
            Book a consultation today.
          </a>
        </div>
      </div>
    </section>
  )
}