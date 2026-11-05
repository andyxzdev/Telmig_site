import { motion as Motion, useReducedMotion } from 'framer-motion'
import faqImage from '../../../assets/images/woman-enjoying-movie-night.webp'
import { companyLinks } from '../../../data/companyLinks.js'
import FaqItem from '../components/FaqItem.jsx'

// Informações conferidas em https://www.telmiginternet.com.br/ em 22/10/2026.
const questions = [
  {
    question: 'Como consultar a cobertura na minha região?',
    answer: 'A rede Telmig utiliza fibra óptica. A disponibilidade deve ser confirmada para o seu endereço com a equipe de atendimento. A pesquisa por CEP desta versão ainda apresenta respostas de teste.',
  },
  {
    question: 'Como escolher o melhor plano para mim?',
    answer: 'Considere quantas pessoas e dispositivos usam a internet e suas atividades, como trabalho, jogos e vídeos. A equipe Telmig pode ajudar você a comparar os planos disponíveis.',
  },
  {
    question: 'Qual é o prazo para a instalação?',
    answer: 'A Telmig informa um prazo médio de dois dias úteis, sujeito à região e à disponibilidade técnica. Confirme a data de instalação com a equipe durante a contratação.',
  },
  {
    question: 'Como acessar minhas faturas?',
    answer: 'O aplicativo Sou Telmig permite consultar e pagar faturas. O cadastro utiliza CPF ou CNPJ. Você também pode acessar a Central do assinante pelo link do site.',
  },
  {
    question: 'O que fazer se minha internet estiver lenta?',
    answer: 'Confira se a lentidão acontece em mais de um dispositivo e teste a conexão próximo ao roteador. Caso o problema continue, fale com o suporte da Telmig pelo WhatsApp.',
    href: `${companyLinks.whatsapp}?text=${encodeURIComponent('Oi, estou com problemas com a minha internet e gostaria de suporte.')}`,
    linkText: 'Falar com o suporte pelo WhatsApp',
  },
]

function FaqSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-background px-6 pt-[112px] pb-20" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1040px] grid-cols-[0.85fr_1.15fr] items-start gap-14 max-[800px]:grid-cols-1 max-[800px]:gap-10">
        <Motion.img
          src={faqImage}
          alt="Mulher utilizando um tablet em casa"
          width={4000}
          height={6000}
          loading="lazy"
          className="aspect-[3/4] w-full rounded-[24px] object-cover object-center max-[800px]:mx-auto max-[800px]:max-w-[420px]"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeOut' }}
        />

        <Motion.div
          className="pt-6 max-[800px]:pt-0"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.15, ease: 'easeOut' }}
        >
          <h2 id="faq-title" className="text-[36px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
            Perguntas <span className="text-title">frequentes</span>
          </h2>
          <div className="mt-9 flex flex-col gap-4">
            {questions.map((item) => <FaqItem key={item.question} {...item} />)}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default FaqSection
