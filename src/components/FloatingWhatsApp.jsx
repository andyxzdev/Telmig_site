import { useLayoutEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function FloatingWhatsApp() {
  const [bottom, setBottom] = useState(24)

  useLayoutEffect(() => {
    const notice = document.querySelector('[aria-labelledby="cookie-notice-title"]')
    if (!notice) return

    function updatePosition() {
      setBottom(notice.isConnected ? window.innerHeight - notice.getBoundingClientRect().top + 16 : 24)
    }

    const observer = new ResizeObserver(updatePosition)
    observer.observe(notice)
    updatePosition()

    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="https://wa.me/553130987420"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Telmig pelo WhatsApp (abre em nova aba)"
      title="Fale pelo WhatsApp"
      className="fixed right-6 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title max-[600px]:right-4"
      style={{ bottom }}
    >
      <FaWhatsapp className="size-8" aria-hidden="true" />
    </a>
  )
}

export default FloatingWhatsApp
