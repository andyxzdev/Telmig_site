import { Check } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import Button from '../../../components/Button.jsx'
import { companyLinks } from '../../../data/companyLinks.js'

const defaultBenefits = [
  'Wi-Fi de alta performance',
  'Instalação grátis*',
  'Clube de vantagens',
  'Telmig livros',
]

function PlanCard({ speed, price, icon, label = `${speed} Mega`, benefits = defaultBenefits, featured = false, delay = 0 }) {
  const Icon = icon
  const reducedMotion = useReducedMotion()
  const labelParts = label.match(/^(\d+)\s*(.*)$/)

  return (
    <Motion.article
      className={`relative flex min-h-[360px] w-full flex-col items-center rounded-[24px] border border-white/10 bg-gradient-to-b from-[#293232] to-[#1c2325] px-6 pt-8 pb-6 text-center shadow-[0_16px_36px_rgba(0,0,0,0.18)] ${featured ? 'border-title/70 ring-2 ring-title shadow-[0_0_28px_rgba(9,191,241,0.15)]' : ''}`}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : delay, ease: 'easeOut' }}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-title px-3 py-1.5 text-[11px] font-bold leading-none text-background">
          DESTAQUE
        </span>
      )}

      <Icon className="mb-3.5 size-8 text-title" strokeWidth={2} aria-hidden="true" />
      <h3 className="text-lg font-bold text-white">
        {labelParts ? (
          <>
            <span className="text-[clamp(42px,4.6vw,54px)] leading-none">{labelParts[1]}</span>
            <span className="ml-1 text-base">{labelParts[2]}</span>
          </>
        ) : label}
      </h3>
      <p className="mt-3.5 mb-4 flex items-baseline justify-center gap-1 whitespace-nowrap">
        {price ? (
          <>
            <span className="text-xs text-[#c0c9cc]">R$</span>
            <span className="text-[clamp(36px,3.8vw,44px)] font-bold leading-tight tracking-[-1px] text-white">
              {price.split(',')[0]}
              <span className="align-super text-[14px]">,{price.split(',')[1]}</span>
            </span>
            <span className="text-xs text-[#c0c9cc]">/mês</span>
          </>
        ) : (
          <span className="text-[26px] font-bold leading-tight tracking-[-1px] text-white">Sob consulta</span>
        )}
      </p>

      <ul className="flex flex-col items-center gap-2 text-[13px] leading-[1.5] text-[#c0c9cc]">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center justify-center gap-0.5">
            <Check className="size-4 shrink-0 text-title" aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>
      <p className="mt-1 text-[9px] text-[#aeb9bd]">*Consulte condições</p>

      <Button
        variant={featured ? 'primary' : 'outline'}
        className={`mt-auto min-h-11! w-full min-w-0! rounded-lg! text-sm! ${featured ? 'bg-title! text-background! shadow-[0_0_20px_rgba(9,191,241,0.35)]' : 'text-title!'}`}
        href={`${companyLinks.whatsapp}?text=${encodeURIComponent(`Olá! Tenho interesse no plano de ${label}${speed === 2000 ? ' com Wi-Fi 7' : ''}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contratar plano de ${label}${speed === 2000 ? ' com Wi-Fi 7' : ''}`}
      >
        CONTRATAR
      </Button>
    </Motion.article>
  )
}

export default PlanCard
