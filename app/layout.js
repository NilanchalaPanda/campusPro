'use client'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
