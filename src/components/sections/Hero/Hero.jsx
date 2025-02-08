import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxBackground from '../../ui/ParallaxBackground';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../ui/Button';
import Button from '../../ui/Button';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative overflow-hidden min-h-[60vh]">
      <ParallaxBackground />

      <div className="container-custom relative z-10 pt-16 pb-6 md:pt-20 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Creamos Experiencias Web <span className="text-primary">Memorables</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Diseñamos y desarrollamos sitios web que convierten visitantes en clientes. 
              Destaca en el mundo digital con un diseño web profesional.
            </p>
            <div className="flex flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contacto"
                className="button-primary inline-flex items-center gap-2"
              >
                Comenzar Proyecto <FiArrowRight className="text-lg" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portafolio"
                className="button-secondary"
              >
                Ver Portafolio
              </motion.a>
            </div>
          </motion.div>

          {/* Imagen o animación con parallax */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl" />
              <motion.div 
                className="relative z-10"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-primary/80 to-secondary/80 backdrop-blur-sm shadow-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Estadísticas con parallax */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center"
        >
          {[
            { number: '100+', text: 'Proyectos Completados' },
            { number: '95%', text: 'Clientes Satisfechos' },
            { number: '24/7', text: 'Soporte Técnico' },
            { number: '100%', text: 'Código Optimizado' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-3 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-1">{stat.number}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 