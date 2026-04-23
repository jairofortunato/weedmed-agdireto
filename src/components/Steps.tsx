import { motion } from 'framer-motion'
import { buildUrlWithUTMs } from '../utils/utm-tracker'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.15 },
  }),
}

const IconDoc = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)

const IconStethoscope = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/>
    <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
)

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

export default function Steps() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
          >
            Como funciona?
          </h2>
          <p
            className="text-base md:text-lg text-gray-500"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Simples. Do jeito que a saúde deveria ser.
          </p>
        </motion.div>

        {/* 3 caminhos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">

          {/* Card 1 — Já tenho receita */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 md:p-8"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: '#EDE9F8', color: '#2D1B69' }}
            >
              <IconDoc />
            </div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
            >
              Já tenho receita
            </h3>
            <p
              className="text-sm text-gray-500 leading-relaxed mb-6 flex-1"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Envie sua receita e nosso sistema identifica o produto certo. <strong className="text-gray-700 font-semibold">Direto para o checkout, sem burocracia.</strong>
            </p>
            <a
              href={buildUrlWithUTMs("https://weedmed.online/cadastro?redirect=/paciente/upload-receita")}
              className="inline-flex items-center gap-1 text-sm font-semibold hover:opacity-75 transition-opacity"
              style={{ color: '#2D1B69', fontFamily: "'Inter', system-ui, sans-serif" }}
              data-cta="steps_receita"
            >
              Enviar minha receita →
            </a>
          </motion.div>

          {/* Card 2 — Quero consulta (DESTAQUE) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col rounded-2xl p-7 md:p-8 relative"
            style={{ backgroundColor: '#2D1B69' }}
          >
            {/* Badge */}
            <div className="absolute -top-3.5 left-7">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Mais escolhido
              </span>
            </div>

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
            >
              <IconStethoscope />
            </div>
            <h3
              className="text-lg font-semibold text-white mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}
            >
              Quero começar meu tratamento
            </h3>
            <p
              className="text-sm text-white/75 leading-relaxed mb-2 flex-1"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Preencha um <strong className="text-white font-semibold">questionário médico</strong> no seu ritmo. Um <strong className="text-white font-semibold">especialista em canabinologia</strong> avalia, prescreve e você recebe o link de compra direto no celular.
            </p>
            {/* Nota vídeo */}
            <p
              className="text-xs text-white/45 leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Prefere ao vivo?{' '}
              <a
                href={buildUrlWithUTMs("https://weedmed.online/paciente/agendar")}
                className="underline hover:text-white/70 transition-colors"
              >
                Consulta por vídeo a partir de R$100
              </a>
              .
            </p>
            <a
              href={buildUrlWithUTMs("https://weedmed.online/avaliacao")}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
              data-cta="steps_consulta"
            >
              Começar por R$50 →
            </a>
          </motion.div>

          {/* Card 3 — Tirar dúvidas */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 md:p-8"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: '#E0F7F1', color: '#00B383' }}
            >
              <IconChat />
            </div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
            >
              Tirar dúvidas com consultor
            </h3>
            <p
              className="text-sm text-gray-500 leading-relaxed mb-6 flex-1"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Fale <strong className="text-gray-700 font-semibold">gratuitamente</strong> com um consultor especialista pelo WhatsApp. Em minutos ele entende sua situação e te orienta sobre o melhor caminho.
            </p>
            <button
              className="open-chat inline-flex items-center gap-1 text-sm font-semibold hover:opacity-75 transition-opacity text-left"
              style={{ color: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
              data-cta="steps_whatsapp"
            >
              Falar com consultor →
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
