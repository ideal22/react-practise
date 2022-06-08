import './App.css'
import AppRoutes from './AppRoutes'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </div>
  )
}

export default App
