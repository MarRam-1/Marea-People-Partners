import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Nosotras() {
  const { language } = useLanguage()
  const t = translations[language].nosotras

  useEffect(() => {
    document.body.setAttribute('data-theme', 'nosotras')
    return () => document.body.removeAttribute('data-theme')
  }, [])

  const scrollToGrid = () => {
    document.getElementById('nosotras-grid').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page-nosotras">
      <div className="espacio" />

      <div className="hero-nosotras">
        <div className="titulo-nosotras-pagina">{t.heroTitle}</div>
        <div className="contenido-estrategia">
          {t.heroPrep} <span className="marea-text">Marea People Partners</span> {t.heroText1}
          <br /><br />
          {t.heroText2}
        </div>
      </div>

      <div className="scroll-down" onClick={scrollToGrid}>
        <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
      </div>

      <div id="nosotras-grid" className="nosotras-grid">
        <div className="bloque-nosotras negro">
          <div className="titulo-bloque">{t.b1Title}</div>
          <div className="contenido-bloque">
            {t.b1Intro}
            <ul>{t.b1Items.map((item) => <li key={item}>{item}</li>)}</ul>
            {t.b1Close}
          </div>
        </div>
        <div className="bloque-nosotras azul">
          <div className="titulo-bloque">{t.b2Title}</div>
          <div className="contenido-bloque">
            {t.b2Intro}
            <ul>{t.b2Items.map((item) => <li key={item}>{item}</li>)}</ul>
            {t.b2Close1}<br />{t.b2Close2}
          </div>
        </div>
        <div className="bloque-nosotras mocha">
          <div className="titulo-bloque">{t.b3Title}</div>
          <div className="contenido-bloque">
            {t.b3t1}<br /><br />
            {t.b3t2}<br /><br />
            {t.b3t3}<br />{t.b3t4}
          </div>
        </div>
      </div>

      <div className="detras-de-contenedor">
        <div className="titulo-detrasde">{t.detrasTitle}</div>
        <div className="grid-detrasde">
          <div className="bloque-detras">
            <span className="marea-text blackbold">Daniela Salinas</span>{' '}
            {language === 'es' ? 'y' : 'and'}{' '}
            <span className="marea-text blackbold">Mariana Ramírez</span>
            {t.detrasConnector}
            <br /><br />
            {t.d2Pre} <span className="marea-text blackbold">{t.d2Highlight}</span>{t.d2Post}
            <br /><br />
            {t.d3Pre} <span className="marea-text blackbold">{t.d3Highlight}</span>{t.d3Post}
            <br /><br />
            {t.d4Pre} <span className="marea-text blackbold">Marea People Partners</span> {t.d4Post}
          </div>
          <div className="bloque-detras center">
            <img src="/media/Founders.png" alt="Fundadoras" className="founders" />
          </div>
        </div>
      </div>

      <div className="empresa-contenedor">
        <div className="titulo-empresa">{t.empresaTitle}</div>
        <div className="contenido-empresa">
          <span className="marea-text">Marea People Partners</span> {t.empresaText}
        </div>
        <div className="valores-grid">
          <div className="valor azul">
            <div className="titulo-valor">{t.v1Title}</div>
            <div className="desc-valor">{t.v1Desc}</div>
          </div>
          <div className="valor negro">
            <div className="titulo-valor">{t.v2Title}</div>
            <div className="desc-valor">{t.v2Desc}</div>
          </div>
          <div className="valor mocha">
            <div className="titulo-valor">{t.v3Title}</div>
            <div className="desc-valor">{t.v3Desc}</div>
          </div>
          <div className="valor azul">
            <div className="titulo-valor">{t.v4Title}</div>
            <div className="desc-valor">{t.v4Desc}</div>
          </div>
          <div className="valor negro">
            <div className="titulo-valor">{t.v5Title}</div>
            <div className="desc-valor">{t.v5Desc}</div>
          </div>
        </div>
        <div className="cta-empresa">
          <Link to="/servicios#formulario" className="reserva-button">{t.ctaBtn}</Link>
        </div>
      </div>
    </div>
  )
}
