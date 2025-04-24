import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GuestRoute = ({ children }) => {
      const {userInfo} = useSelector((state) => state.auth)
    
    return userInfo ? <Navigate to="/" replace /> : children
}

export default GuestRoute
