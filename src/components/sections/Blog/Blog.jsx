const blogPosts = [
  {
    title: "Tendencias de Diseño Web para 2024",
    excerpt: "Descubre las últimas tendencias en diseño web que dominarán el próximo año.",
    image: "https://placehold.co/600x400/png",
    date: "2024-01-15",
    author: "Ana Demo",
    category: "Diseño Web"
  },
  {
    title: "Optimización de Rendimiento Web",
    excerpt: "Guía completa para mejorar la velocidad y rendimiento de tu sitio web.",
    image: "https://placehold.co/600x400/png",
    date: "2024-01-10",
    author: "Juan Demo",
    category: "Desarrollo"
  },
  {
    title: "Guía de SEO para Principiantes",
    excerpt: "Todo lo que necesitas saber para empezar con el SEO en tu sitio web.",
    image: "https://placehold.co/600x400/png",
    date: "2024-01-05",
    author: "María Demo",
    category: "SEO"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Últimas noticias y artículos sobre desarrollo web y tecnología
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <button className="text-primary hover:underline">Leer más</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 