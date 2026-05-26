import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
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
      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.bgVideo}>
          <source src="/media/cover-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />

        <div className={styles.heroText}>
          <div className={styles.headline}>
            {t.heroPrefix} <strong>{t.heroStrong}</strong>
            <br />{t.heroSuffix}
          </div>
          <div className={styles.subheadline}>{t.heroSub}</div>
          <Link
            to="/servicios#formulario"
            className="trabaja-button"
            onMouseEnter={() => setBtnText(t.heroBtnHover)}
            onMouseLeave={() => setBtnText(null)}
          >
            {heroBtn}
          </Link>
        </div>

        <div className={styles.scrollDown} onClick={scrollToServices}>
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </div>
      </div>

      {/* Services Grid */}
      <div id="servicios-section" className={styles.serviciosGrid}>
        <div className={styles.servicio}>
          <div className={styles.mainService}>
            <span className="material-symbols-outlined">how_to_reg</span>
          </div>
          <div className={styles.titleServices}>{t.s1Title}</div>
          <div className={styles.descriptionService}>
            <ul>
              <li>{t.s1i1}</li>
              <li>{t.s1i2}</li>
              <li>{t.s1i3}</li>
            </ul>
            <Link to="/servicios" className="cta-servicio">{t.learnMore}</Link>
          </div>
        </div>

        <div className={styles.servicio}>
          <div className={styles.mainService}>
            <span className="material-symbols-outlined">cast_for_education</span>
          </div>
          <div className={styles.titleServices}>{t.s2Title}</div>
          <div className={styles.descriptionService}>
            <ul>
              <li>{t.s2i1}</li>
              <li>{t.s2i2}</li>
              <li>{t.s2i3}</li>
            </ul>
            <Link to="/servicios" className="cta-servicio">{t.learnMore}</Link>
          </div>
        </div>

        <div className={styles.servicio}>
          <div className={styles.mainService}>
            <span className="material-symbols-outlined">shield_with_heart</span>
          </div>
          <div className={styles.titleServices}>{t.s3Title}</div>
          <div className={styles.descriptionService}>
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
      <div className={styles.nosotrasContainer}>
        <div className={styles.nosotrasBlock}>
          <div className={styles.imagenNosotras}>
            <img src="/media/pexels-cottonbro-6532337.jpg" alt="nosotras" className={styles.nosotrasImg} />
          </div>
          <div className={styles.nosotrasText}>
            <div className={styles.tituloNosotras}>{t.aboutTitle}</div>
            <div className={styles.sobreNosotras}>
              <p>
                {t.aboutPrep}{' '}
                <span className="marea-text">Marea People Partners</span>{' '}
                {t.aboutText1}
              </p>
              <h4>{t.aboutPillarsTitle}</h4>
              <ul className={styles.pilaresNosotras}>
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
      <div className={styles.mexicoContainer}>
        <div className={styles.tituloMexico}>
          <div className={styles.jalisco}>{t.mexicoTitle}</div>
          <div className={styles.contentTitulo}>{t.mexicoSub}</div>
        </div>
        <div className={styles.mexicoBlock}>
          <div className={styles.mexicoText}>
            <div className={styles.datosJalisco}>
              <div className={styles.dato}>
                <span className="material-symbols-outlined">enterprise</span> {t.d1Title}
              </div>
              <strong className="mochabold">{t.d1Strong}</strong> {t.d1Text}
              <br />
              <span className="material-symbols-outlined mochabold">thumb_up</span>{' '}
              {t.d1Benefit}

              <div className={styles.dato}>
                <span className="material-symbols-outlined">assured_workload</span> {t.d2Title}
              </div>
              {t.d2Prefix}{' '}
              <strong className="mochabold">{t.d2Strong}</strong>
              <br />
              <span className="material-symbols-outlined mochabold">thumb_up</span>{' '}
              {t.d2Benefit}

              <div className={styles.dato}>
                <span className="material-symbols-outlined">finance_mode</span> {t.d3Title}
              </div>
              {t.d3Intro}
              <ul>
                {t.d3List.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <span className="material-symbols-outlined mochabold">thumb_up</span>{' '}
              {t.d3Benefit}

              <div className={styles.dato}>
                <span className="material-symbols-outlined">location_on</span> {t.d4Title}
              </div>
              {t.d4Text}{' '}
              <strong className="mochabold">{t.d4Strong}</strong>.
              <br />
              <span className="material-symbols-outlined mochabold">thumb_up</span>{' '}
              {t.d4Benefit}
            </div>
            <br /><br />
            {t.mexicoPrep}{' '}
            <span className="marea-text">Marea</span>{' '}
            {t.mexicoClose1}
            <br />
            <span className="material-symbols-outlined mochabold">thumb_up</span>{' '}
            <span className="mochabold"><strong>{t.mexicoClose2}</strong></span>
          </div>
          <div>
            <img src="/media/Jalisco.jpg" alt="Jalisco" className={styles.jaliscoBig} />
          </div>
        </div>
      </div>

      {/* Strategic Advantage */}
      <div className={styles.diferenciaContainer}>
        <div className={styles.tituloDiferencia}>{t.ventajaTitle}</div>
        <div className={styles.diferenciaGrid}>
          <div className={`${styles.bloqueDiferencia} azul`}>
            <div className={styles.diferencia}>{t.b1Title}</div>
            <div className={styles.diferenciaContenido}>
              <ul>{t.b1Items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span> {t.b1Close}
            </div>
          </div>

          <div className={`${styles.bloqueDiferencia} mocha`}>
            <div className={styles.diferencia}>{t.b2Title}</div>
            <div className={styles.diferenciaContenido}>
              <ul>{t.b2Items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span> {t.b2Close}
            </div>
          </div>

          <div className={`${styles.bloqueDiferencia} negro`}>
            <div className={styles.diferencia}>{t.b3Title}</div>
            <div className={styles.diferenciaContenido}>
              <ul>{t.b3Items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="material-symbols-outlined">diamond</span> {t.b3Close}
            </div>
          </div>
        </div>

        <div className={styles.cierreDiferencia}>
          {t.cierre1}<br />{t.cierre2}
        </div>
        <Link to="/servicios#formulario" className="reserva-button2">{t.diagBtn}</Link>
      </div>

      <Footer />
    </>
  )
}
