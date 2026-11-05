import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Empresas from './pages/empresas/Empresas.jsx'
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx'
import TermsOfUse from './pages/legal/TermsOfUse.jsx'
import CookieNotice from './components/CookieNotice.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import BlogPost from './pages/blog/BlogPost.jsx'
import SeoMetadata from './components/SeoMetadata.jsx'

function App() {
  return (
    <BrowserRouter>
      <SeoMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
      </Routes>
      <CookieNotice />
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}

export default App
