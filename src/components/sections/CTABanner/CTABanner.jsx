const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full">
        <img
          src="https://placehold.co/1920x200/png"
          alt="Banner promocional"
          className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover object-center"
        />
      </div>

      {/* Contenido */}
      <div className="container-custom relative z-10">
        <div className="flex items-end justify-center h-[150px] sm:h-[180px] md:h-[200px]">
          <div className="text-center pb-3 sm:pb-4 md:pb-6">
            <a
              href="#contacto"
              className="inline-block px-4 sm:px-5 py-2 bg-white text-primary text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Comienza tu Proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner; 