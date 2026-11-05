import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import logo from '../assets/logo.webp'
import { companyLinks } from '../data/companyLinks.js'

const links = [
  ['Planos', '#planos'],
  ['Cobertura', '#cobertura'],
  ['Aplicativo', '#aplicativo'],
  ['Benefícios', '#beneficios'],
  ['Sobre', '#sobre'],
  ['Suporte', '#suporte'],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-1/2 z-2 flex w-full max-w-[1280px] -translate-x-1/2 items-center gap-12 px-10 py-7 max-[1150px]:gap-7 max-[1150px]:px-6 max-[960px]:justify-between max-[960px]:py-5">
      <Link className="shrink-0 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title" to="/" aria-label="Telmig - início">
        <img src={logo} alt="Telmig" width={1100} height={600} className="block h-[45px] w-[140px] object-cover" />
      </Link>

      <button
        className="hidden cursor-pointer rounded-lg border border-title bg-transparent p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title max-[960px]:inline-flex"
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        id="site-navigation"
        className={`flex flex-1 items-center justify-between gap-7 max-[1150px]:gap-5 max-[960px]:absolute max-[960px]:top-full max-[960px]:right-6 max-[960px]:left-6 max-[960px]:flex-col max-[960px]:items-stretch max-[960px]:rounded-xl max-[960px]:border max-[960px]:border-title/30 max-[960px]:bg-background max-[960px]:p-6 ${menuOpen ? 'max-[960px]:flex' : 'max-[960px]:hidden'}`}
        aria-label="Menu principal"
      >
        <div className="flex items-center gap-4 max-[1150px]:gap-3 max-[960px]:flex-col max-[960px]:items-stretch max-[960px]:gap-5">
          {links.map(([label, href]) => (
            <a className="whitespace-nowrap text-sm font-normal text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title max-[1150px]:text-[13px] max-[960px]:text-sm" key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2.5 max-[960px]:flex-col max-[960px]:items-stretch max-[960px]:gap-5">
          <Button className="max-[1150px]:min-w-auto max-[1150px]:text-xs" variant="outline" href={companyLinks.subscriberPortal} target="_blank" rel="noopener noreferrer">Central do assinante</Button>
          <Button className="max-[1150px]:min-w-auto max-[1150px]:text-xs" href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer">Contratar Internet</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
