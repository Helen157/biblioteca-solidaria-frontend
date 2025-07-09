import Image from 'next/image';

export default function Header() {
  return (
  <header className="bg-white shadow-md h-20 flex items-center justify-between px-6">
  <div className="flex items-center gap-2 h-full">
    <img
      src="/images/LogoBibliotecaSolidaria1.png" alt="Logo" 
      className="h-full object-contain"
    />
    <span className="text-xl font-bold text-gray-800">Biblioteca Solidária</span>
  </div>
        <nav className="space-x-4">
          <a href="#livros" className="hover:underline">Livros</a>
          <a href="#emprestimos" className="hover:underline">Empréstimos</a>
        </nav>
    </header>
  )
}
