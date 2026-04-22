import { useState, useEffect } from 'react'
import './App.css'
import UserCard from './components/UserCard'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Buscar usuários ao carregar a página
  useEffect(() => {
    fetchUsers()
  }, [])

  // Função para buscar usuários da API
  async function fetchUsers() {
    try {
      const response = await fetch(`${API_URL}/users`)
      if (!response.ok) throw new Error('Erro ao buscar usuários')
      const data = await response.json()
      setUsers(data)
      setError(null)
    } catch (err) {
      console.error('Erro:', err)
      setError(err.message)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          age: Number(age)
        })
      })

      if (!response.ok) throw new Error('Erro ao cadastrar usuário')

      // Limpar formulário e recarregar lista
      setName("")
      setEmail("")
      setAge("")

      await fetchUsers()
    } catch (err) {
      console.error('Erro:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(userId) {
    try {
      const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Erro ao deletar usuário')

      await fetchUsers()
    } catch (err) {
      console.error('Erro:', err)
      setError(err.message)
    }
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuarios</h1>

      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Digite seu nome (ou aleatorio)'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder='Digite seu email (ou aleatorio)'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="number"
          placeholder='Digite sua idade'
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>

      <div className="user-list">
        {users.length === 0 ? (
          <p className='usersAlert'>Nenhum usuário cadastrado ainda</p>
        ) : (
          users.map((user) => (
            <UserCard key={user._id} user={user} onDelete={handleDelete} />
          ))
        )}
      </div>

    </div >
  )
}

export default App
