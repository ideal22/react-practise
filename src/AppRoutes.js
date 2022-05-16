import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './hoc/AuthProvider'
import { privateRouts, routes } from './routes'

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ isIndex, path, Element }) => (
            <Route
              key={path}
              index={isIndex}
              path={path}
              element={<Element />}
            />
          ))}
          <Route element={<PrivateRoute />}>
            {privateRouts.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default AppRoutes
