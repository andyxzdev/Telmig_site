import { MapPin } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'

const defaultCities = ['Belo Horizonte', 'Sabará', 'Santa Luzia', 'Contagem']

function CitiesMarquee({ cities = defaultCities, duration = 24, className = '' }) {
  const reducedMotion = useReducedMotion()

  if (!cities.length) return null

  return (
    <div className={`overflow-hidden bg-[#00a9cf] py-2.5 text-white ${className}`}>
      <ul className="sr-only" aria-label="Cidades atendidas">
        {cities.map((city, index) => <li key={`${city}-${index}`}>{city}</li>)}
      </ul>

      <Motion.div
        aria-hidden="true"
        className="flex w-max"
        animate={{ x: reducedMotion ? '0%' : ['0%', '-50%'] }}
        transition={reducedMotion ? { duration: 0 } : { duration, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex min-w-screen shrink-0 items-center justify-around gap-6 px-3">
            {[0, 1, 2].flatMap((copy) => cities.map((city, index) => (
              <span key={`${copy}-${index}`} className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-lg font-bold max-[600px]:text-base">
                <MapPin className="size-6 shrink-0 fill-white text-[#00a9cf]" strokeWidth={2.5} />
                {city}
              </span>
            )))}
          </div>
        ))}
      </Motion.div>
    </div>
  )
}

export default CitiesMarquee
