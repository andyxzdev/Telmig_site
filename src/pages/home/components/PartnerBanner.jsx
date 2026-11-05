import Button from '../../../components/Button.jsx'
import { Check, Router, X, Zap } from 'lucide-react'

function PartnerBanner({ banner }) {
  const isExternal = banner.href?.startsWith('https://')

  return (
    <div className="relative isolate flex aspect-[1920/680] min-h-[300px] items-center overflow-hidden bg-background max-[700px]:aspect-auto max-[700px]:min-h-[360px]">
      <img
        src={banner.image}
        alt=""
        className="absolute inset-0 -z-2 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 -z-1 bg-linear-to-r from-background/95 via-background/70 to-background/10" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1280px] px-[7%] py-10">
        <div className="max-w-[62%] max-[700px]:max-w-full">
          <h3 className="text-[clamp(24px,3vw,44px)] leading-tight font-bold text-white">{banner.title}</h3>
          <p className="mt-4 max-w-[650px] text-[clamp(13px,1.3vw,18px)] leading-relaxed text-white/80">{banner.description}</p>
          <Button
            className="mt-6 min-h-11! min-w-0! rounded-lg! bg-title! text-background!"
            href={banner.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {banner.buttonText}
          </Button>
        </div>
      </div>
      {banner.id === 'energia' && (
        <div className="absolute top-1/2 right-[7%] grid w-[34%] max-w-[440px] -translate-y-1/2 grid-cols-2 gap-3 rounded-2xl border border-white/15 bg-[#11181f]/85 p-4 backdrop-blur-md max-[700px]:relative max-[700px]:top-auto max-[700px]:right-auto max-[700px]:mx-auto max-[700px]:mb-5 max-[700px]:w-[calc(100%_-_3rem)] max-[700px]:translate-y-0" aria-label="Comparação do funcionamento do roteador com e sem mini nobreak">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-4 text-center">
            <Router className="size-9 text-white/75" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">Sem mini nobreak</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/65"><X className="size-4 text-red-400" aria-hidden="true" /> Luz acabou</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-4 text-center">
            <div className="flex items-center gap-1.5"><Router className="size-8 text-white" aria-hidden="true" /><Zap className="size-6 text-title" aria-hidden="true" /></div>
            <span className="text-sm font-semibold text-white">Com mini nobreak</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/75"><Check className="size-4 text-emerald-400" aria-hidden="true" /> Roteador ligado</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default PartnerBanner
