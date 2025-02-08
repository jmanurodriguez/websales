import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectPreview = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800 rounded-t-2xl">
      {/* Vista previa interactiva */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={project.url}
          title={project.title}
          className="w-full h-full transform scale-[0.85] origin-top"
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
      </div>

      {/* Controles */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-lg"
        >
          Visitar sitio
        </motion.a>
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectPreview; 