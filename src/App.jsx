import IntroSection from './components/intro-section/IntroSection'
import CTASection from './components/cta-section/CTASection'
import TestimonalSection from './components/testimonial-section/TestimonalSection'
import Banner from './components/cta-banner-section/Banner'
import Footer from './components/footer-section/Footer'

import './App.css'

// render mobile version of app depending on screen size
function App() {
  return (
    <>
      <IntroSection />
      <CTASection />
      <TestimonalSection />
      <Banner />
      <Footer />
    </>
  )
}

export default App
