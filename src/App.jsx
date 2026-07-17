import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Wave from './components/Wave'
import Home from './pages/Home'
import Nosotras from './pages/Nosotras'
import Servicios from './pages/Servicios'
import { LanguageProvider } from './context/LanguageContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  const location = useLocation()
  const isServicios = location.pathname === '/servicios'

  return (
    <>
      <ScrollToTop />
      <Navbar variant={isServicios ? 'dark' : 'default'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotras" element={<Nosotras />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      <Wave fill="#1f2d53" />
      <Footer />
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
