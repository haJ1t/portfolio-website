import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <HeroBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <HeroContent />
      </div>
    </section>
  );
}
