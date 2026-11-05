import { Crown, Router, Wifi, Zap } from 'lucide-react'
import PlanCard from '../components/PlanCard.jsx'

const plans = [
  { speed: 600, price: '99,99', icon: Wifi, symmetric: true },
  { speed: 800, price: '119,99', icon: Zap, symmetric: true },
  { speed: 1000, price: '129,99', icon: Crown, symmetric: true, benefits: ['Wi-Fi 6', 'Download e upload simétricos', 'Clube de vantagens'] },
  {
    speed: 2000,
    label: '2 Gbps',
    price: null,
    icon: Router,
    featured: true,
    description: 'Wi-Fi 7',
    benefits: ['2 Gbps de download', 'Tecnologia Wi-Fi 7', 'Consulte disponibilidade'],
  },
]

function PlansSection() {
  return (
    <section id="planos" className="relative z-10 -mt-px bg-background px-6 pt-[112px] pb-14" aria-labelledby="plans-title">
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
