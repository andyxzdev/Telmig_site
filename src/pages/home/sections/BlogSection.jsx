import blogPosts from '../../../data/blogPosts.js'
import BlogCard from '../components/BlogCard.jsx'

function BlogSection() {
  return (
    <section id="blog" className="bg-background px-6 pt-[112px] pb-20" aria-labelledby="blog-title">
      <h2 id="blog-title" className="text-center text-[36px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
        Conecte-se ao <span className="text-title">nosso blog</span>
      </h2>
      <p className="mx-auto mt-4 max-w-[580px] text-center text-sm leading-relaxed text-white/65">Conteúdos sobre tecnologia, entretenimento e uma rotina mais conectada.</p>
      <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-3 gap-8 max-[800px]:max-w-[480px] max-[800px]:grid-cols-1">
        {blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} delay={index * 0.15} />)}
      </div>
    </section>
  )
}

export default BlogSection
