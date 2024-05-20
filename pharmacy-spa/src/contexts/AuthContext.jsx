import { createContext, useState } from 'react'
import axios from '../configs/axiosAuth'

export const AuthContent = createContext({
  user: null,
  setUser: () => {},
  admin: null,
  setAdmin: () => {},
  csrfToken: () => {},
})

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )
  const [admin, _setAdmin] = useState(
    JSON.parse(localStorage.getItem('admin') || null)
  )

  // set user to local storage
  const setUser = (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
    _setUser(user)
  }

  // set Admin to local storage
  const setAdmin = (admin) => {
    if (admin) {
      localStorage.setItem('admin', JSON.stringify(admin))
    } else {
      localStorage.removeItem('admin')
    }
    _setAdmin(admin)
  }

  // csrf token generation for guest methods
  const csrfToken = async () => {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')
    return true
  }

  return (
    <AuthContent.Provider value={{ user, setUser, admin, setAdmin, csrfToken }}>
      {children}
    </AuthContent.Provider>
  )
}
