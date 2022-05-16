import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function PrivateRoute() {
  const location = useLocation()
  const pathName = location?.pathname
  const { auth } = useAuth()

  if (!auth) {
    return <Navigate to="/login" replace={true} state={{ from: pathName }} />
  }

  return <Outlet />
}

export default PrivateRoute
