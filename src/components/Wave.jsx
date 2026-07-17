import { useEffect, useState } from 'react'

const STATIC_D = 'M0,70 C300,0 600,110 1200,30 L1200,120 L0,120 Z'

export default function Wave({ fill = '#f6f1ec', flip = false }) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <div className={`wave${flip ? ' wave--flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path fill={fill} d={STATIC_D}>
          {!reduceMotion && (
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values={`${STATIC_D};
                      M0,30 C300,110 600,0 1200,70 L1200,120 L0,120 Z;
                      ${STATIC_D}`}
            />
          )}
        </path>
      </svg>
    </div>
  )
}
