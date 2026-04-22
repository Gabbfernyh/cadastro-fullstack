import './UserCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function UserCard({ user, onDelete }) {
    return (
        <div className="user-card">
            <img className='user-card-avatar' src={`https://robohash.org/${user._id}`} alt="Avatar do usuário" />
            <div className="user-card-info">
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Idade: {user.age}</p>
            </div>
            <button type="button" onClick={() => onDelete(user._id)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}

export default UserCard