import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { companyLinks } from '../../../data/companyLinks.js'
import { checkTestCoverage, formatCep } from '../data/coverage.js'

function CoverageForm() {
  const [cep, setCep] = useState('')
  const [result, setResult] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    setResult(checkTestCoverage(cep))
  }

  return (
    <form className="mt-4 w-full max-w-[320px]" onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor="coverage-cep">Digite seu CEP</label>
      <div className="flex h-10 items-center rounded-lg bg-[#1a2228] focus-within:ring-2 focus-within:ring-title">
        <MapPin className="ml-3 size-4 shrink-0 text-white" aria-hidden="true" />
        <input
          id="coverage-cep"
          name="cep"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={9}
          value={cep}
          onChange={(event) => {
            setCep(formatCep(event.target.value))
            setResult(null)
          }}
          placeholder="Digite seu CEP"
          className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-[#72797d]"
          aria-invalid={Boolean(result?.error)}
          aria-describedby={result ? 'coverage-result' : undefined}
        />
        <button
          type="submit"
          className="flex h-10 w-16 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-title text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title"
          aria-label="Pesquisar cobertura pelo CEP"
        >
          <Search className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {result && (
          <p id="coverage-result" className={`mt-3 text-sm leading-relaxed ${result.error ? 'text-[#ffb4b4]' : 'text-white'}`}>
            {result.error ?? result.message}
          </p>
        )}
      </div>
      <a
        className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-title px-5 text-sm font-bold text-background no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title"
        href={`${companyLinks.whatsapp}?text=${encodeURIComponent('Oi, gostaria de consultar a viabilidade da Telmig para o meu endereço.')}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar viabilidade
      </a>
    </form>
  )
}

export default CoverageForm
