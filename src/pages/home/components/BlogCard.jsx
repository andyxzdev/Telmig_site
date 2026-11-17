import { ArrowUpRight } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

function BlogCard({ post, delay = 0 }) {
  const reducedMotion = useReducedMotion()

  return (
    <Motion.article
      className="h-full overflow-hidden rounded-2xl border border-white/10 bg-[#1a232c]"
      initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : delay, ease: 'easeOut' }}
    >
      <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-title" aria-label={`Ler artigo: ${post.title}`}>
        {post.banner ? (
          <img src={post.banner} alt={post.bannerAlt} className="aspect-[16/10] w-full object-cover object-center" loading="lazy" />
        ) : (
          <div className="aspect-[16/10] bg-gradient-to-br from-[#123843] via-[#17272d] to-[#18232c]" aria-hidden="true" />
        )}
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-bold text-title">{post.category}</span>
          <h3 className="mt-3 text-xl leading-snug font-bold text-white">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{post.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-title group-hover:underline">
            Ler artigo <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Motion.article>
  )
}

export default BlogCard
