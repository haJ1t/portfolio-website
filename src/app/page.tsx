import DotNavigation from '@/components/navigation/DotNavigation';
import Hero from '@/components/hero/Hero';
import { AboutSection } from '@/components/about';
import dynamic from 'next/dynamic';
import UnifiedBackground from '@/components/ui/UnifiedBackground';

const ProjectsSection = dynamic(() => import('@/components/projects/ProjectsSection'), {
  loading: () => <div className="min-h-screen bg-[#0a0a0a]" />,
});
const ContactSection = dynamic(() => import('@/components/contact/ContactSection'));

export default function Home() {
  return (
    <>
      <UnifiedBackground />
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
