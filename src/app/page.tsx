import Hero from '@/components/hero/Hero';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* About, Projects, Contact sections will be added here */}
      <Footer />
    </main>
  );
}
