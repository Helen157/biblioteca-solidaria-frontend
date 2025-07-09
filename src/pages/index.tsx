import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LivrosSection from '../components/LivrosSection'
import EmprestimosSection from '../components/EmprestimosSection'
import Footer from '../components/Footer'
import FormularioEmprestimo from '../components/FormularioEmprestimo'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Biblioteca Solidária</title>
        <meta name="description" content="Descubra, empreste, compartilhe!" />
      </Head>
      <Header />
      <main>
        <Hero />
      <section className="py-8 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Sobre a Biblioteca Solidária</h2>
        <p className="text-gray-700 text-lg">
          A Biblioteca Solidária é um espaço colaborativo para o compartilhamento de conhecimento.
          Aqui você pode emprestar ou retirar livros de forma simples e gratuita, incentivando a leitura e o acesso à cultura para todos!
        </p>
      </section>
        <LivrosSection />
        <EmprestimosSection />
        <FormularioEmprestimo/>
        </main>
      <Footer/>
    </div>
  )
}
