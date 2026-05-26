import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Navbar({ variant = 'default' }) {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        setScrolled(window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [])

  const isActive = (path) => location.pathname === path

  const topBarClass = [
    styles.topBar,
    scrolled ? styles.scrolled : '',
    scrolled && variant === 'dark' ? styles.scrolledDark : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <div className={`${styles.contactBar} ${variant === 'dark' ? styles.contactBarDark : ''}`}>
        <span className={styles.contactEmail}>contacto@mareapeoplepartners.com</span>
        <button className={styles.langToggle} onClick={toggleLanguage}>
          {language === 'es' ? 'ES' : 'EN'}
        </button>
        <button
          className={`${styles.menuBtn} ${variant === 'dark' ? styles.menuBtnDark : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen((prev) => !prev)
          }}
        >
          ☰
        </button>
      </div>

      <header className={topBarClass}>
        <div className={styles.heroLogo}>
          <Link to="/">
            <img
              src="/media/M.png"
              alt="MareaLogo"
              className={scrolled ? styles.logoScrolled : styles.logo}
            />
          </Link>
        </div>

        <nav
          ref={menuRef}
          className={`${styles.menuContainer} ${menuOpen ? styles.open : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div />
          <div className={`${styles.menuCard} ${isActive('/') ? styles.active : ''}`}>
            <Link to="/">{t.inicio}</Link>
          </div>
          <div className={`${styles.menuCard} ${isActive('/nosotras') ? styles.active : ''}`}>
            <Link to="/nosotras">{t.nosotras}</Link>
          </div>
          <div className={`${styles.menuCard} ${isActive('/servicios') ? styles.active : ''}`}>
            <Link to="/servicios">{t.servicios}</Link>
          </div>
          <div />
          <div className={styles.menuCard}>{t.login}</div>
        </nav>
      </header>
    </>
  )
}
