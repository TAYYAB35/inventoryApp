// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import useUserStore from '../store/userStore'

const ProtectedRoute = ({ children }) => {
  const user = useUserStore((state) => state.userInfo)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
