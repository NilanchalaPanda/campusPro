import { CollegesSection, Footer, HeroSection, Navbar } from '../components'
import AudioRecorder from '../components/AudioRecorder'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center pb-10'>
      <Navbar />
      <HeroSection />
      <CollegesSection />
      <AudioRecorder/>
      <Footer />
    </div>
  )
}
