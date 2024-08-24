import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-center'>
      <p className='w-100vw my-10 text-center text-5xl font-bold'>
        THIS IS THE LANDING PAGE OF THE WEBSITE.
      </p>
      <Link href='/chat' className='underline'>Chatting Page</Link>
    </div>
  )
}
