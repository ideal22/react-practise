import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Login() {
  const [value, setValue] = useState({ user: '', password: '' })
  const { signIn } = useAuth()
  const { state } = useLocation()
  const navigate = useNavigate()

  const onChange = (e) => {
    const { value } = e.target
    const { name } = e.target

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    signIn(value.user, () => navigate(state.from, { replace: true }))
    setValue({ user: '', password: '' })
  }
  return (
    <form onSubmit={submit}>
      <input type="text" value={value.user} onChange={onChange} name="user" />
      <input
        type="password"
        value={value.password}
        onChange={onChange}
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
