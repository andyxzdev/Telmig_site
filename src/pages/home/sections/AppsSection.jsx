import disney from '../../../assets/apps/streaming-disney-DcYvfVH5.jpeg'
import hbo from '../../../assets/apps/streaming-hbo-BAEI-0x-.jpeg'
import deezer from '../../../assets/apps/streaming-deezer-BafRQqlW.jpeg'
import playkids from '../../../assets/apps/streaming-playkids-BO4KzkL0.jpeg'
import sky from '../../../assets/apps/streaming-sky-BiyQPD8G.jpeg'
import queima from '../../../assets/apps/streaming-queima-BCg-_Cfe.jpeg'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import AppLogo from '../components/AppLogo.jsx'

const apps = [
  { name: 'Disney+', src: disney },
  { name: 'HBO Max', src: hbo },
  { name: 'Deezer', src: deezer },
  { name: 'PlayKids Learning', src: playkids },
  { name: 'Sky+ Light', src: sky },
  { name: 'Queima Diária', src: queima },
]

function AppsSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="aplicativo" className="bg-white px-6 pt-[112px] pb-20" aria-labelledby="apps-title">
      <h2 id="apps-title" className="mx-auto max-w-[880px] text-center text-[36px] leading-[1.2] font-bold tracking-[-0.8px] text-content-dark max-[600px]:text-[28px]">
        Internet rápida com os melhores<br className="max-[600px]:hidden" />{' '}
        <span className="text-[#009fc5]">aplicativos de entretenimento</span>
      </h2>
      <p className="mx-auto mt-8 max-w-[650px] text-center text-[15px] leading-[1.4] text-content-dark">
        Adicione aplicativos ao seu plano Telmig e tenha ainda mais entretenimento, conteúdo e experiências digitais para toda a família.
      </p>

      <div className="relative mx-auto mt-12 max-w-[1280px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <Motion.div
          className="flex w-max"
          animate={reducedMotion ? undefined : { x: ['0%', '-50%'] }}
          transition={reducedMotion ? undefined : { duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((group) => (
            <ul key={group} className="flex w-max shrink-0 gap-6 pr-6" aria-hidden={group === 1}>
              {apps.map((app) => <AppLogo key={app.name} {...app} />)}
            </ul>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default AppsSection
