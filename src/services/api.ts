import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000' // API local da Biblioteca Solidária
})

export const fetchLivros = async () => {
  const response = await api.get('/livros')
  return response.data
}

export const fetchEmprestimos = async () => {
  const response = await api.get('/emprestimos')
  return response.data
}
