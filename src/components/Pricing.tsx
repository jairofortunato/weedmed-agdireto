import { motion } from 'framer-motion'
import { buildUrlWithUTMs } from '../utils/utm-tracker'

export default function Pricing() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
          >
            Transparência total. Sem surpresas.
          </h2>
          <p
            className="text-gray-500 text-base md:text-lg"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Saiba exatamente o que você vai pagar antes de começar.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch mb-8">

          {/* Card principal — Consulta */}
          <motion.div
            className="flex-1 rounded-2xl border-2 p-8"
            style={{ borderColor: '#00B383', backgroundColor: '#ffffff' }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Consulta Médica Online
            </p>
            <div className="flex items-baseline gap-1 mb-4">
              <span
                className="text-5xl font-extrabold"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
              >
                R$50
              </span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {[
                'Questionário médico completo',
                'Avaliação por especialista em canabinologia',
                'Prescrição digital com validade legal',
                'Acompanhamento farmacêutico incluso',
                'Sem sair de casa · Sem marcar horário',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00B383' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={buildUrlWithUTMs("https://weedmed.online/avaliacao")}
              className="block text-center py-3.5 px-6 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
              data-cta="pricing_consulta"
            >
              Iniciar com R$50 →
            </a>
            {/* Nota vídeo */}
            <p
              className="text-xs text-center text-gray-400 mt-3"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Prefere falar ao vivo?{' '}
              <a
                href={buildUrlWithUTMs("https://weedmed.online/paciente/agendar")}
                className="underline hover:opacity-80 transition-opacity"
                style={{ color: '#9ca3af' }}
              >
                Consulta por vídeo a partir de R$100
              </a>
              .
            </p>
          </motion.div>

          {/* Card secundário — Tratamento */}
          <motion.div
            className="flex-1 rounded-2xl p-8"
            style={{ backgroundColor: '#EDE9F8' }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#2D1B69', fontFamily: "'Inter', system-ui, sans-serif", opacity: 0.7 }}
            >
              Tratamento Mensal
            </p>
            <div className="flex items-baseline gap-1 mb-4">
              <span
                className="text-2xl md:text-4xl font-extrabold whitespace-nowrap"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
              >
                R$100 – R$250
              </span>
              <span
                className="text-base text-gray-500 font-normal"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                /mês
              </span>
            </div>
            <p
              className="text-sm text-gray-500 mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Varia conforme condição e dosagem prescrita. Acompanhamento farmacêutico contínuo incluso em todos os planos.
            </p>
            <ul className="space-y-2.5">
              {[
                'Medicamentos importados com qualidade certificada',
                'Entrega discreta para todo o Brasil',
                'Rastreio do pedido em tempo real',
                'Suporte humano em cada etapa',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2D1B69' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
