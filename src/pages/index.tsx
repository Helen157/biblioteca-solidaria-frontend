import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LivrosSection from '../components/LivrosSection'
import EmprestimosSection from '../components/EmprestimosSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Biblioteca Solidária</title>
        <meta name="description" content="Compartilhando conhecimento" />
      </Head>
      <Header />
      <main>
        <Hero />
        <LivrosSection />
        <EmprestimosSection />
      </main>
      <Footer />
    </div>
  )
}
