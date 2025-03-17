import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Checked from '../components/Projects/checked';
import Portfolio from '../components/Projects/portfolio';
import SpriteCloud from '../components/Projects/spriteCloud';

export default function Page() {
  return (
    <main className="px-4 md:px-20 lg:px-28 xl:px-32">
      <Navbar />
      <section id="projects" className="my-20 overflow-hidden lg:my-40">
        <Checked />
        <div className="my-10">&nbsp;</div>
        <Portfolio />
        <div className="my-10">&nbsp;</div>
        <SpriteCloud />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
