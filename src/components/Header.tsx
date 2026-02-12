import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home with hash
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full">
      {/* Promotional Banner */}
      <div className="py-2 text-center" style={{ backgroundColor: '#65DFA8' }}>
        <a
          href="https://weedmedcare.lovable.app/"
          className="text-sm font-medium text-gray-900 underline hover:no-underline"
        >
          Inicie seu tratamento em menos de 1 semana com preço acessível →
        </a>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="/logologo.webp"
                alt="Weedmed"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-base font-medium text-gray-700 hover:text-[#523AC5] transition-colors"
              >
                Como funciona
              </button>
              <button
                onClick={() => scrollToSection('especialistas')}
                className="text-base font-medium text-gray-700 hover:text-[#523AC5] transition-colors"
              >
                Especialistas
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-base font-medium text-gray-700 hover:text-[#523AC5] transition-colors"
              >
                Depoimentos
              </button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center">
              <a
                href="https://weedmedcare.lovable.app/"
                className="hidden lg:inline-flex relative items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #523AC5 0%, #7c5ce7 100%)',
                  boxShadow: '0 10px 30px rgba(82, 58, 197, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #3d2a8f 0%, #523AC5 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #523AC5 0%, #7c5ce7 100%)';
                }}
              >
                Começar agora
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-6 py-6 space-y-4 flex flex-col">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-base font-medium text-gray-700 hover:text-[#523AC5] transition-colors text-left"
              >
                Como funciona
              </button>
              <button
                onClick={() => scrollToSection('especialistas')}
                className="text-base font-medium text-gray-700 hover:text-[#523AC5] transition-colors text-left"
              >
                Especialistas
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-base font-medium text-gray-700 hover:text-[#523AC5] transition-colors text-left"
              >
                Depoimentos
              </button>
              <a
                href="https://weedmedcare.lovable.app/"
                onClick={() => setIsMenuOpen(false)}
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #523AC5 0%, #7c5ce7 100%)',
                  boxShadow: '0 10px 30px rgba(82, 58, 197, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #3d2a8f 0%, #523AC5 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #523AC5 0%, #7c5ce7 100%)';
                }}
              >
                Começar agora
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
