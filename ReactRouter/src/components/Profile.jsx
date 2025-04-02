import React from 'react'
import { useAuth } from './useAuth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleClick = () => {
        auth.logout();
        navigate('/')
    }
  return (
    <div>
        Welcome {auth.user}
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}
