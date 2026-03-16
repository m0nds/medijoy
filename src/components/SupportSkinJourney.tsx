import { Link } from "react-router-dom"

const journeyItems = [
  {
    title: 'Book Paid Consultation',
    description:
      'Schedule your initial consultation online or via WhatsApp. Choose between a virtual or in clinic appointment that suits your schedule successfully.',
    image: '/assets/images/bookPaidConsultation.png',
  },
  {
    title: 'Consultation',
    description:
      'Meet our expert to discuss your skin concerns, medical history, and goals. We will assess your skin and answer all your questions in a relaxed setting.',
    image: '/assets/images/consultation.png',
  },
  {
    title: 'Personalized Treatment Plan',
    description:
      'Receive a bespoke treatment plan designed specifically for your skin type and concerns, with clear explanations of each recommended procedure.',
    image: '/assets/images/personalized.png',
  },
  {
    title: 'Treatment & Ongoing Care',
    description:
      'Begin your treatment journey with professional care throughout. We provide ongoing support and follow-ups to ensure optimal results.',
    image: '/assets/images/treatmentOngoing.png',
  },
]

export default function SupportSkinJourney() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="px-0">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-medium text-[#2D4700] px-2">
          How We Support Your Skin Journey
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-sm sm:text-base text-black px-4 tracking-wide">
          A simple, caring process from your first enquiry to achieving your skin goals
        </p>
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-12 lg:gap-28 grid-cols-1 sm:grid-cols-2">
          {journeyItems.map(({ title, description, image }) => (
            <div
              key={title}
              className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
            >
              <div className="w-full bg-slate-200 ">
                {image ? (
                  <img src={image} alt={title} className="h-full w-full object-cover hover:scale-105 transition-all duration-300" loading="lazy" decoding="async" />
                ) : (
                  <div className=" w-full" />
                )}
              </div>
              <div className="p-4 sm:p-3 min-h-[7rem] sm:h-32 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl text-center font-normal text-[#1a1a1a]">{title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-center text-black font-light max-w-[90%] sm:max-w-[70%] mx-auto">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-20 flex justify-center">
          <Link to="/about-medijoy" className="rounded-4xl bg-[#89A35D] w-full md:w-auto text-center px-8 py-4 sm:px-16 sm:py-3 text-white hover:opacity-95 text-lg sm:text-base">
           
            Learn more about our support
          </Link>
        </div>
      </div>
    </section>
  )
}
