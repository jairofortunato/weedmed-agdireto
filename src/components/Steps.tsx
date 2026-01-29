import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Responda o questionário médico',
    description: 'Preencha suas informações de saúde de forma rápida e segura.',
    image: '/step1_form.webp',
  },
  {
    id: 2,
    title: 'Médico especialista receita o remédio',
    description: 'Nossos médicos analisam seu caso e prescrevem o tratamento ideal.',
    image: '/step2_doctor.webp',
  },
  {
    id: 3,
    title: 'Receba seu tratamento em casa',
    description: 'Entrega discreta e segura direto na sua residência.',
    image: '/step3_delivery.webp',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

function Steps() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Saúde em 3 Passos
          </h2>
          <div className="w-24 h-1 mt-3" style={{ backgroundColor: '#65DFA8' }} />
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center"
              variants={cardVariants}
            >
              {/* Image Placeholder with Number Icon */}
              <div className="relative w-full mb-10">
                <div className="w-full h-64 rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>

                {/* Step Number - positioned at bottom, half in/half out */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-7 flex items-center justify-center w-14 h-14 rounded-full text-white text-xl font-bold shadow-lg"
                  style={{ backgroundColor: '#523AC5' }}
                >
                  {step.id}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold text-gray-800 mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Steps
