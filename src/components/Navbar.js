import './Navbar.css'
import Temple from '../assets/temple.svg' 

import { Link } from 'react-router-dom' 
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const {logout, isPending, error} = useLogout()
  const {user} = useAuthContext()

  return (
    <div className='navbar'> 
        <ul>
            <li className='logo'>
                <img src={Temple} alt="dojo icon"/> 
                <span>The dojo</span> 
            </li>
            {error && <li><p>{error}</p></li>}
            {!user && <li><Link to="/login">Login</Link></li> }
            {!user && <li><Link to="/signup">Signup</Link></li> }

            {(!isPending && user) && <li><button className='btn' onClick={logout}>Logout</button></li> }
            {isPending && <li><button className='btn' disabled>Logging out...</button></li> }
        </ul>
    </div>
  )
}
