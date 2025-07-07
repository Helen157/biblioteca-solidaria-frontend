export type Livro = {
  id: number
  titulo: string
  autor: string
  categoria: string
  disponivel: boolean
  imagem?: string
}

export type Emprestimo = {
  id: number
  livroId: number
  leitor: string
  dataEmprestimo: string
  dataDevolucao: string
}
