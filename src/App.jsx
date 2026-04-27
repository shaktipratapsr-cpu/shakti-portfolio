import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import TechDetailPage from './pages/TechDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
      <Route path="/stack/:slug" element={<TechDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
