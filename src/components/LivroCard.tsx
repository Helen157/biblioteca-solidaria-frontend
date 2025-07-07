import { Livro } from '../types/livros'
import Image from 'next/image'

export default function LivroCard({ livro }: { livro: Livro }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {livro.imagem ? (
          <Image src={livro.imagem} alt={livro.titulo} width={120} height={180} className="object-cover" />
        ) : (
          <span className="text-gray-500">Sem imagem</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{livro.titulo}</h3>
        <p className="text-gray-600">{livro.autor}</p>
        <span className="text-sm bg-blue-100 text-blue-800 rounded px-2 py-1 inline-block mt-2">{livro.categoria}</span>
      </div>
    </div>
  )
}
