import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import PartnerBanner from '../components/PartnerBanner.jsx'
import partnerBanners from '../data/partnerBanners.js'

function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [dragging, setDragging] = useState(false)
  const dragged = useRef(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (hovered || focused || dragging || reducedMotion) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % partnerBanners.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [hovered, focused, dragging, reducedMotion, activeIndex])

  function handleDragEnd(_, info) {
    setDragging(false)
    const distance = info.offset.x
    const isSwipe = Math.abs(distance) > 50 || (Math.abs(distance) > 8 && Math.abs(info.velocity.x) > 500)
    if (!isSwipe) return

    setActiveIndex((current) => (current + (distance < 0 ? 1 : -1) + partnerBanners.length) % partnerBanners.length)
  }

  return (
    <section className="bg-white pt-[112px]" aria-label="Ofertas e soluções Telmig">
      <div
        className="relative overflow-hidden bg-background"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Banners de ofertas e soluções"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          <Motion.div
            key={partnerBanners[activeIndex].id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} de ${partnerBanners.length}`}
            className="cursor-grab touch-pan-y select-none active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            onPointerDownCapture={() => { dragged.current = false }}
            onDragStartCapture={(event) => event.preventDefault()}
            onDragStart={() => {
              dragged.current = true
              setDragging(true)
            }}
            onDragEnd={handleDragEnd}
            onClickCapture={(event) => {
              if (dragged.current) {
                event.preventDefault()
                event.stopPropagation()
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.35 }}
          >
            <PartnerBanner banner={partnerBanners[activeIndex]} />
          </Motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 bg-background py-1" aria-label="Selecionar banner">
          {partnerBanners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              className="flex size-6 cursor-pointer items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-title"
              aria-label={`Exibir banner ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
            >
              <span className={`h-1.5 rounded-full ${activeIndex === index ? 'w-6 bg-title' : 'w-3 bg-white/35'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
