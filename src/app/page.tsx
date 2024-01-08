import Banner from './banner';
import Header from './header';
import Stack from './stack';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Stack />
      <div className="h-screen">
        <p>Icon de sidebar</p>
        <p>Le reste de votre contenu</p>
      </div>
      <div className="h-screen">
        <p>Icon de sidebar</p>
        <p>Le reste de votre contenu</p>
      </div>
    </main>
  );
}
