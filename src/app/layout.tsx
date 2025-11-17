import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sumedh Charjan | Full Stack Developer',
  description: 'Full Stack (MERN) developer and B.Tech E&TC student at VJTI, building secure, scalable web applications.',
  icons: [{ rel: "icon", url: "/profile.jpg" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Toaster/>
      </body>
    </html>
  )
}

