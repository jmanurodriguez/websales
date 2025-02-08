import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiShield } from 'react-icons/fi';
import { 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiGithub,
  SiWordpress,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiNextdotjs
} from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: <SiHtml5 className="w-12 h-12" /> },
  { name: 'CSS3', icon: <SiCss3 className="w-12 h-12" /> },
  { name: 'Git', icon: <SiGit className="w-12 h-12" /> },
  { name: 'GitHub', icon: <SiGithub className="w-12 h-12" /> },
  { name: 'WordPress', icon: <SiWordpress className="w-12 h-12" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-12 h-12" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" /> },
  { name: 'React JS', icon: <SiReact className="w-12 h-12" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-12 h-12" /> },
  { name: 'Figma', icon: <SiFigma className="w-12 h-12" /> },
  { name: 'Canva', icon: <SiCanva className="w-12 h-12" /> }
];

const features = [
  {
    icon: <FiCode />,
    title: 'Código Limpio',
    description: 'Desarrollamos con las mejores prácticas para garantizar un código mantenible y escalable.'
  },
  {
    icon: <FiLayout />,
    title: 'Diseño Responsivo',
    description: 'Sitios web que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla.'
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile First',
    description: 'Diseñamos pensando primero en dispositivos móviles para una experiencia óptima.'
  },
  {
    icon: <FiShield />,
    title: 'Seguridad',
    description: 'Implementamos las últimas medidas de seguridad para proteger tu sitio web.'
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-6">
              Transformando Ideas en <span className="text-primary">Experiencias Digitales</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Somos un equipo apasionado por el desarrollo web, comprometidos con la creación de 
              soluciones digitales innovadoras que ayudan a nuestros clientes a destacar en el 
              mundo digital.
            </p>

            {/* Características */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-primary text-2xl mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tecnologías */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-center">
                Tecnologías que Utilizamos
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                  >
                    <div className="text-primary mb-2">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Estadísticas o métricas */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <h4 className="text-3xl font-bold text-primary mb-1">5+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Años de Experiencia</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <h4 className="text-3xl font-bold text-primary mb-1">100%</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Satisfacción Cliente</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 