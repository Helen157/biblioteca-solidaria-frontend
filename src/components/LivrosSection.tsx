import { useState, useEffect } from "react";
import { fetchLivros } from "../services/api";
import { Livro } from "../types/livros";
import LivroCard from "./LivroCard";

function LivrosSection() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchLivros();
        console.log("Livros carregados da API:", data);
        setLivros(data);
      } catch (error) {
        console.error("Erro ao carregar livros:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div className="text-center py-8">Carregando livros...</div>;

  return (
    <section id="livros" className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Livros Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {livros.filter(l => l.disponivel).map(livro => (
          <LivroCard key={livro.id} livro={livro} />
        ))}
      </div>
    </section>
  );
}

export default LivrosSection;
