import Awards from '@/components/Sections/Awards';
import Hero from '@/components/Sections/Hero';
import Projects from '@/components/Sections/Projects';
import Skills from '@/components/Sections/Skills';
import Experience from '@/components/Sections/Experience';
import Contact from '@/components/Sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Awards />
      <Contact />
    </>
  );
}