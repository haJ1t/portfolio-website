import Hero from '@/components/hero/Hero';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/config/site';
import UnifiedBackground from '@/components/ui/UnifiedBackground';
import LazyDotNavigation from '@/components/navigation/LazyDotNavigation';

// Lazy load non-critical sections for better code splitting
const ProjectsSection = dynamic(() => import('@/components/projects/ProjectsSection'), {
  loading: () => <div className="min-h-screen" aria-label="Loading projects..." />,
});

const AboutSection = dynamic(() => import('@/components/about').then(mod => mod.AboutSection), {
  loading: () => <div className="min-h-screen" aria-label="Loading about section..." />,
});

const ContactSection = dynamic(() => import('@/components/contact/ContactSection'), {
  loading: () => <div className="min-h-[50vh]" aria-label="Loading contact form..." />,
});

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: "Halit Ozger",
    givenName: "Halit",
    familyName: "Ozger",
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://halitozger.com',
    image: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://halitozger.com'}/images/profile.jpg`,
    jobTitle: "Full Stack Developer & AI/ML Engineer",
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'UK'
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      "https://twitter.com/haltozger",
      "https://instagram.com/haltozger",
    ],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "Python",
      "Django",
      "Natural Language Processing"
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Self-taught'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UnifiedBackground />
      <LazyDotNavigation />
      <main className="min-h-screen">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
