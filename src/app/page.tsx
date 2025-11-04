import DotNavigation from '@/components/navigation/DotNavigation';
import Hero from '@/components/hero/Hero';
import { AboutSection } from '@/components/about';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <DotNavigation />
      <main className="min-h-screen">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
