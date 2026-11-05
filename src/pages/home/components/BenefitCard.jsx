import { motion as Motion, useReducedMotion } from 'framer-motion'

function BenefitCard({ title, description, icon, delay = 0 }) {
  const Icon = icon
  const reducedMotion = useReducedMotion()

  return (
    <Motion.article
      className="flex h-full flex-col items-center rounded-[14px] bg-background px-4 py-6 text-center"
      initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : delay, ease: 'easeOut' }}
    >
      <Icon className="mb-5 size-11 text-[#00a9cf]" strokeWidth={1.8} aria-hidden="true" />
      <h3 className="text-base leading-snug font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
    </Motion.article>
  )
}

export default BenefitCard
