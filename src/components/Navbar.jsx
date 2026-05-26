import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Navbar({ variant = 'default' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav
  const isDark = variant === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [])

  const isActive = (path) => location.pathname === path

  const topBarClass = ['top-bar', scrolled && 'scrolled', scrolled && isDark && 'scrolled-dark']
    .filter(Boolean).join(' ')

  return (
    <>
      <div className={`contact-bar${isDark ? ' contact-bar--dark' : ''}`}>
        <span className="contact-email">contacto@mareapeoplepartners.com</span>
        <button className={`lang-toggle${isDark ? ' lang-toggle--dark' : ''}`} onClick={toggleLanguage}>
          {language === 'es' ? 'ES' : 'EN'}
        </button>
        <button
          className={`menu-btn${isDark ? ' menu-btn--dark' : ''}`}
          onClick={(e) => { e.stopPropagation(); setMenuOpen((prev) => !prev) }}
        >
          ☰
        </button>
      </div>

      <header className={topBarClass}>
        <div className="hero-logo">
          <Link to="/">
            <img src="/media/M.png" alt="MareaLogo" className={scrolled ? 'logo-scrolled' : 'logo'} />
          </Link>
        </div>
        <nav
          ref={menuRef}
          className={`menu-container${menuOpen ? ' open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div />
          <div className={`menu-card${isActive('/') ? ' active' : ''}`}>
            <Link to="/">{t.inicio}</Link>
          </div>
          <div className={`menu-card${isActive('/nosotras') ? ' active' : ''}`}>
            <Link to="/nosotras">{t.nosotras}</Link>
          </div>
          <div className={`menu-card${isActive('/servicios') ? ' active' : ''}`}>
            <Link to="/servicios">{t.servicios}</Link>
          </div>
          <div />
          <div className="menu-card">{t.login}</div>
        </nav>
      </header>
    </>
  )
}
