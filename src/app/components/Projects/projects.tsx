import Portfolio from './portfolio';
import PwaMarmiton from './pwaMarmiton';
import SeeMoreBtn from './seeMoreBtn';
import SpriteCloud from './spriteCloud';

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden">
      <div className="flex items-end space-x-2">
        <p className="text-4xl">Projects</p>
        <SeeMoreBtn />
      </div>
      <SpriteCloud />
      <div className="my-10">&nbsp;</div>
      <Portfolio />
      <div className="my-10">&nbsp;</div>
      <PwaMarmiton />
      <div className="flex justify-end">
        <SeeMoreBtn start="90%" />
      </div>
    </section>
  );
}
