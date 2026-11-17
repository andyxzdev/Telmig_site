import { Crown, Router, Wifi, Zap } from 'lucide-react'
import PlanCard from '../components/PlanCard.jsx'

const plans = [
  { speed: 600, price: '99,99', icon: Wifi, benefits: ['Wi-Fi de alta performance', 'Instalação grátis*', 'Clube de vantagens', 'Telmig livros'] },
  { speed: 800, price: '119,99', icon: Zap, benefits: ['Wi-Fi de alta performance', 'Instalação grátis*', 'Clube de vantagens', 'Telmig livros'] },
  { speed: 1000, label: '1 Giga', price: '129,99', icon: Crown, benefits: ['Wi-Fi 6 de alta performance', 'Instalação grátis*', 'Clube de Vantagens', 'Telmig livros'] },
  {
    speed: 2000,
    label: '2 Giga',
    price: null,
    icon: Router,
    featured: true,
    description: 'Wi-Fi 7 de alta performance',
    benefits: ['Wi-Fi 7 de alta performance', 'Instalação grátis*', 'Clube de Vantagens', 'Telmig livros'],
  },
]

function PlansSection() {
  return (
    <section id="planos" className="relative z-10 -mt-px overflow-hidden bg-[radial-gradient(ellipse_at_50%_56%,rgba(9,191,241,0.13),transparent_68%),var(--color-background)] px-6 pt-[112px] pb-14" aria-labelledby="plans-title">
      <h2 id="plans-title" className="text-center text-[32px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
        Escolha seu <span className="text-title">plano ideal</span>
      </h2>

      <div className="mx-auto mt-[72px] grid max-w-[1120px] grid-cols-4 gap-8 max-[1000px]:grid-cols-2 max-[600px]:mt-12 max-[600px]:max-w-[300px] max-[600px]:grid-cols-1 max-[600px]:gap-10">
        {plans.map((plan, index) => <PlanCard key={plan.speed} {...plan} delay={index * 0.15} />)}
      </div>
    </section>
  )
}

export default PlansSection
