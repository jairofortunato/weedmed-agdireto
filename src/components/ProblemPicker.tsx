import { motion, type Variants } from 'framer-motion'

const problems = [
  {
    label: 'Ansiedade',
    image: '/icon_anxiety.webp',
    bgColor: 'bg-sky-50',
    hoverBg: 'hover:bg-sky-100',
    borderColor: 'border-sky-200',
    hoverBorder: 'hover:border-sky-400',
    textColor: 'text-sky-700',
    hoverText: 'group-hover:text-sky-800',
  },
  {
    label: 'Dor Crônica',
    image: '/icon_pain.webp',
    bgColor: 'bg-red-50',
    hoverBg: 'hover:bg-red-100',
    borderColor: 'border-red-200',
    hoverBorder: 'hover:border-red-400',
    textColor: 'text-red-700',
    hoverText: 'group-hover:text-red-800',
  },
  {
    label: 'Fibromialgia',
    image: '/icon_fibro.webp',
    bgColor: 'bg-purple-50',
    hoverBg: 'hover:bg-purple-100',
    borderColor: 'border-purple-200',
    hoverBorder: 'hover:border-purple-400',
    textColor: 'text-purple-700',
    hoverText: 'group-hover:text-purple-800',
  },
  {
    label: 'Insônia',
    image: '/icon_sleep.webp',
    bgColor: 'bg-indigo-50',
    hoverBg: 'hover:bg-indigo-100',
    borderColor: 'border-indigo-200',
    hoverBorder: 'hover:border-indigo-400',
    textColor: 'text-indigo-700',
    hoverText: 'group-hover:text-indigo-800',
  },
  {
    label: 'Depressão',
    image: '/icon_depression.webp',
    bgColor: 'bg-teal-50',
    hoverBg: 'hover:bg-teal-100',
    borderColor: 'border-teal-200',
    hoverBorder: 'hover:border-teal-400',
    textColor: 'text-teal-700',
    hoverText: 'group-hover:text-teal-800',
  },
  {
    label: 'TDAH',
    image: '/icon_tdah.webp',
    bgColor: 'bg-amber-50',
    hoverBg: 'hover:bg-amber-100',
    borderColor: 'border-amber-200',
    hoverBorder: 'hover:border-amber-400',
    textColor: 'text-amber-700',
    hoverText: 'group-hover:text-amber-800',
  },
]

function ProblemPicker() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-left mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Qual problema você quer tratar?
          </h2>
          <div className="w-24 h-1 mt-3" style={{ backgroundColor: '#65DFA8' }} />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {problems.map((problem) => (
            <motion.button
              key={problem.label}
              className={`open-chat flex items-center gap-3 px-5 py-5 rounded-2xl border-2 transition-all duration-300 group shadow-sm hover:shadow-md ${problem.bgColor} ${problem.hoverBg} ${problem.borderColor} ${problem.hoverBorder}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Product Image */}
              <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={problem.image}
                  alt={problem.label}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Label */}
              <span
                className={`text-sm md:text-lg flex-grow text-left font-semibold transition-colors duration-300 ${problem.textColor} ${problem.hoverText}`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {problem.label}
              </span>

              {/* Arrow */}
              <svg
                className={`w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ${problem.textColor} ${problem.hoverText}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemPicker
