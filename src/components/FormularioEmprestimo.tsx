// src/components/FormularioEmprestimo.tsx
import React, { useState } from "react";

export default function FormularioEmprestimo() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [livro, setLivro] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode enviar os dados para uma API ou salvar em JSON
    console.log("Solicitação enviada:", { nome, contato, livro });

    setMensagem("Solicitação enviada com sucesso!");
    setNome("");
    setContato("");
    setLivro("");
  };

  return (
    <section className="py-12 px-4 bg-gray-50 text-center" id="emprestimo">
      <h2 className="text-2xl font-bold mb-6">Solicitar Empréstimo</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium">Seu nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">E-mail ou telefone</label>
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Nome do livro</label>
          <input
            type="text"
            value={livro}
            onChange={(e) => setLivro(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Solicitar Empréstimo
        </button>
        {mensagem && <p className="text-green-600 mt-2">{mensagem}</p>}
      </form>
    </section>
  );
}
