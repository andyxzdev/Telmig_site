import { Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import ContactForm from '../components/ContactForm.jsx'
import contactImage from '../../../assets/images/close-up-employee-server-hub-coordinating-technicians-using-mic.webp'

const channels = [
  { text: '(31) 3098-7420', href: 'https://wa.me/553130987420', icon: FaWhatsapp, label: 'Conversar pelo WhatsApp' },
  { text: '(31) 3098-7420', href: 'tel:+553130987420', icon: Phone, label: 'Ligar para a Telmig' },
  { text: 'contato@telmig.com.br', href: 'mailto:contato@telmig.com.br', icon: Mail, label: 'Enviar e-mail para a Telmig' },
]

function ContactSection() {
  return (
    <section id="contato" className="bg-background px-6 pt-[112px] pb-20" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-center text-[36px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
        Fale <span className="text-title">conosco</span>
      </h2>

      <div className="mx-auto mt-12 max-w-[900px]">
        <div className="grid grid-cols-[1.15fr_1fr] items-stretch gap-8 max-[700px]:grid-cols-1">
          <ContactForm />
          <div className="relative min-h-[380px] overflow-hidden rounded-[24px] bg-[#222827] max-[700px]:min-h-[280px]">
            <img
              src={contactImage}
              alt="Profissional de atendimento utilizando um headset"
              className="absolute inset-0 h-full w-full object-cover object-center"
              width={5332}
              height={3555}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 max-[700px]:grid-cols-1">
          {channels.map(({ text, href, icon, label }) => {
            const Icon = icon
            return (
              <a key={href} href={href} aria-label={`${label}: ${text}`} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg bg-[#222827] px-4 py-2 text-[13px] font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title">
                <Icon className="size-5 shrink-0 text-title" aria-hidden="true" />
                <span className="flex-1 text-center">{text}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
