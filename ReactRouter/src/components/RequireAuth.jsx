import React from 'react'
import { useAuth } from './useAuth'
import { Navigate } from 'react-router-dom'

export const RequireAuth = ({children})  => {
    const auth = useAuth()

    if(!auth.user){
        return <Navigate to='/login'></Navigate>
    }
  return children
}
