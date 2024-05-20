import { useContext } from 'react'
import { AuthContent } from '../contexts/AuthContext'

export const useAuth = () => {
  return useContext(AuthContent)
}
