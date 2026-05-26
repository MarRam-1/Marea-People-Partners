import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Home() {
  const [btnText, setBtnText] = useState(null)
  const { language } = useLanguage()
  const t = translations[language].home
  const heroBtn = btnText ?? t.heroBtn

  const scrollToServices = () => {
    document.getElementById('servicios-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <video autoPlay muted loop className="bg-video">
          <source src="/media/cover-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay" />

        <div className="hero-text">
          <div className="headline">
            {t.heroPrefix} <strong>{t.heroStrong}</strong><br />{t.heroSuffix}
          </div>
          <div className="subheadline">{t.heroSub}</div>
          <Link
            to="/servicios#formulario"
            className="trabaja-button"
            onMouseEnter={() => setBtnText(t.heroBtnHover)}
            onMouseLeave={() => setBtnText(null)}
          >
            {heroBtn}
          </Link>
        </div>

        <div className="scroll-down" onClick={scrollToServices}>
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </div>
      </div>

      {/* Services Grid */}
      <div id="servicios-section" className="servicios-grid">
        <div className="servicio">
          <div className="main-service">
            <span className="material-symbols-outlined">how_to_reg</span>
          </div>
          <div className="title-services">{t.s1Title}</div>
          <div className="description-service">
            <ul>
              <li>{t.s1i1}</li>
              <li>{t.s1i2}</li>
              <li>{t.s1i3}</li>
            </ul>
            <Link to="/servicios" className="cta-servicio">{t.learnMore}</Link>
          </div>
        </div>

        <div className="servicio">
          <div className="main-service">
            <span className="material-symbols-outlined">cast_for_education</span>
          </div>
          <div className="title-services">{t.s2Title}</div>
          <div className="description-service">
            <ul>
              <li>{t.s2i1}</li>
              <li>{t.s2i2}</li>
              <li>{t.s2i3}</li>
            </ul>
            <Link to="/servicios" className="cta-servicio">{t.learnMore}</Link>
          </div>
        </div>

        <div className="servicio">
          <div className="main-service">
            <span className="material-symbols-outlined">shield_with_heart</span>
          </div>
          <div className="title-services">{t.s3Title}</div>
          <div className="description-service">
            <ul>
              <li>{t.s3i1}</li>
              <li>{t.s3i2}</li>
              <li>{t.s3i3}</li>
            </ul>
            <Link to="/servicios" className="cta-servicio">{t.learnMore}</Link>
          </div>
        </div>
      </div>

      {/* About Marea */}
      <div className="nosotras-container">
        <div className="nosotras-block">
          <div className="imagen-nosotras">
            <img src="/media/pexels-cottonbro-6532337.jpg" alt="nosotras" className="nosotras-img" />
          </div>
          <div className="nosotras-text">
            <div className="titulo-nosotras">{t.aboutTitle}</div>
            <div className="sobre-nosotras">
              <p>
                {t.aboutPrep} <span className="marea-text">Marea People Partners</span> {t.aboutText1}
              </p>
              <h4>{t.aboutPillarsTitle}</h4>
              <ul className="pilares-nosotras">
                <li><strong>{t.pillar1Strong}</strong> {t.pillar1}</li>
                <li><strong>{t.pillar2Strong}</strong> {t.pillar2}</li>
                <li><strong>{t.pillar3Strong}</strong> {t.pillar3}</li>
              </ul>
              <p>{t.aboutText2}</p>
              <Link to="/servicios#formulario" className="reserva-button">{t.aboutBtn}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mexico Section */}
      <div className="mexico-container">
        <div className="titulo-mexico">
          <div>{t.mexicoTitle}</div>
          <div className="content-titulo">{t.mexicoSub}</div>
        </div>
        <div className="mexico-block">
          <div className="mexico-text">
            <div className="datos-jalisco">
              <div className="dato">
                <span className="material-symbols-outlined">enterprise</span> {t.d1Title}
              </div>
              <strong className="mochabold">{t.d1Strong}</strong> {t.d1Text}
              <br />
              <span className="material-symbols-outlined mochabold">thumb_up</span> {t.d1Benefit}

              <div className="dato">
                <span className="material-symbols-outlined">assured_workload</span> {t.d2Title}
              </div>
              {t.d2Prefix} <strong className="mochabold">{t.d2Strong}</strong>
              <br />
              <span className="material-symbols-outlined mochabold">thumb_up</span> {t.d2Benefit}

              <div className="dato">
                <span className="material-symbols-outlined">finance_mode</span> {t.d3Title}
              </div>
              {t.d3Intro}
              <ul>{t.d3List.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined mochabold">thumb_up</span> {t.d3Benefit}

              <div className="dato">
                <span className="material-symbols-outlined">location_on</span> {t.d4Title}
              </div>
              {t.d4Text} <strong className="mochabold">{t.d4Strong}</strong>.
              <br />
              <span className="material-symbols-outlined mochabold">thumb_up</span> {t.d4Benefit}
            </div>
            <br /><br />
            {t.mexicoPrep} <span className="marea-text">Marea</span> {t.mexicoClose1}
            <br />
            <span className="material-symbols-outlined mochabold">thumb_up</span>{' '}
            <span className="mochabold"><strong>{t.mexicoClose2}</strong></span>
          </div>
          <div>
            <img src="/media/Jalisco.jpg" alt="Jalisco" className="jalisco-big" />
          </div>
        </div>
      </div>

      {/* Strategic Advantage */}
      <div className="diferencia-container">
        <div className="titulo-diferencia">{t.ventajaTitle}</div>
        <div className="diferencia-grid">
          <div className="bloque-diferencia azul">
            <div className="diferencia">{t.b1Title}</div>
            <div className="diferencia-contenido">
              <ul>{t.b1Items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span> {t.b1Close}
            </div>
          </div>
          <div className="bloque-diferencia mocha">
            <div className="diferencia">{t.b2Title}</div>
            <div className="diferencia-contenido">
              <ul>{t.b2Items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span> {t.b2Close}
            </div>
          </div>
          <div className="bloque-diferencia negro">
            <div className="diferencia">{t.b3Title}</div>
            <div className="diferencia-contenido">
              <ul>{t.b3Items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span> {t.b3Close}
            </div>
          </div>
        </div>
        <div className="cierre-diferencia">
          {t.cierre1}<br />{t.cierre2}
        </div>
        <Link to="/servicios#formulario" className="reserva-button2">{t.diagBtn}</Link>
      </div>

      <Footer />
    </>
  )
}
