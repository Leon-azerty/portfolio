import Experiences from './components/Experiences/experiences';
import Internships from './components/Internships/internships';
import Projects from './components/Projects/projects';
import Banner from './components/banner';
import Chevron from './components/chevron';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Line from './components/line';
import SideBar from './components/sideBar';
import Stack from './components/stack';

export default function Home() {
  return (
    <div className="relative">
      <main className="px-4 md:px-20 lg:px-28 xl:px-32">
        <Header />
        <Banner />
        <Chevron />
        <Internships />
        <Line />
        <Projects />
        <Experiences />
        <Stack />
        <Contact />
        <Footer />
      </main>
      <SideBar />
    </div>
  );
}
