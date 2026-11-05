import { Gauge, Gift, Headphones, ShieldCheck, Wifi } from 'lucide-react'
import BenefitCard from '../components/BenefitCard.jsx'

const benefits = [
  { title: 'Velocidade para o seu dia', description: 'Navegue, assista e jogue com uma conexão que acompanha seu ritmo.', icon: Gauge },
  { title: 'Conexão estável', description: 'Fibra óptica para trabalhar, estudar e aproveitar seus conteúdos.', icon: ShieldCheck },
  { title: 'Suporte próximo de você', description: 'Conte com uma equipe pronta para ajudar quando precisar.', icon: Headphones },
  { title: 'Wi-Fi de alta performance', description: 'Conecte seus dispositivos e aproveite a internet em casa.', icon: Wifi },
  { title: 'Mais vantagens', description: 'Descubra benefícios e condições especiais para clientes Telmig.', icon: Gift },
]

function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-white px-6 pt-[112px] pb-20" aria-labelledby="benefits-title">
      <h2 id="benefits-title" className="text-center text-[36px] leading-tight font-bold tracking-[-0.8px] text-content-dark max-[600px]:text-[28px]">
        Por que escolher a <span className="text-[#009fc5]">Telmig</span>
      </h2>

      <div className="mx-auto mt-10 grid max-w-[1120px] grid-cols-5 gap-4 max-[1000px]:max-w-[760px] max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[420px]:max-w-[300px] max-[420px]:grid-cols-1">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.title} {...benefit} delay={index * 0.1} />
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection
