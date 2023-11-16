import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Component/Header/Navbar'
import Footer from '@/Component/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Universal',
  description: 'Universal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
