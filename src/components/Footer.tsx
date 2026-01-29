

export default function Footer() {
  return (
    <footer className="relative bg-[#523AC5] text-white overflow-hidden pt-16 pb-8">
      {/* Background Logo - Huge and low opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
         <img
            src="/logo-horizontal-branco_1@2x.webp"
            alt=""
            className="w-[80%] max-w-none opacity-[0.03] transform scale-100"
            loading="lazy"
         />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center mb-12">
          
          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-6">Siga-nos nas redes</h3>
            <div className="flex space-x-6">
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@weedmed/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/weedmed.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                 aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.073 2.695.273.273 2.695.073 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.073 4.947.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.073 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@weedmed.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                 aria-label="TikTok"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
           {/* Center Logo text or main nav could go here, but focusing on the trust badges as requested */}
            <div className="flex flex-col items-center justify-center">
                 {/* Maybe put the Weedmed logo here subtly if needed, but the big one is in background. 
                     For now, I'll spacing or perhaps a short description if needed.
                     Actually, I'll align the trust badges here or to the right. 
                     Let's put trust badges in the center or right.
                 */}
            </div>

          {/* Trust Badges */}
          <div className="flex flex-col items-center md:items-end space-y-4">
             <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <img
                    src="/reclame-aqui.webp"
                    alt="Reclame Aqui"
                    className="h-16 w-auto object-contain bg-white rounded p-1"
                    loading="lazy"
                />
                <img
                    src="/ssl-site-seguro.webp"
                    alt="Site Seguro SSL"
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                />
             </div>
             <p className="text-sm text-white/60">Compra 100% Segura</p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm text-white/50 space-y-4">
          <p className="max-w-4xl mx-auto leading-relaxed">
            A WMED SERVIÇOS LTDA, inscrita sob CNPJ 52.387.940/0001-89, atua de acordo com a legislação brasileira e com a norma da Anvisa RDC nº 660/2022. Nenhuma informação aqui deve ser interpretada como garantia de resultados e o uso dos medicamentos deve ser realizado somente mediante consulta médica.
          </p>

          {/* Mandatory Disclaimers */}
          <div className="max-w-3xl mx-auto space-y-2 text-xs text-white/40">
            <p>Este site não faz parte do Google, Facebook ou Meta Platforms Inc.</p>
            <p>Consulte sempre um médico antes de iniciar qualquer tratamento. Os resultados podem variar de pessoa para pessoa.</p>
          </div>

          <div className="flex justify-center gap-4">
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors underline">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="/termos-de-uso" className="hover:text-white transition-colors underline">
              Termos de Uso
            </a>
          </div>
          <p>Copyright © weedmed — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
