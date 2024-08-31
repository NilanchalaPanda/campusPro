import Cta from '@/components/Cta'
import { Navbar } from '../../components'
import Faqs from '../../components/Faqs'
import Features from '../../components/Features'
import Hero from '../../components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center pb-10'>
      <Navbar />
      <Hero />
      <Features />
      <Faqs />
      <Cta />
      <Footer/>
    </div>
  )
}
