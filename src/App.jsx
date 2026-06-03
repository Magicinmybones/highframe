import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768
const DESKTOP_URL = '/desktop/index.html'
const MOBILE_URL = '/mobile/index.html'

function App() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = (e) => setIsMobile(e.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <iframe
      key={isMobile ? 'mobile' : 'desktop'}
      src={isMobile ? MOBILE_URL : DESKTOP_URL}
      title={isMobile ? 'Highframe Mobile' : 'Highframe Desktop'}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
      }}
    />
  )
}

export default App
