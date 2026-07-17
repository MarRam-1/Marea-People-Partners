import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdK3cxFsCLSfh1wtigkpV7DbL5HFIPk5jOJrrzMe3fGHIxMCQ/formResponse'
const EMAIL_ENTRY = 'entry.1556702202'
const MENSAJE_ENTRY = 'entry.1321786547'

export default function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language].servicios
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const body = new FormData()
    body.append(EMAIL_ENTRY, email)
    body.append(MENSAJE_ENTRY, mensaje)

    try {
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      setStatus('success')
      setEmail('')
      setMensaje('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form id="formulario" className="contact-form" onSubmit={handleSubmit}>
      <h3 className="contact-form-title">{t.formTitle}</h3>

      <label className="contact-form-label" htmlFor="contact-email">
        {t.formEmailLabel}
      </label>
      <input
        id="contact-email"
        className="contact-form-input"
        type="email"
        required
        placeholder={t.formEmailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'sending'}
      />

      <label className="contact-form-label" htmlFor="contact-mensaje">
        {t.formMensajeLabel}
      </label>
      <textarea
        id="contact-mensaje"
        className="contact-form-textarea"
        required
        rows={5}
        placeholder={t.formMensajePlaceholder}
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        disabled={status === 'sending'}
      />

      <button className="btn-primary contact-form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t.formSending : t.formSubmit}
      </button>

      {status === 'success' && <p className="contact-form-message success">{t.formSuccess}</p>}
      {status === 'error' && <p className="contact-form-message error">{t.formError}</p>}
    </form>
  )
}
