import { useState } from 'react'
import { Send } from 'lucide-react'
import Button from '../../../components/Button.jsx'
import { sendContactMessage } from '../../../services/contact.js'

const emptyForm = { nome: '', telefone: '', email: '', mensagem: '' }
const inputClasses = 'w-full rounded-lg border border-white/10 bg-[#292f30] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9aa5aa] focus:border-title focus:ring-1 focus:ring-title'

function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState(null)

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setFeedback(null)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (submitting) return

    if (!form.nome.trim() || !form.mensagem.trim() || !/^\d{10,11}$/.test(form.telefone.replace(/\D/g, ''))) {
      setFeedback({ error: true, message: 'Preencha nome, mensagem e um telefone com DDD e 10 ou 11 dígitos.' })
      return
    }

    setSubmitting(true)
    setFeedback(null)
    try {
      await sendContactMessage(form)
      setForm(emptyForm)
      setFeedback({ error: false, message: 'Mensagem enviada com sucesso!' })
    } catch (error) {
      setFeedback({
        error: true,
        message: error.code === 'API_NOT_CONFIGURED' ? error.message : 'Não foi possível enviar sua mensagem. Tente novamente ou utilize nossos canais de atendimento.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="h-full rounded-[24px] bg-[#222827] p-5" onSubmit={handleSubmit} aria-labelledby="contact-form-title" aria-busy={submitting}>
      <h3 id="contact-form-title" className="mb-6 text-base font-bold text-white">Envie uma mensagem</h3>
      <fieldset disabled={submitting} className="flex flex-col gap-3 disabled:opacity-70">
        <label className="sr-only" htmlFor="contact-name">Nome obrigatório</label>
        <input className={inputClasses} id="contact-name" name="nome" value={form.nome} onChange={handleChange} placeholder="Nome *" autoComplete="name" required maxLength={120} />
        <label className="sr-only" htmlFor="contact-phone">Telefone obrigatório</label>
        <input className={inputClasses} id="contact-phone" name="telefone" type="tel" value={form.telefone} onChange={handleChange} placeholder="Telefone *" autoComplete="tel" required maxLength={20} />
        <label className="sr-only" htmlFor="contact-email">E-mail obrigatório</label>
        <input className={inputClasses} id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" autoComplete="email" required maxLength={254} />
        <label className="sr-only" htmlFor="contact-message">Mensagem obrigatória</label>
        <textarea className={`${inputClasses} min-h-[130px] resize-y`} id="contact-message" name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Mensagem *" required maxLength={5000} />
        <Button type="submit" className="mt-1 min-h-11! w-full min-w-0! gap-2 rounded-lg! bg-title! text-xs! text-background! shadow-[0_0_20px_rgba(9,191,241,0.25)]" disabled={submitting}>
          <Send className="size-4" aria-hidden="true" />
          {submitting ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
      </fieldset>
      <div aria-live="polite" aria-atomic="true">
        {feedback && <p className={`mt-4 text-sm leading-relaxed ${feedback.error ? 'text-[#ffb4b4]' : 'text-[#a6efce]'}`}>{feedback.message}</p>}
      </div>
    </form>
  )
}

export default ContactForm
