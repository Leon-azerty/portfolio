import NavBar from '@/app/components/navbar';
import Experiences from '@/components/Experiences/experiences';
import Hero from '@/components/Hero/hero';
import Internships from '@/components/Internships/internships';
import Projects from '@/components/Projects/projects';
import Chevron from '@/components/chevron';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Line from '@/components/line';
import Stack from '@/components/stack';

export default function Home() {
  return (
    <main className="px-4 md:px-20 lg:px-28 xl:px-32">
      <NavBar />
      <Hero />
      <Chevron />
      <Internships />
      <Line />
      <Projects />
      <Experiences />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
