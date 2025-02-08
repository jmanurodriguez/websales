import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Círculos de fondo con efecto parallax */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-40 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      
      {/* Grid de puntos */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
    </div>
  );
};

export default ParallaxBackground; 