import { motion } from 'framer-motion'

const partners = [
  { name: 'CBDMD', logo: '/cbdmd.webp' },
  { name: 'Harbor Hemp', logo: '/harborhemp.webp' },
  { name: 'Canna River', logo: '/cannariver.webp' },
  { name: 'Alma Labs', logo: '/almalabs.webp' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-left mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Parceiros
          </h2>
          <div className="w-24 h-1 mt-3" style={{ backgroundColor: '#65DFA8' }} />
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center"
              variants={logoVariants}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 md:h-28 lg:h-32 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
