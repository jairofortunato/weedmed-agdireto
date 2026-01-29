import { useState, useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user already made a choice
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted')

    // Update Google Consent Mode
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    })

    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined')

    // Keep consent denied (already default)
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    })

    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-gray-700 text-sm md:text-base">
              Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego.
              Ao clicar em "Aceitar", você concorda com o uso de cookies conforme nossa{' '}
              <a href="/politica-de-privacidade" className="text-[#523AC5] underline hover:no-underline">
                Política de Privacidade
              </a>.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              className="px-5 py-2.5 text-sm font-medium text-white rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #523AC5 0%, #7c5ce7 100%)',
              }}
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
