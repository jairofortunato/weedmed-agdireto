import { motion } from 'framer-motion'

function Hero() {

  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #6d28d9 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Right Image - Behind text on small/medium, beside on large */}
        {/* No opacity animation to improve LCP */}
        <motion.div
          className="absolute -right-20 md:-right-10 lg:right-8 -bottom-12 md:-bottom-16 lg:-bottom-10 pointer-events-none"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/woman2.webp"
            alt="Paciente satisfeita"
            className="h-[350px] md:h-[450px] lg:h-[620px] w-auto object-contain object-bottom"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        {/* Left Content */}
        <div className="relative z-10 py-16 md:py-20 lg:py-28 lg:max-w-[60%]">
          {/* Google Reviews Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="/googleavaliacoes.png"
              alt="Google 5 estrelas"
              className="h-5 w-auto"
              loading="eager"
            />
            <span className="text-white text-sm font-medium">
              + 3.000 pacientes atendidos
            </span>
          </motion.div>

          {/* Title - No opacity animation for better LCP */}
          <h1
            className="text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold max-w-[85%] sm:max-w-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {/* Mobile version */}
            <span className="block md:hidden">Não viva com dor,</span>
            <span className="block md:hidden">ansiedade ou insônia</span>
            {/* Desktop version */}
            <span className="hidden md:block md:whitespace-nowrap">Não viva com insônia,</span>
            <span className="hidden md:block md:whitespace-nowrap">dor ou ansiedade</span>
          </h1>

          {/* Subtitle - No opacity animation for better LCP */}
          <p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-[60%] md:max-w-[55%] lg:max-w-xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Cannabis medicinal com avaliação médica e suporte humano em todas as etapas
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://weedmedcare.lovable.app/comecar"
            className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)';
            }}
          >
            Começar agora
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Hero
