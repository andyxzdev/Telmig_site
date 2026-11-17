import { BadgeCheck, Star, UserRound } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { motion as Motion, useReducedMotion } from 'framer-motion'

function ReviewCard({ name, details, rating, time, comment, verified = false, delay = 0 }) {
  const reducedMotion = useReducedMotion()

  return (
    <Motion.article
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#1a232c] p-6 shadow-sm"
      initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : delay, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-title/15 text-title">
          <UserRound className="size-6" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm leading-snug font-bold text-white">{name}</h3>
          {details && <p className="mt-1 text-xs text-white/60">{details}</p>}
        </div>
        <FcGoogle className="size-6 shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-5 flex gap-0.5" role="img" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`size-4 ${index < rating ? 'fill-[#fbbc04] text-[#fbbc04]' : 'text-white/25'}`}
            aria-hidden="true"
          />
        ))}
        {verified && <BadgeCheck className="ml-1 size-4 fill-[#4285f4] text-white" aria-label="Avaliação verificada" />}
      </div>
      <p className="mt-1 text-xs text-white/60">{time}</p>
      {comment && (
        <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/85">
          <p>{comment}</p>
        </blockquote>
      )}
    </Motion.article>
  )
}

export default ReviewCard
