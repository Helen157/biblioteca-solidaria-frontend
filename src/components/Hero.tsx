export default function Hero() {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/HeroBibliotecaSolidaria.jpg')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded">
        <h2 className="text-4xl font-bold mb-4">Compartilhando conhecimento</h2>
        <p className="text-lg mb-6">Empreste um livro, descubra novas ideias. Faça uma doação.</p>
      </div>
    </section>
  )
}
