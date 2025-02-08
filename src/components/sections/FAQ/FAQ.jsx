import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: '¿Cuánto tiempo toma desarrollar un sitio web?',
    answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos más complejos pueden tomar 2-3 meses.'
  },
  {
    question: '¿Qué tecnologías utilizan?',
    answer: 'Utilizamos las últimas tecnologías web como React, Next.js, Tailwind CSS y otras herramientas modernas para garantizar el mejor rendimiento y experiencia de usuario.'
  },
  {
    question: '¿Ofrecen mantenimiento post-lanzamiento?',
    answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, respaldos, monitoreo de seguridad y soporte técnico.'
  },
  {
    question: '¿Incluyen optimización SEO?',
    answer: 'Sí, todos nuestros sitios web se desarrollan siguiendo las mejores prácticas de SEO. También ofrecemos servicios de SEO avanzado como complemento.'
  },
  {
    question: '¿Puedo actualizar mi sitio web por mi cuenta?',
    answer: 'Sí, implementamos un panel de administración intuitivo que te permite actualizar contenido, agregar productos o publicar blogs fácilmente.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section-padding bg-neutral-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios de desarrollo web
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <span className="font-medium text-left">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-primary ml-4"
                >
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-b-lg">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 