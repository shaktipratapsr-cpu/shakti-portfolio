import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TechDetailPage from './pages/TechDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stack/:slug" element={<TechDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
