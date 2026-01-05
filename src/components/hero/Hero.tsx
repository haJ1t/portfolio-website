import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ height: '100dvh' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
}
