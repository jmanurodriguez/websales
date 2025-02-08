import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el banner después de 3 segundos
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-24 z-40"
    >
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 max-w-md">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
            ¿Listo para impulsar tu presencia digital?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            Contáctanos y obtén una consulta gratuita
          </p>
        </div>

        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <a
            href="#contacto"
            className="flex-1 sm:flex-none text-center text-xs sm:text-sm px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            ¡Lo quiero!
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
          >
            <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingBanner; 