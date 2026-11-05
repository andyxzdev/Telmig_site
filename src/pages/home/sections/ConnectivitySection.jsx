import { motion as Motion, useReducedMotion } from 'framer-motion'
import connectivityBanner from '../../../assets/banners/Rectangle 996.webp'
import connectivityBannerMobile from '../../../assets/banners/Rectangle 996.jpg'

function ConnectivitySection() {
  const reducedMotion = useReducedMotion()

  return (
    <Motion.section
      className="bg-background px-6 pt-[112px] pb-20"
      aria-label="Conectividade Telmig"
      initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeOut' }}
    >
      <picture>
        <source media="(max-width: 600px)" srcSet={connectivityBannerMobile} width={716} height={664} />
        <img
        src={connectivityBanner}
        alt="Tecnologia conectando pessoas e serviços ao redor do mundo"
        className="mx-auto block h-auto w-full max-w-[1050px] rounded-[32px] max-[600px]:rounded-2xl"
        width={1565}
        height={464}
        loading="lazy"
        />
      </picture>
    </Motion.section>
  )
}

export default ConnectivitySection
