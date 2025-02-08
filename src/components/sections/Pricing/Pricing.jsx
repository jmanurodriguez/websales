import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const pricingPlans = [
  {
    name: "Básico",
    price: "999",
    features: [
      "Diseño Responsive",
      "5 Páginas",
      "Formulario de Contacto",
      "SEO Básico",
      "3 Revisiones"
    ],
    recommended: false
  },
  {
    name: "Profesional",
    price: "1999",
    features: [
      "Todo lo del plan Básico",
      "10 Páginas",
      "Blog integrado",
      "SEO Avanzado",
      "Analytics",
      "5 Revisiones",
      "Soporte Premium"
    ],
    recommended: true
  },
  {
    name: "Empresarial",
    price: "3999",
    features: [
      "Todo lo del plan Profesional",
      "Páginas ilimitadas",
      "E-commerce",
      "Panel Administrativo",
      "Hosting Premium",
      "Revisiones ilimitadas",
      "Soporte 24/7"
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Selecciona el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 relative ${
                plan.recommended ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Recomendado
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/mes</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-2 px-4 rounded-lg ${
                plan.recommended 
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
                Seleccionar Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 