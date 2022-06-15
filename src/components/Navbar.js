import './Navbar.css'
import Temple from '../assets/temple.svg' 

import { Link } from 'react-router-dom' 
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const {logout, isPending, error} = useLogout()

  return (
    <div className='navbar'> 
        <ul>
            <li className='logo'>
                <img src={Temple} alt="dojo icon"/> 
                <span>The dojo</span> 
            </li>
            {error && <li><p>{error}</p></li>}
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/signup">Signup</Link></li> 
            {!isPending && <li><button className='btn' onClick={logout}>Logout</button></li> }
            {isPending && <li><button className='btn' disabled>Logging out...</button></li> }
        </ul>
    </div>
  )
}
