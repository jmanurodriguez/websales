import Hero from '../components/sections/Hero/Hero';
import Services from '../components/sections/Services/Services';
import About from '../components/sections/About/About';
import Portfolio from '../components/sections/Portfolio/Portfolio';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import FAQ from '../components/sections/FAQ/FAQ';
import Contact from '../components/sections/Contact/Contact';
import CTABanner from '../components/sections/CTABanner/CTABanner';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Contact />
      {/* Aquí irán todas las secciones de la página principal */}
    </div>
  );
};

export default Home; 