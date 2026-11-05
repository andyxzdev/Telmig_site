import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import blogPosts from '../data/blogPosts.js'
import { getPageMetadata, getStructuredData } from '../seo/site.js'

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function SeoMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getPageMetadata(pathname, blogPosts)
    document.title = metadata.title
    document.documentElement.lang = 'pt-BR'

    setMeta('name', 'description', metadata.description)
    setMeta('name', 'robots', metadata.robots)
    setMeta('property', 'og:title', metadata.title)
    setMeta('property', 'og:description', metadata.description)
    setMeta('property', 'og:url', metadata.canonical)
    setMeta('property', 'og:type', metadata.type)
    setMeta('property', 'og:image', metadata.image)
    setMeta('property', 'og:image:alt', metadata.imageAlt)
    setMeta('name', 'twitter:title', metadata.title)
    setMeta('name', 'twitter:description', metadata.description)
    setMeta('name', 'twitter:image', metadata.image)
    setMeta('name', 'twitter:image:alt', metadata.imageAlt)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = metadata.canonical

    const structuredData = getStructuredData(metadata)
    let schema = document.getElementById('seo-structured-data')
    if (!structuredData) {
      schema?.remove()
    } else {
      if (!schema) {
        schema = document.createElement('script')
        schema.id = 'seo-structured-data'
        schema.type = 'application/ld+json'
        document.head.appendChild(schema)
      }
      schema.textContent = JSON.stringify(structuredData)
    }
  }, [pathname])

  return null
}

export default SeoMetadata
