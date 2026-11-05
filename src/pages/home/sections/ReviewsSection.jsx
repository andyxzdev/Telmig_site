import ReviewCard from '../components/ReviewCard.jsx'

// Depoimentos de exemplo; substituir pelas avaliações reais antes da publicação.
const reviews = [
  {
    name: 'Cliente de exemplo 1',
    city: 'Belo Horizonte',
    rating: 5,
    comment: 'A internet da Telmig é muito estável e o suporte é rápido. Consigo trabalhar e assistir às minhas séries com tranquilidade.',
  },
  {
    name: 'Cliente de exemplo 2',
    city: 'Sabará',
    rating: 5,
    comment: 'A instalação foi prática e a equipe explicou tudo direitinho. Aqui em casa, toda a família usa a internet ao mesmo tempo.',
  },
  {
    name: 'Cliente de exemplo 3',
    city: 'Contagem',
    rating: 5,
    comment: 'Gostei muito do atendimento e da velocidade da conexão. Sempre que precisei de ajuda, fui atendido com atenção.',
  },
  {
    name: 'Cliente de exemplo 4',
    city: 'Santa Luzia',
    rating: 5,
    comment: 'A conexão atende bem à nossa rotina de estudos e lazer. O atendimento foi atencioso desde a contratação.',
  },
]

function ReviewsSection() {
  return (
    <section className="bg-background px-6 pt-[112px] pb-20" aria-labelledby="reviews-title">
      <h2 id="reviews-title" className="text-center text-[36px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
        O que nossos <span className="text-title">clientes</span> dizem
      </h2>

      <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-4 gap-10 max-[1000px]:grid-cols-2 max-[600px]:max-w-[480px] max-[600px]:grid-cols-1">
        {reviews.map((review, index) => <ReviewCard key={review.name} {...review} delay={index * 0.15} />)}
      </div>
    </section>
  )
}

export default ReviewsSection
