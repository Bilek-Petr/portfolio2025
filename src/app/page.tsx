import Hero from '@/components/sections/hero/Hero';
import About from '@/components/sections/about/About';
import Experience from '@/components/sections/experience/Experience';
import Projects from '@/components/sections/projects/Projects';
import Techstack from '@/components/sections/techstack/Techstack';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Techstack />
      <Footer />
    </>
  );
}
