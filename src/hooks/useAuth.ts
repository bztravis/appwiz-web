import { use } from 'react'
import { AuthContext } from '../utils/AuthProvider'

export function useAuth() {
  const context = use(AuthContext)

  return context
}
