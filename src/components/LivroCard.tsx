import React from "react";
import { livroCapas } from "../utils/livroCapas";
import { Livro } from "../types/livros";

interface LivroCardProps {
  livro: Livro;
}

const LivroCard = ({ livro }: LivroCardProps) => {
  const capa = livroCapas[livro.titulo] || "/images/sem-imagem.jpg";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-blue-100 flex items-center justify-center">
        <img
          src={capa}
          alt={`Capa do livro ${livro.titulo}`}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{livro.titulo}</h3>
        <p className="text-gray-600">{livro.autor}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
          {livro.categoria}
        </span>
      </div>
    </div>
  );
};

export default LivroCard;
