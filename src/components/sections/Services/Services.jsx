import { motion } from 'framer-motion';
import { 
  FiMonitor,
  FiShoppingBag,
  FiSmartphone,
  FiPenTool,
  FiBarChart,
  FiServer
} from 'react-icons/fi';

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios web modernos y optimizados para buscadores",
    icon: <FiMonitor className="w-8 h-8" />,
    color: "bg-blue-500",
    features: [
      "Diseño Responsive",
      "Optimización SEO",
      "Rendimiento Optimizado",
      "Integración CMS",
      "Certificado SSL",
      "Mantenimiento Web"
    ]
  },
  {
    title: "E-commerce",
    description: "Tiendas online completas y personalizadas",
    icon: <FiShoppingBag className="w-8 h-8" />,
    color: "bg-green-500",
    features: [
      "Catálogo de Productos",
      "Pasarelas de Pago",
      "Gestión de Inventario",
      "Carrito de Compras",
      "Panel Administrativo",
      "Informes de Ventas"
    ]
  },
  {
    title: "Desarrollo Móvil",
    description: "Apps nativas y multiplataforma",
    icon: <FiSmartphone className="w-8 h-8" />,
    color: "bg-purple-500",
    features: [
      "iOS y Android",
      "React Native",
      "PWA",
      "UI/UX Móvil",
      "Push Notifications",
      "Analytics Móvil"
    ]
  },
  {
    title: "Diseño UI/UX",
    description: "Interfaces modernas y experiencias de usuario",
    icon: <FiPenTool className="w-8 h-8" />,
    color: "bg-pink-500",
    features: [
      "Diseño de Interfaces",
      "Prototipado",
      "Wireframes",
      "Design System",
      "User Testing",
      "Responsive Design"
    ]
  },
  {
    title: "Marketing Digital",
    description: "Estrategias de marketing y posicionamiento",
    icon: <FiBarChart className="w-8 h-8" />,
    color: "bg-orange-500",
    features: [
      "SEO/SEM",
      "Redes Sociales",
      "Email Marketing",
      "Google Ads",
      "Analytics",
      "Contenido Digital"
    ]
  },
  {
    title: "Servicios Cloud",
    description: "Soluciones en la nube escalables",
    icon: <FiServer className="w-8 h-8" />,
    color: "bg-teal-500",
    features: [
      "Hosting Web",
      "Servidores VPS",
      "Bases de Datos",
      "Backups",
      "Seguridad Cloud",
      "Escalabilidad"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ofrecemos soluciones digitales completas para ayudarte a crecer tu negocio online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${service.color} p-4 flex items-center justify-center`}>
                <div className="bg-white/20 p-3 rounded-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg 
                        className="w-4 h-4 text-green-500 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 