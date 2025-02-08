import { motion } from 'framer-motion';

const clients = [
  {
    name: 'Cliente 1',
    logo: 'https://res.cloudinary.com/dpcpcnqmq/image/upload/v1733161731/logo1.png',
  },
  {
    name: 'Cliente 2',
    logo: 'https://res.cloudinary.com/dpcpcnqmq/image/upload/v1733161731/logo2.png',
  },
  {
    name: 'Cliente 3',
    logo: 'https://res.cloudinary.com/dpcpcnqmq/image/upload/v1733161731/logo3.png',
  },
  // Agrega más logos aquí
];

const Clients = () => {
  return (
    <section className="py-12 bg-neutral-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="heading-2 mb-4">
            Confían en <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Empresas que han confiado en nuestros servicios
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-16 object-contain filter dark:invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 