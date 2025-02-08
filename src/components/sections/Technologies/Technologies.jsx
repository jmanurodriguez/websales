import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiWordpress,
  SiPhp,
  SiFigma
} from "react-icons/si";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <SiHtml5 className="w-10 h-10" />, color: "hover:text-[#E34F26]" },
      { name: "CSS3", icon: <SiCss3 className="w-10 h-10" />, color: "hover:text-[#1572B6]" },
      { name: "JavaScript", icon: <SiJavascript className="w-10 h-10" />, color: "hover:text-[#F7DF1E]" },
      { name: "React", icon: <SiReact className="w-10 h-10" />, color: "hover:text-[#61DAFB]" },
      { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10" />, color: "hover:text-[#000000] dark:hover:text-white" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10" />, color: "hover:text-[#339933]" },
      { name: "PHP", icon: <SiPhp className="w-10 h-10" />, color: "hover:text-[#777BB4]" },
      { name: "MongoDB", icon: <SiMongodb className="w-10 h-10" />, color: "hover:text-[#47A248]" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10" />, color: "hover:text-[#4169E1]" },
      { name: "Firebase", icon: <SiFirebase className="w-10 h-10" />, color: "hover:text-[#FFCA28]" }
    ]
  },
  {
    category: "Herramientas & CMS",
    items: [
      { name: "Git", icon: <SiGit className="w-10 h-10" />, color: "hover:text-[#F05032]" },
      { name: "Docker", icon: <SiDocker className="w-10 h-10" />, color: "hover:text-[#2496ED]" },
      { name: "WordPress", icon: <SiWordpress className="w-10 h-10" />, color: "hover:text-[#21759B]" },
      { name: "Tailwind", icon: <SiTailwindcss className="w-10 h-10" />, color: "hover:text-[#06B6D4]" },
      { name: "Figma", icon: <SiFigma className="w-10 h-10" />, color: "hover:text-[#F24E1E]" }
    ]
  }
];

const Technologies = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Nuestras Tecnologías</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Utilizamos las últimas tecnologías y herramientas para crear soluciones web modernas y escalables
          </p>
        </motion.div>

        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.category}</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className={`flex flex-col items-center gap-2 transition-colors ${tech.color}`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: techIndex * 0.1 }}
                  >
                    {tech.icon}
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 