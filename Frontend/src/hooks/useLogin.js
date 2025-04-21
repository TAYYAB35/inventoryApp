// hooks/useLogin.js
import { useMutation } from '@tanstack/react-query'
import useUserStore from '../store/userStore'

const loginUser = async ({ email, password }) => {
  const response = await fetch('/api/users/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Login failed')
  }

  return response.json()
}

const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser)

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data)
    }
  })
}

export default useLogin
