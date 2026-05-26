import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Nosotras from './pages/Nosotras'
import Servicios from './pages/Servicios'
import { LanguageProvider } from './context/LanguageContext'

function Layout() {
  const location = useLocation()
  const isServicios = location.pathname === '/servicios'

  return (
    <>
      <Navbar variant={isServicios ? 'dark' : 'default'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotras" element={<Nosotras />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  )
}
