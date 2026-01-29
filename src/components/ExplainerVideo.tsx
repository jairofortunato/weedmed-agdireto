import { motion } from 'framer-motion'

function ExplainerVideo() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-left text-gray-800 font-bold"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Acha que não é pra você?
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Vertical Video Frame */}
        <div className="flex justify-center">
          <motion.div 
            className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Gi30UJGumuI"
              title="Cannabis Medicinal"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

            {/* Video Label */}
            <div className="absolute bottom-10 left-6 right-6 pointer-events-none">
              <p
                className="text-white text-lg font-semibold leading-snug"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                A cannabis medicinal alivia dores, reduzindo ansiedade e melhorando o sono de forma natural e segura.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExplainerVideo

