import Hero from '@/components/hero/Hero';
import { AboutSection } from '@/components/about';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      {/* Contact section will be added here */}
      <Footer />
    </main>
  );
}
