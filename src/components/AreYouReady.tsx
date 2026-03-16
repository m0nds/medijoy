export default function AreYouReady() {
  return (
    <section id="book" className="rounded-xl sm:rounded-2xl bg-white p-5 py-8 sm:p-8 sm:py-10 sm:pt-12 mb-12 sm:mb-20">
      <div className="w-full">
        <div className="text-center sm:p-6 lg:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2d4700]">
            Are you ready to care for your skin?
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-slate-600 px-1">
            Book a refundable consultation to discuss your skin concerns and discover how we can help
            you achieve healthy, confident skin
          </p>
          <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-3">
            <a href="https://booking.appointy.com/en-US/revivetherapies/bookings/service" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-2xl bg-[#6B8E23] px-8 py-3 sm:px-10 text-white hover:opacity-95 text-center text-sm sm:text-base">
              Book a Consultation
            </a>
            <span className="text-[#333333] text-sm hidden sm:inline">Or</span>
            <a href="https://api.whatsapp.com/send/?phone=447404964889&text&type=phone_number&app_absent=0" target="_blank" className="w-full sm:w-auto rounded-2xl border-2 border-[#6B8E23] bg-transparent px-6 py-3 text-[#6B8E23] text-center text-sm sm:text-base hover:bg-[#6B8E23]/5">
              Chat with Joy on WhatsApp
            </a>
          </div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm max-w-3xl text-[#9d9595] mx-auto">£20 Redeemable consultation fee</p>
        </div>
      </div>
    </section>
  )
}
