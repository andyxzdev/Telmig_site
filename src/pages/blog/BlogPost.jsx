import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import blogPosts from '../../data/blogPosts.js'
import Footer from '../../components/Footer.jsx'
import ArticleSection from './sections/ArticleSection.jsx'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-6 py-7">
        <Link to="/" aria-label="Telmig - início" className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title">
          <img src={logo} alt="Telmig" width={1100} height={600} className="block h-[45px] w-[140px] object-cover" />
        </Link>
        <a href="/#blog" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-title focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title">
          <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao blog
        </a>
      </header>
      <main>
        {post ? <ArticleSection post={post} /> : (
          <div className="mx-auto max-w-[800px] px-6 py-24 text-center">
            <h1 className="text-3xl font-bold text-white">Artigo não encontrado</h1>
            <p className="mt-4 text-white/70">Esta publicação não está disponível. Acesse as postagens do blog para continuar lendo.</p>
            <a href="/#blog" className="mt-8 inline-flex rounded-lg bg-title px-6 py-3 text-sm font-bold text-background">Ver postagens</a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost
