import { CollegesSection, Footer, HeroSection, Navbar } from '../components'
import Faqs from '../components/Faqs'
import Features from '../components/Features'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center pb-10'>
      <Navbar />
      <Hero/>
      <Features/>
      <Faqs/>
      <CollegesSection />
      <Footer />
    </div>
  )
}
