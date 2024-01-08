import Banner from './banner';
import Header from './header';
import Line from './line';
import Projects from './projects';
import Stack from './stack';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Stack />
      <Line />
      <Projects />
    </main>
  );
}
