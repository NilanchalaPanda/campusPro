import {
  CTA,
  Footer,
  Faqs,
  Navbar,
  Features,
  HeroSection,
  Works,
} from '../../components'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar />
      <HeroSection />
      <Features />
      <Works />
      <Faqs />
      <CTA />
      <Footer />
    </div>
  )
}
