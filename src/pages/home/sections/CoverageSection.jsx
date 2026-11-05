import { useRef } from 'react'
import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import globe from '../../../assets/banners/globe 1.webp'
import CoverageForm from '../components/CoverageForm.jsx'

function CoverageSection() {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const rotate = useTransform(scrollYProgress, [0, 1], [-175, 135])

  return (
    <section ref={sectionRef} id="cobertura" className="bg-background px-6 pt-[112px] pb-24" aria-labelledby="coverage-title">
      <div className="mx-auto grid max-w-[900px] grid-cols-2 items-center gap-20 max-[700px]:grid-cols-1 max-[700px]:gap-10">
        <Motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeOut' }}
          className="max-[700px]:mx-auto max-[700px]:w-full max-[700px]:max-w-[360px]"
        >
          <h2 id="coverage-title" className="text-[32px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
            Cobertura <span className="text-title">Telmig</span>
          </h2>
          <p className="mt-4 max-w-[340px] text-[15px] leading-[1.4] text-white">
            Verifique se atendemos a sua região e conecte-se à melhor fibra óptica.
          </p>
          <CoverageForm />
        </Motion.div>

        <Motion.img
          src={globe}
          style={{ rotate: reducedMotion ? 0 : rotate }}
          alt=""
          width={571}
          height={565}
          loading="lazy"
          className="mx-auto h-auto w-full max-w-[360px]"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.15, ease: 'easeOut' }}
        />
      </div>
    </section>
  )
}

export default CoverageSection
