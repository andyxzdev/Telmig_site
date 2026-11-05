import { ExternalLink, FileText } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import Button from '../../../components/Button.jsx'
import { companyLinks } from '../../../data/companyLinks.js'

const accessOptions = [
  { label: 'App Android', href: companyLinks.androidApp },
  { label: 'App iPhone', href: companyLinks.iosApp },
  { label: 'Central do Assinante', href: companyLinks.subscriberPortal },
  { label: 'Falar com Atendimento', href: companyLinks.whatsapp },
]

function ContractSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-background px-6 pt-[112px] pb-20" aria-labelledby="contract-title">
      <h2 id="contract-title" className="text-center text-[36px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
        Contrato
      </h2>

      <Motion.div
        className="mx-auto mt-14 max-w-[900px] rounded-[20px] bg-[#242828] p-6 max-[600px]:p-5"
        initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeOut' }}
      >
        <h3 className="flex items-center gap-3 text-base font-bold text-white">
          <FileText className="size-6 shrink-0 text-title" aria-hidden="true" />
          Modelo de Contrato Telmig
        </h3>

        <Button
          href="/downloads/contrato-exemplo.pdf"
          download="contrato-telmig-exemplo.pdf"
          aria-describedby="contract-example-note"
          className="mt-6 min-h-11! min-w-0! gap-2 rounded-lg! bg-title! text-xs! text-background! shadow-[0_0_20px_rgba(9,191,241,0.3)] max-[600px]:w-full"
        >
          <FileText className="size-4 shrink-0" aria-hidden="true" />
          Baixar Modelo de Contrato (PDF)
        </Button>
        <p id="contract-example-note" className="mt-2 text-xs text-white/55">Arquivo de exemplo para demonstração.</p>

        <div className="mt-6 rounded-lg border border-title/20 bg-title/5 p-4">
          <p className="text-sm leading-relaxed text-[#a1adb4]">Para obter o contrato já assinado pela Telmig, acesse:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {accessOptions.map(({ label, href }, index) => (
              <Button
                key={label}
                variant={index === accessOptions.length - 1 ? 'primary' : 'outline'}
                className={`min-h-9! min-w-0! gap-1.5 rounded-md! px-3! text-[11px]! max-[500px]:w-full ${index === accessOptions.length - 1 ? 'bg-title! text-background! shadow-[0_0_16px_rgba(9,191,241,0.2)]' : 'text-title!'}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </Motion.div>
    </section>
  )
}

export default ContractSection
