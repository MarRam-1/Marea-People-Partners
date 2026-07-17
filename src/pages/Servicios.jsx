import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'
import Wave from '../components/Wave'
import ContactForm from '../components/ContactForm'
import useReveal from '../hooks/useReveal'

export default function Servicios() {
  const [btnText, setBtnText] = useState(null)
  const { language } = useLanguage()
  const t = translations[language].servicios
  const location = useLocation()
  const heroBtn = btnText ?? t.heroBtn
  const reveal = useReveal([language])

  useEffect(() => {
    document.body.setAttribute('data-theme', 'servicios')
    return () => document.body.removeAttribute('data-theme')
  }, [])

  useEffect(() => {
    if (location.hash === '#formulario') {
      const el = document.getElementById('formulario')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location.hash])

  const scrollToProblema = () => {
    document.getElementById('problema-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page-servicios" ref={reveal}>
      <div className="servicios-hero">
        <div className="headline">{t.headline}</div>
        <div className="subheadline">{t.subheadline}</div>

        <Link
          to="/servicios#formulario"
          className="trabaja-button-svc"
          onMouseEnter={() => setBtnText(t.heroBtnHover)}
          onMouseLeave={() => setBtnText(null)}
        >
          {heroBtn}
        </Link>

        <div className="scroll-down" onClick={scrollToProblema}>
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </div>
      </div>
      <Wave fill="#f6f1ec" flip />

      <div className="contenedor-general">
        <div id="problema-section" className="problema-contenedor reveal">
          <div className="bloque-problema">
            <div className="texto-problema">
              {t.probIntro}
              <ul>{t.probItems.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span>
              <strong> {t.probClose}</strong>
            </div>
          </div>
          <div className="bloque-problema">
            <img src="/media/problema.jpg" alt="Equipo trabajando en la estructuración de operación en México" className="problema-img" />
          </div>
        </div>

        <div className="fases-contenedor">
          <div className="titulo-general-fase reveal">
            <span className="marea-text">Marea People Partners</span> {t.fasesPrep}
          </div>
          <div className="fase-grid">
            <div className="fase reveal">
              <div className="titulo-fase">{t.f1Title}</div>
              <div className="contenedor-fase">
                <ul>
                  {t.f1Items.map((item) => (
                    <li key={item}><span className="material-symbols-outlined">done_all</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="fase reveal">
              <div className="titulo-fase">{t.f2Title}</div>
              <div className="contenedor-fase">
                <ul>
                  {t.f2Items.map((item) => (
                    <li key={item}><span className="material-symbols-outlined">done_all</span> {item}</li>
                  ))}
                </ul>
                {t.f2Close}
              </div>
            </div>

            <div className="fase reveal">
              <div className="titulo-fase">{t.f3Title}</div>
              <div className="contenedor-fase">
                <ul>
                  {t.f3Items.map((item) => (
                    <li key={item}><span className="material-symbols-outlined">done_all</span> {item}</li>
                  ))}
                </ul>
                {t.f3Close}
              </div>
            </div>

            <div className="fase reveal">
              <div className="titulo-fase">{t.f4Title}</div>
              <div className="contenedor-fase">
                <ul>
                  {t.f4Items.map((item) => (
                    <li key={item}><span className="material-symbols-outlined">done_all</span> {item}</li>
                  ))}
                </ul>
                {t.f4Close}
              </div>
            </div>
          </div>

          <Link to="/servicios#formulario" className="btn-primary btn-primary--centered">{t.ctaBtn}</Link>

          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
