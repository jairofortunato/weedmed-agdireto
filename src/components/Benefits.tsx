import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'

const benefits = [
  {
    id: 1,
    title: 'Melhora do Humor',
    description: 'Canabinoides ajudam a regular neurotransmissores, promovendo equilíbrio emocional e bem-estar.',
    image: '/mood-enhancement.webp',
  },
  {
    id: 2,
    title: 'Redução da Inflamação',
    description: 'Propriedades anti-inflamatórias naturais que auxiliam no tratamento de condições crônicas.',
    image: '/inflammation-reduction.webp',
  },
  {
    id: 3,
    title: 'Alívio da Ansiedade',
    description: 'Efeito calmante que reduz sintomas de ansiedade sem os efeitos colaterais de medicamentos tradicionais.',
    image: '/anxiety-relief.webp',
  },
  {
    id: 4,
    title: 'Controle da Dor',
    description: 'Alívio eficaz para dores crônicas e agudas, melhorando a qualidade de vida dos pacientes.',
    image: '/pain-management.webp',
  },
  {
    id: 5,
    title: 'Melhora do Sono',
    description: 'Promove um sono mais profundo e reparador, combatendo a insônia de forma natural.',
    image: '/sleep-improvement.webp',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

function Benefits() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    // Toggle active state on mobile
    setActiveCard(activeCard === id ? null : id)
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-left mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Viva com mais qualidade de vida
          </h2>
          <div className="w-24 h-1 mt-3" style={{ backgroundColor: '#65DFA8' }} />
        </motion.div>
      </div>

      {/* Cards Container - Centered Single Row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="flex gap-4 overflow-x-auto py-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit) => {
            const isActive = activeCard === benefit.id
            return (
              <motion.div
                key={benefit.id}
                className="flex-shrink-0 flex-1 min-w-[200px] max-w-[280px] h-[420px] rounded-2xl overflow-hidden cursor-pointer group relative"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(benefit.id)}
              >
              {/* Image */}
              <img
                src={benefit.image}
                alt={benefit.title}
                className={`w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
                loading="lazy"
              />

              {/* Gradient Overlay - darker on hover/active */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300 md:group-hover:from-black/90 md:group-hover:via-black/60 ${isActive ? 'from-black/90 via-black/60' : ''}`} />

              {/* Title - default position at bottom left */}
              <h3 className={`absolute bottom-4 left-4 right-4 text-white text-lg font-semibold leading-tight text-left transition-all duration-300 md:group-hover:opacity-0 ${isActive ? 'opacity-0' : ''}`}>
                {benefit.title}
              </h3>

              {/* Expanded Content - title on top, then description, then button */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
                <h3 className="text-white text-lg font-semibold leading-tight text-left mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/90 text-sm text-left leading-relaxed mb-3">
                  {benefit.description}
                </p>
                <a
                  href="https://weedmedcare.lovable.app/comecar"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-sm font-semibold text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
                    boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)',
                  }}
                >
                  Começar agora
                </a>
              </div>
            </motion.div>
          )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
