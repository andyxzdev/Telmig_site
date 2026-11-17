import HomeSection from './sections/HomeSection.jsx'
import PlansSection from './sections/PlansSection.jsx'
import CoverageSection from './sections/CoverageSection.jsx'
import BenefitsSection from './sections/BenefitsSection.jsx'
import AppsSection from './sections/AppsSection.jsx'
import SubscriberAppSection from './sections/SubscriberAppSection.jsx'
import PartnersSection from './sections/PartnersSection.jsx'
import ReviewsSection from './sections/ReviewsSection.jsx'
import FaqSection from './sections/FaqSection.jsx'
import ContractSection from './sections/ContractSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import BlogSection from './sections/BlogSection.jsx'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'

function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HomeSection />
        <PlansSection />
        <CoverageSection />
        <BenefitsSection />
        <AppsSection />
        <SubscriberAppSection />
        <PartnersSection />
        <ReviewsSection />
        <BlogSection />
        <FaqSection />
        <ContractSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
