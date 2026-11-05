import { useState } from 'react'
import { Cookie } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const storageKey = 'telmig:cookie-notice:v1'

function CookieNotice() {
  const [visible, setVisible] = useState(() => {
    try {
      return window.localStorage.getItem(storageKey) !== 'dismissed'
    } catch {
      return true
    }
  })

  function dismissNotice() {
    try {
      window.localStorage.setItem(storageKey, 'dismissed')
    } catch {
      // O aviso continua podendo ser fechado se o navegador bloquear o armazenamento.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-[1180px] rounded-2xl bg-[#1a232c] p-5 text-white shadow-[0_8px_40px_rgba(0,0,0,0.4)] max-[600px]:p-4"
      aria-labelledby="cookie-notice-title"
    >
      <div className="flex items-center gap-5 max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:gap-4">
        <Cookie className="size-8 shrink-0 text-title max-[600px]:hidden" aria-hidden="true" />
        <div className="flex-1">
          <h2 id="cookie-notice-title" className="text-base font-bold text-white">Cookies e privacidade</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            Ao fechar este aviso, salvamos essa preferência neste navegador. O mapa do Google Maps é um serviço externo que pode utilizar cookies conforme suas próprias políticas. Saiba mais na nossa{' '}
            <Link to="/politica-de-privacidade" className="text-title underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title">Política de Privacidade</Link>.
          </p>
        </div>
        <Button onClick={dismissNotice} className="min-h-11! min-w-[120px]! shrink-0 rounded-lg! bg-title! text-background! max-[600px]:w-full">
          Entendi
        </Button>
      </div>
    </aside>
  )
}

export default CookieNotice
