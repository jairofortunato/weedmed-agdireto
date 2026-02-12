import { motion } from 'framer-motion'

export default function ThankYouContent() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section
        className="w-full py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #6d28d9 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10">
          {/* Animated Checkmark */}
          <motion.div
            className="mx-auto mb-8 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)', boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4)' }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <motion.svg
              className="w-12 h-12 md:w-14 md:h-14 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </motion.svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Agendamento Confirmado!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Parabéns por dar o primeiro passo rumo ao seu bem-estar. Nossa equipe já está preparando tudo para você.
          </motion.p>
        </div>
      </section>

      {/* Back to Home Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)' }}
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Precisa de ajuda?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa equipe de suporte está pronta para te ajudar em qualquer etapa do processo. Fale com a gente!
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-[#523AC5] hover:text-[#523AC5] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar ao início
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
