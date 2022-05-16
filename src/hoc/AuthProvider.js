import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext'

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState('')

  const signIn = (newUser, cb) => {
    setAuth(true)
    setUser(newUser)
    cb()
  }

  const signOut = (cb) => {
    setAuth(false)
    setUser('')
    cb()
  }

  const value = { auth, user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
