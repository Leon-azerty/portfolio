import Experiences from '@/components/Experiences/experiences';
import Hero from '@/components/Hero/hero';
import Internships from '@/components/Internships/internships';
import Projects from '@/components/Projects/projects';
import Chevron from '@/components/chevron';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Line from '@/components/line';
import SideBar from '@/components/sideBar';
import Stack from '@/components/stack';
import { ModeToggle } from './components/ModeToggle';

export default function Home() {
  return (
    <div className="relative">
      <main className="px-4 md:px-20 lg:px-28 xl:px-32">
        <Header />
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
      <div className="fixed bottom-0 right-0 p-4">
        <ModeToggle />
      </div>
      <SideBar />
    </div>
  );
}
