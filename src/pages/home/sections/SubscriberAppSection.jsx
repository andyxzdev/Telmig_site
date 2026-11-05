import { Download } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import appImage from '../../../assets/images/facial-recognition-collage-concept.webp'
import Button from '../../../components/Button.jsx'
import { companyLinks } from '../../../data/companyLinks.js'

const features = [
  'Acessar faturas',
  'Solicitar suporte',
  'Acompanhar seu consumo',
  'Abrir chamados',
]

function SubscriberAppSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-white px-6 pt-[112px] pb-20" aria-labelledby="subscriber-app-title">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[0.9fr_1.2fr] items-center gap-16 max-[800px]:grid-cols-1 max-[800px]:gap-10">
        <Motion.img
          src={appImage}
          alt="Homem utilizando um aplicativo no celular"
          width={7242}
          height={4828}
          loading="lazy"
          className="aspect-square w-full rounded-2xl object-cover object-center max-[800px]:mx-auto max-[800px]:max-w-[420px]"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeOut' }}
        />

        <Motion.div
          className="max-[800px]:mx-auto max-[800px]:w-full max-[800px]:max-w-[540px]"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.15, ease: 'easeOut' }}
        >
          <h2 id="subscriber-app-title" className="text-[32px] leading-tight font-bold tracking-[-0.8px] text-content-dark max-[600px]:text-[28px]">
            Baixe o aplicativo <span className="text-[#009fc5]">Sou Telmig</span>
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-content-dark max-[600px]:text-base">
            Com o aplicativo Sou Telmig você pode:
          </p>
          <ul className="mt-5 list-[square] space-y-0.5 pl-6 text-lg leading-[1.3] text-content-dark max-[600px]:text-base">
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="gap-1.5 border-[#00acd3]! text-[#00acd3]!"
              href={companyLinks.androidApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="size-3.5" aria-hidden="true" />
              Baixar para Android
            </Button>
            <Button className="gap-1.5" href={companyLinks.iosApp} target="_blank" rel="noopener noreferrer">
              <Download className="size-3.5" aria-hidden="true" />
              Baixar para Iphone
            </Button>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default SubscriberAppSection
