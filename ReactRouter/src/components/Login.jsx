import React, { useState } from 'react'
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState('');
    const auth = useAuth()
    const navigate = useNavigate()
    const handleClick = () => {
        auth.login(user)
        navigate('/', {replace: true})
    }
  return (
    <div>
      <label>
        Username : <input type='text' value={user} onChange={(e) => setUser(e.target.value)}></input>
      </label>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
