import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';

// styles
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, isPending, login} = useLogin();


  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  }
  
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input 
          required 
          type="text" 
          value={email} onChange={(e) => setEmail(e.target.value)} 
          />
      </label>
      <label>
        <span>Password:</span>
        <input 
        required 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
      </label>
      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button disabled className='btn'>Logging in...</button>}
      {error && <div className='error'>{error}</div>}

    </form>
  )
}
