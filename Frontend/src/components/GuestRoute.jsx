import { Navigate } from 'react-router-dom'
import useUserStore from '../store/userStore'

const GuestRoute = ({ children }) => {
    const user = useUserStore((state) => state.userInfo)
    return user ? <Navigate to="/" replace /> : children
}

export default GuestRoute
