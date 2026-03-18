import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const redirectingSvg = (
  <svg
    width="103"
    height="103"
    viewBox="0 0 103 103"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4492 87.5484C15.4492 93.2134 20.0842 97.8484 25.7492 97.8484H77.2492C82.9142 97.8484 87.5492 93.2134 87.5492 87.5484V58.1934C79.8242 67.4634 67.9792 72.0984 51.4992 72.0984V87.5484L25.7492 66.9484L51.4992 46.3484V61.7984C77.2492 61.7984 87.5492 46.3484 87.5492 20.5984V15.4484C87.5492 9.78344 82.9142 5.14844 77.2492 5.14844H25.7492C20.0842 5.14844 15.4492 9.78344 15.4492 15.4484V87.5484Z"
      fill="#2D4700"
    />
  </svg>
)

const stripeSvg = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.8593 25.98C20.0593 25.98 24.6993 26.18 27.4593 25.5H27.4793C30.6593 24.72 35.0793 22.48 36.2193 15.16C36.2193 15.16 38.7593 6 26.1593 6H15.3393C14.3593 6 13.5193 6.72 13.3593 7.68L8.75934 36.8C8.65934 37.4 9.13934 37.96 9.73934 37.96H16.5993L18.2793 27.32C18.3993 26.56 19.0593 25.98 19.8593 25.98Z"
      fill="black"
    />
    <path
      d="M37.9791 16.5781C36.3591 24.0381 31.2591 27.9781 23.1391 27.9781H20.1991L18.1391 41.0181C18.0591 41.5381 18.4591 41.9981 18.9791 41.9981H22.7791C23.4591 41.9981 24.0591 41.4981 24.1591 40.8181C24.3191 40.0181 25.1991 34.1781 25.3791 33.1781C25.4791 32.4981 26.0791 31.9981 26.7591 31.9981H27.6391C33.2791 31.9981 37.6991 29.6981 38.9991 23.0781C39.5191 20.3981 39.2391 18.1981 37.9791 16.5781Z"
      fill="black"
    />
  </svg>
)

const APPOINTY_BOOKING_URL =
  'https://booking.appointy.com/en-US/revivetherapies/bookings/service'

type AppointmentModalProps = {
  onClose?: () => void
}

const AppointmentModal = ({ onClose }: AppointmentModalProps) => {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.href = APPOINTY_BOOKING_URL
      if (onClose) {
        onClose()
      }
    }, 3000)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [onClose])

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-3xl bg-white py-8 px-6 sm:px-8 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
          {redirectingSvg}
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-[#2D4700]">
          Redirecting to Booking..
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-700">
          You’re being redirected to our secure booking system powered by Appointly via Revive.
        </p>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-wide text-slate-500">Secure payment via</p>
          <div className="mt-3 flex items-center justify-center gap-6">
            <span className="text-lg font-semibold tracking-wide text-slate-900">Stripe</span>
            {stripeSvg}
          </div>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-slate-500">
          Fully redeemable when you proceed with treatment.
        </p>
      </div>
    </div>
  )

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null
}

export default AppointmentModal


