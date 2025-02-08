import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ['Todos', 'Web', 'E-commerce', 'Landing Page', 'Diseño de Branding'];

const projects = [
  {
    name: "Demo E-commerce",
    description: "Tienda online moderna con catálogo de productos, carrito de compras y panel de administración.",
    image: "https://placehold.co/600x400/png",
    demo: "#",
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'React Router', 'Context API'],
    category: 'E-commerce',
    highlights: [
      'Sistema de carrito',
      'Panel admin',
      'Catálogo de productos',
      'Diseño responsive'
    ]
  },
  {
    name: "Demo Web App",
    description: "Aplicación web moderna con autenticación de usuarios y funcionalidades en tiempo real.",
    image: "https://placehold.co/600x400/png",
    demo: "#",
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web',
    highlights: [
      'Autenticación',
      'Tiempo real',
      'Dashboard',
      'PWA'
    ]
  },
  {
    name: "Demo Landing Page",
    description: "Página de aterrizaje optimizada para conversiones y SEO.",
    image: "https://placehold.co/600x400/png",
    demo: "#",
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Landing Page',
    highlights: [
      'SEO optimizado',
      'Alto rendimiento',
      'Diseño moderno',
      'Animaciones fluidas'
    ]
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portafolio" className="section-padding bg-gradient-to-b from-neutral-50 to-white dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="container-custom">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <h2 className="heading-2">
              Nuestro <span className="text-primary">Portafolio</span>
            </h2>
          </motion.div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explora nuestra colección de proyectos exitosos
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Imagen con overlay */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-4 py-2 rounded-lg bg-primary/90 hover:bg-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver proyecto
                    </motion.a>
                  </div>
                </div>

                {/* Contenido */}
                <div className="w-full md:w-1/2 p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Características destacadas */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Características destacadas:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologías */}
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 