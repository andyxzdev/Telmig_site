import ReviewCard from '../components/ReviewCard.jsx'
import { motion as Motion, useReducedMotion } from 'framer-motion'

const reviews = [
  {
    name: 'Wellington Pereira',
    rating: 5,
    time: '1 ano atrás',
    comment: 'Ta de parabéns',
    verified: true,
  },
  {
    name: 'Tudo Mais variedades',
    rating: 5,
    time: '1 ano atrás',
    verified: true,
  },
  {
    name: 'Rinaldo floriano Ferreira',
    rating: 5,
    time: '1 ano atrás',
    verified: true,
  },
  {
    name: 'Pedro Henrique',
    rating: 5,
    time: '5 de set. de 2023',
    comment: 'Minha experiência com a telmig, internet top demais ,nota Dez',
  },
  {
    name: 'Emilly_A',
    details: 'Local Guide · 15 avaliações · 0 foto',
    rating: 5,
    time: '12 de jul. de 2023',
    comment: 'Ótima internet.',
  },
]

function ReviewsSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-background px-6 pt-[112px] pb-20" aria-labelledby="reviews-title">
      <h2 id="reviews-title" className="text-center text-[36px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
        O que nossos <span className="text-title">clientes</span> dizem
      </h2>

      <div className="relative mx-auto mt-14 max-w-[1280px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <Motion.div
          className="flex w-max"
          animate={reducedMotion ? undefined : { x: ['-50%', '0%'] }}
          transition={reducedMotion ? undefined : { duration: 72, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((group) => (
            <ul key={group} className="flex w-max shrink-0 gap-6 pr-6" aria-hidden={group === 1}>
              {reviews.map((review) => (
                <li key={review.name} className="w-[min(82vw,350px)] shrink-0">
                  <ReviewCard {...review} />
                </li>
              ))}
            </ul>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
