import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: "Compañía",
      links: [
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Proyectos", href: "#portfolio" },
        { name: "Blog", href: "#blog" },
        { name: "Contacto", href: "#contact" }
      ]
    },
    services: {
      title: "Servicios",
      links: [
        { name: "Diseño Web", href: "#" },
        { name: "Desarrollo Web", href: "#" },
        { name: "E-commerce", href: "#" },
        { name: "Apps Móviles", href: "#" },
        { name: "Marketing Digital", href: "#" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Términos y Condiciones", href: "#" },
        { name: "Política de Privacidad", href: "#" },
        { name: "Política de Cookies", href: "#" }
      ]
    }
  };

  const socialLinks = [
    { icon: <FiFacebook />, href: "#", label: "Facebook" },
    { icon: <FiTwitter />, href: "#", label: "Twitter" },
    { icon: <FiInstagram />, href: "#", label: "Instagram" },
    { icon: <FiLinkedin />, href: "#", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: <FiPhone />, text: "+1 234 567 890" },
    { icon: <FiMail />, text: "info@demo-web.com" },
    { icon: <FiMapPin />, text: "123 Demo Street, Ciudad Demo, 12345" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y Contacto */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://placehold.co/200x80/678/fff?text=DEMO+LOGO"
                alt="Demo Company"
                className="h-12 w-auto mb-6"
              />
              <p className="mb-6">
                Soluciones digitales innovadoras para impulsar tu presencia online.
                Diseño web, desarrollo y marketing digital de alta calidad.
              </p>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-primary">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enlaces */}
          {Object.entries(footerSections).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Redes Sociales y Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-xl hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} Demo Company. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 