import '../styles/globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const metadata = {
  title: 'Portfolio - Angular Developer',
  description: 'Portfolio for an Angular developer with ~4 years experience'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 antialiased">
        <Header />
        <main className="container min-h-screen fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
