import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer
  const nav = translations[language].nav
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="site-footer">
      <button className="back-to-top" onClick={scrollToTop} aria-label={t.backToTop} title={t.backToTop}>
        <span className="material-symbols-outlined">keyboard_double_arrow_up</span>
      </button>

      <div className="footer-grid">
        <div className="footer-col footer-brand">
          <img src="/media/M.png" alt="Marea People Partners" className="footer-logo" />
          <p className="footer-tagline">{t.tagline}</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.navTitle}</h4>
          <nav className="footer-links">
            <Link to="/">{nav.inicio}</Link>
            <Link to="/nosotras">{nav.nosotras}</Link>
            <Link to="/servicios">{nav.servicios}</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.contactTitle}</h4>
          <div className="footer-contact">
            <a href="mailto:contacto@mareapeoplepartners.com">contacto@mareapeoplepartners.com</a>
            <a href="tel:+523334127868">{t.phone}</a>
            <span>{t.address}</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Marea People Partners — {t.rights} Coded by Mariana Ramírez
      </div>
    </footer>
  )
}
