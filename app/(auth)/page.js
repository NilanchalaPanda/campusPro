import { CollegesSection, Footer, HeroSection, Navbar } from '../components'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center pb-10'>
      <Navbar />
      <HeroSection />
      <CollegesSection />
      <Footer />
    </div>
  )
}
