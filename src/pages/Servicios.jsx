import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Servicios.module.css'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Servicios() {
  const [btnText, setBtnText] = useState(null)
  const { language } = useLanguage()
  const t = translations[language].servicios
  const location = useLocation()

  const heroBtn = btnText ?? t.heroBtn

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
    <>
      <div className={styles.espacio} />

      <div className={styles.contenedorGeneral}>
        <div className={styles.headline}>{t.headline}</div>
        <div className={styles.subheadline}>{t.subheadline}</div>

        <Link
          to="/servicios#formulario"
          className={styles.trabajaButton}
          onMouseEnter={() => setBtnText(t.heroBtnHover)}
          onMouseLeave={() => setBtnText(null)}
        >
          {heroBtn}
        </Link>

        <div className={styles.scrollDown} onClick={scrollToProblema}>
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </div>

        <div id="problema-section" className={styles.problemaContenedor}>
          <div className={styles.bloqueProblema}>
            <div className={styles.textoProblema}>
              {t.probIntro}
              <ul>{t.probItems.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span>
              <strong> {t.probClose}</strong>
            </div>
          </div>
          <div className={styles.bloqueProblema}>
            <img src="/media/problema.jpg" alt="problema" className={styles.problemaImg} />
          </div>
        </div>

        <div className={styles.fasesContenedor}>
          <div className={styles.tituloGeneralFase}>
            <span className="marea-text">Marea People Partners</span> {t.fasesPrep}
          </div>
          <div className={styles.faseGrid}>
            <div className={styles.fase}>
              <div className={styles.tituloFase}>{t.f1Title}</div>
              <div className={styles.contenedorFase}>
                <ul>
                  {t.f1Items.map((item) => (
                    <li key={item}>
                      <span className="material-symbols-outlined">done_all</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.fase}>
              <div className={styles.tituloFase}>{t.f2Title}</div>
              <div className={styles.contenedorFase}>
                <ul>
                  {t.f2Items.map((item) => (
                    <li key={item}>
                      <span className="material-symbols-outlined">done_all</span> {item}
                    </li>
                  ))}
                </ul>
                {t.f2Close}
              </div>
            </div>

            <div className={styles.fase}>
              <div className={styles.tituloFase}>{t.f3Title}</div>
              <div className={styles.contenedorFase}>
                <ul>
                  {t.f3Items.map((item) => (
                    <li key={item}>
                      <span className="material-symbols-outlined">done_all</span> {item}
                    </li>
                  ))}
                </ul>
                {t.f3Close}
              </div>
            </div>

            <div className={styles.fase}>
              <div className={styles.tituloFase}>{t.f4Title}</div>
              <div className={styles.contenedorFase}>
                <ul>
                  {t.f4Items.map((item) => (
                    <li key={item}>
                      <span className="material-symbols-outlined">done_all</span> {item}
                    </li>
                  ))}
                </ul>
                {t.f4Close}
              </div>
            </div>
          </div>

          <Link to="/servicios#formulario" className={styles.reservaButton}>{t.ctaBtn}</Link>

          <div className={styles.contactoFormulario}>
            <iframe
              id="formulario"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdK3cxFsCLSfh1wtigkpV7DbL5HFIPk5jOJrrzMe3fGHIxMCQ/viewform?embedded=true"
              width="640"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulario de contacto"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}
