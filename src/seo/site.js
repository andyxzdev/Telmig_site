import { companyLinks } from '../data/companyLinks.js'

export const site = {
  url: 'https://www.telmiginternet.com.br',
  name: 'Telmig',
  title: 'Telmig | Internet fibra óptica em Belo Horizonte',
  description: 'Conheça os planos de internet fibra óptica da Telmig, incluindo 2 Gbps com Wi-Fi 7. Consulte a cobertura para seu endereço e fale com nossa equipe.',
  image: '/logo.webp',
}

const indexRobots = 'index, follow, max-image-preview:large'

export function getPageMetadata(pathname, posts) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const base = {
    title: site.title,
    description: site.description,
    canonical: `${site.url}${path}`,
    image: new URL(site.image, site.url).href,
    imageAlt: 'Telmig - conexão entre a gente',
    type: 'website',
    robots: indexRobots,
    post: null,
  }

  if (path === '/') return base

  if (path === '/politica-de-privacidade') {
    return { ...base, title: 'Política de Privacidade | Telmig', description: 'Saiba como o site Telmig utiliza dados pessoais, conheça seus direitos e consulte os canais para dúvidas sobre privacidade.' }
  }

  if (path === '/termos-de-uso') {
    return { ...base, title: 'Termos de Uso | Telmig', description: 'Consulte as condições de navegação e uso do site Telmig, informações sobre seus conteúdos, serviços e canais de atendimento.' }
  }

  if (path === '/empresas') {
    return { ...base, title: 'Empresas | Telmig', description: 'Página de soluções Telmig para empresas em preparação.', robots: 'noindex, follow' }
  }

  const post = posts.find((item) => path === `/blog/${item.slug}`)
  if (post) {
    return {
      ...base,
      title: `${post.title} | Blog Telmig`,
      description: post.excerpt,
      image: post.banner ? new URL(post.banner, site.url).href : base.image,
      imageAlt: post.bannerAlt || 'Telmig',
      type: 'article',
      post,
    }
  }

  return { ...base, title: 'Página não encontrada | Telmig', description: 'O conteúdo solicitado não está disponível. Acesse o site Telmig para conhecer nossos planos e conteúdos.', robots: 'noindex, follow' }
}

export function getStructuredData(metadata) {
  if (metadata.robots.startsWith('noindex')) return null

  const organizationId = `${site.url}/#organization`
  const websiteId = `${site.url}/#website`
  const graph = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: site.name,
      url: `${site.url}/`,
      logo: new URL(site.image, site.url).href,
      telephone: '+55-31-3098-7420',
      email: 'contato@telmig.com.br',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Setecentos e Quarenta e Um, 155, Jardim Vitória',
        addressLocality: 'Belo Horizonte',
        addressRegion: 'MG',
        postalCode: '31970-636',
        addressCountry: 'BR',
      },
      sameAs: [companyLinks.instagram, companyLinks.facebook],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: 'pt-BR',
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'WebPage',
      '@id': `${metadata.canonical}#webpage`,
      url: metadata.canonical,
      name: metadata.title,
      description: metadata.description,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': websiteId },
    },
  ]

  if (metadata.post) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${metadata.canonical}#article`,
      headline: metadata.post.title,
      description: metadata.description,
      image: metadata.image,
      articleSection: metadata.post.category,
      inLanguage: 'pt-BR',
      mainEntityOfPage: { '@id': `${metadata.canonical}#webpage` },
      publisher: { '@id': organizationId },
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
