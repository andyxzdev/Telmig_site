import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { companyLinks } from '../data/companyLinks.js'

const navigation = [
  ['Início', '/'],
  ['Planos', '/#planos'],
  ['Cobertura', '/#cobertura'],
  ['Aplicativos', '/#aplicativo'],
  ['Benefícios', '/#beneficios'],
  ['Empresas', '/empresas'],
  ['Fale conosco', '/#contato'],
]

const legalLinks = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
]

const socialLinks = [
  { label: 'Instagram', icon: FaInstagram, href: companyLinks.instagram },
  { label: 'Facebook', icon: FaFacebookF, href: companyLinks.facebook },
  { label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/553130987420' },
]

const focusClasses = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title'
const linkClasses = `text-sm text-white/70 transition-colors hover:text-title ${focusClasses}`

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c1319] px-6 pt-[112px] pb-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[1.2fr_1fr_1.2fr] gap-16 pb-14 max-[900px]:grid-cols-2 max-[900px]:gap-10 max-[600px]:grid-cols-1">
          <div>
            <Link to="/" className={`inline-block no-underline ${focusClasses}`} aria-label="Telmig - início">
              <img src={logo} alt="Telmig" width={1100} height={600} className="block h-[54px] w-[180px] object-cover" loading="lazy" />
            </Link>
            <h2 className="mt-7 text-sm font-bold text-white">Redes sociais</h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, icon, href }) => {
                const Icon = icon
                const classes = `flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-title hover:text-title ${focusClasses}`
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={label}>
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <button key={label} type="button" disabled className={classes} aria-label={`${label} - link a definir`} title="Link a definir">
                    <Icon className="size-4" aria-hidden="true" />
                  </button>
                )
              })}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-base font-bold text-white">Navegação</h2>
            <ul className="mt-5 grid gap-3">
              {navigation.map(([label, href]) => (
                <li key={href}>
                  {href.startsWith('/#') ? <a className={linkClasses} href={href}>{label}</a> : <Link className={linkClasses} to={href}>{label}</Link>}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-bold text-white">Contatos</h2>
            <address className="mt-5 flex flex-col gap-4 not-italic">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                <MapPin className="mt-0.5 size-5 shrink-0 text-title" aria-hidden="true" />
                <span>Rua Setecentos e Quarenta e Um, nº 155, Bairro Jardim Vitória, CEP: 31970-636, Belo Horizonte - MG</span>
              </p>
              <a href="https://wa.me/553130987420" className={`inline-flex items-center gap-3 ${linkClasses}`}>
                <FaWhatsapp className="size-5 shrink-0 text-title" aria-hidden="true" />
                <span>(31) 3098-7420 <span className="sr-only">WhatsApp</span></span>
              </a>
              <a href="tel:+553130987420" className={`inline-flex items-center gap-3 ${linkClasses}`}>
                <Phone className="size-5 shrink-0 text-title" aria-hidden="true" />
                <span>(31) 3098-7420 <span className="sr-only">Telefone</span></span>
              </a>
              <a href="mailto:contato@telmig.com.br" className={`inline-flex items-center gap-3 ${linkClasses}`}>
                <Mail className="size-5 shrink-0 text-title" aria-hidden="true" />
                contato@telmig.com.br
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/55 max-[600px]:flex-col max-[600px]:text-center">
          <p>© {new Date().getFullYear()} Telmig. Todos os direitos reservados.</p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Informações legais">
            {legalLinks.map(({ label, href }) => (
              <Link key={label} className={`transition-colors hover:text-title ${focusClasses}`} to={href}>{label}</Link>
            ))}
          </nav>
          <p>
            Desenvolvido por{' '}
            <a href="https://www.andyxdev.com.br" target="_blank" rel="noopener noreferrer" className={`font-bold text-title ${focusClasses}`}>@andydev</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
