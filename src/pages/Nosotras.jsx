import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nosotras.module.css'
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
    <>
      <div className={styles.espacio} />

      <div className={styles.heroNosotras}>
        <div className={styles.tituloNosotrasPage}>{t.heroTitle}</div>
        <div className={styles.contenidoEstrategia}>
          {t.heroPrep}{' '}
          <span className="marea-text">Marea People Partners</span>{' '}
          {t.heroText1}
          <br /><br />
          {t.heroText2}
        </div>
      </div>

      <div className={styles.scrollDown} onClick={scrollToGrid}>
        <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
      </div>

      <div id="nosotras-grid" className={styles.nosotrasGrid}>
        <div className={`${styles.bloqueNosotras} negro`}>
          <div className={styles.tituloBloque}>{t.b1Title}</div>
          <div className={styles.contenidoBloque}>
            {t.b1Intro}
            <ul>{t.b1Items.map((item) => <li key={item}>{item}</li>)}</ul>
            {t.b1Close}
          </div>
        </div>

        <div className={`${styles.bloqueNosotras} azul`}>
          <div className={styles.tituloBloque}>{t.b2Title}</div>
          <div className={styles.contenidoBloque}>
            {t.b2Intro}
            <ul>{t.b2Items.map((item) => <li key={item}>{item}</li>)}</ul>
            {t.b2Close1}<br />{t.b2Close2}
          </div>
        </div>

        <div className={`${styles.bloqueNosotras} mocha`}>
          <div className={styles.tituloBloque}>{t.b3Title}</div>
          <div className={styles.contenidoBloque}>
            {t.b3t1}<br /><br />
            {t.b3t2}<br /><br />
            {t.b3t3}<br />{t.b3t4}
          </div>
        </div>
      </div>

      <div className={styles.detrasDeContenedor}>
        <div className={styles.tituloDetrasde}>{t.detrasTitle}</div>
        <div className={styles.gridDetrasde}>
          <div className={styles.bloqueDetras}>
            <span className="marea-text blackbold">Daniela Salinas</span>{' '}
            {language === 'es' ? 'y' : 'and'}{' '}
            <span className="marea-text blackbold">Mariana Ramírez</span>
            {t.detrasConnector}
            <br /><br />
            {t.d2Pre}{' '}
            <span className="marea-text blackbold">{t.d2Highlight}</span>
            {t.d2Post}
            <br /><br />
            {t.d3Pre}{' '}
            <span className="marea-text blackbold">{t.d3Highlight}</span>
            {t.d3Post}
            <br /><br />
            {t.d4Pre}{' '}
            <span className="marea-text blackbold">Marea People Partners</span>{' '}
            {t.d4Post}
          </div>
          <div className={`${styles.bloqueDetras} ${styles.center}`}>
            <img src="/media/Founders.png" alt="Fundadoras" className={styles.founders} />
          </div>
        </div>
      </div>

      <div className={styles.empresaContenedor}>
        <div className={styles.tituloEmpresa}>{t.empresaTitle}</div>
        <div className={styles.contenidoEmpresa}>
          <span className="marea-text">Marea People Partners</span>{' '}
          {t.empresaText}
        </div>

        <div className={styles.valoresGrid}>
          <div className={`${styles.valor} azul`}>
            <div className={styles.tituloValor}>{t.v1Title}</div>
            <div className={styles.descValor}>{t.v1Desc}</div>
          </div>
          <div className={`${styles.valor} negro`}>
            <div className={styles.tituloValor}>{t.v2Title}</div>
            <div className={styles.descValor}>{t.v2Desc}</div>
          </div>
          <div className={`${styles.valor} mocha`}>
            <div className={styles.tituloValor}>{t.v3Title}</div>
            <div className={styles.descValor}>{t.v3Desc}</div>
          </div>
          <div className={`${styles.valor} azul`}>
            <div className={styles.tituloValor}>{t.v4Title}</div>
            <div className={styles.descValor}>{t.v4Desc}</div>
          </div>
          <div className={`${styles.valor} negro`}>
            <div className={styles.tituloValor}>{t.v5Title}</div>
            <div className={styles.descValor}>{t.v5Desc}</div>
          </div>
        </div>

        <div className={styles.ctaEmpresa}>
          <Link to="/servicios#formulario" className="reserva-button">{t.ctaBtn}</Link>
        </div>
      </div>
    </>
  )
}
