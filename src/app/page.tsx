import Banner from './banner';
import Chevron from './chevron';
import Contact from './contact';
import Experiences from './experiences';
import Footer from './footer';
import Header from './header';
import Internships from './internships';
import Line from './line';
import Projects from './projects';
import SideBar from './sideBar';
import Stack from './stack';

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
