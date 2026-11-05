function ArticleSection({ post }) {
  return (
    <article className="mx-auto max-w-[1000px] px-6 pt-16 pb-24">
      <header className="mx-auto max-w-[800px]">
        <p className="text-sm font-bold text-title">{post.category}</p>
        <h1 className="mt-4 text-[44px] leading-tight font-bold tracking-[-1px] text-white max-[600px]:text-[32px]">{post.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-white/70">{post.excerpt}</p>
      </header>

      <img src={post.banner} alt={post.bannerAlt} className="mt-10 aspect-[16/8] w-full rounded-2xl object-cover object-center max-[600px]:aspect-[4/3]" fetchPriority="high" />

      <div className="mx-auto mt-12 max-w-[800px] space-y-10">
        {post.sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`article-section-${index}`}>
            <h2 id={`article-section-${index}`} className="text-2xl leading-snug font-bold text-title">{section.title}</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-white/75">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}

export default ArticleSection
