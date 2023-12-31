import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Loading from './loading'
import { Suspense } from 'react'
import { Header } from './header'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Create Next App'
  },
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header/>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
