import { motion } from 'framer-motion';
import { FiCoffee, FiLayout, FiCode, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    icon: <FiCoffee className="w-6 h-6" />,
    title: 'Consulta Inicial',
    description: 'Reunión para entender tus necesidades y objetivos del proyecto.',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    icon: <FiLayout className="w-6 h-6" />,
    title: 'Diseño y Planificación',
    description: 'Creamos wireframes y diseños visuales para tu aprobación.',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Desarrollo',
    description: 'Construimos tu sitio con las últimas tecnologías web.',
    color: 'from-pink-500/20 to-red-500/20'
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Lanzamiento',
    description: 'Pruebas finales y publicación de tu sitio web.',
    color: 'from-red-500/20 to-orange-500/20'
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Nuestro <span className="text-primary">Proceso</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un enfoque estructurado para crear tu presencia digital perfecta
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de conexión */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 to-primary hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-primary mb-4 mx-auto`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                </div>
                
                {/* Número del paso */}
                <div className="absolute -top-4 right-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 