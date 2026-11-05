import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer.jsx'
import logo from '../../../assets/logo.webp'

function LegalPage({ title, introduction, sections, references }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [title])

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-6 py-7">
        <Link to="/" aria-label="Telmig - início" className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title">
          <img src={logo} alt="Telmig" width={1100} height={600} className="block h-[45px] w-[140px] object-cover" />
        </Link>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-title focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar ao início
        </Link>
      </header>

      <main className="mx-auto max-w-[900px] px-6 pt-16 pb-24">
        <h1 className="text-[40px] leading-tight font-bold tracking-[-1px] text-white max-[600px]:text-[30px]">{title}</h1>
        <p className="mt-4 text-sm text-white/55">Última atualização: 22 de outubro de 2026.</p>
        <p className="mt-8 text-base leading-relaxed text-white/80">{introduction}</p>
        <p className="mt-6 rounded-xl border border-title/20 bg-title/5 p-4 text-sm leading-relaxed text-white/75">
          Versão inicial para revisão. Os dados cadastrais da empresa e as informações sobre o atendimento e o tratamento de dados devem ser confirmados antes da publicação definitiva.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <section key={section.title} aria-labelledby={`legal-section-${index}`}>
              <h2 id={`legal-section-${index}`} className="text-xl leading-snug font-bold text-title">{index + 1}. {section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/75">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70">
          <p>Dúvidas? Entre em contato pelo e-mail{' '}
            <a href="mailto:contato@telmig.com.br" className="break-all text-title underline underline-offset-4">contato@telmig.com.br</a>.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3" aria-label="Referências legais">
            {references.map(({ label, href }) => (
              <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-title underline underline-offset-4">{label}</a></li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LegalPage
