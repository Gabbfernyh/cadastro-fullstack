import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState()
  const [users, setUsers] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Formulário enviado', { name, email, age })

    const newUsers = {
      id: Date.now(),
      name,
      email,
      age
    }

    console.log(newUsers)

    setUsers([...users, newUsers])
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuarios</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Digite seu nome (ou aleatorio)'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder='Digite seu email (ou aleatorio)'
          value={email}
          onChange={(event) => setEmail(event.target.value)} />

        <input
          type="number"
          placeholder='Digite sua idade'
          value={age}
          onChange={(event) => setAge(event.target.value)} />
        <button type='submit'>Cadastrar</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

    </div >
  )
}

export default App
