import { BiUserCircle } from 'react-icons/bi'
import { useUserContext } from '../context/UserContext'

function UserItem({ user }) {
  const { name } = user
  const { setCurrentUser } = useUserContext()

  return (
    <>
      <li className={`list-group-item d-flex`}>
        <div className="user-icon px-1"><BiUserCircle size="1.5rem" color="#222222" /></div>
        <div className="user-name px-1">{name}</div>
      </li>
    </>
  )
}

export default UserItem
