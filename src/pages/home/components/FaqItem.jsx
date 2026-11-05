import { ChevronDown } from 'lucide-react'

function FaqItem({ question, answer, href, linkText }) {
  return (
    <details className="group rounded-xl bg-[#292929] text-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown className="size-4 shrink-0 text-title transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
      </summary>
      <p className="px-5 pb-5 text-base leading-relaxed text-white/80">{answer}</p>
      {href && (
        <a className="mx-5 mb-5 inline-flex text-sm font-bold text-title underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title" href={href} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )}
    </details>
  )
}

export default FaqItem
