import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Juan Pérez',
    company: 'Demo Shop',
    role: 'CEO & Fundador',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Excelente servicio y profesionalismo. Superaron nuestras expectativas.',
    rating: 5
  },
  {
    name: 'Ana López',
    company: 'Tech Demo',
    role: 'Directora de Marketing',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'Gran equipo de trabajo, muy comprometidos con el proyecto.',
    rating: 5
  },
  {
    name: 'Pedro Martínez',
    company: 'Demo Store',
    role: 'Gerente General',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'Resultados increíbles. Totalmente recomendados.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-neutral-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Historias de éxito de quienes confiaron en nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="relative mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {testimonial.company}
                  </div>
                </motion.div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 