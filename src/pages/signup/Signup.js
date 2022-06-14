import { useState } from 'react'

//  styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
      <label>
        <span>Display name:</span>
        <input 
        required 
        type="text" 
        value={displayName} 
        onChange={(e) => setDisplayName(e.target.value)} 
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input 
        required 
        type="file"  
        />
      </label>
      <button className='btn'>Sign up</button>
    </form>
  )
}
