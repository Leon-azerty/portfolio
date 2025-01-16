import Checked from './checked';
import Portfolio from './portfolio';
import SpriteCloud from './spriteCloud';

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden">
      <p className="text-4xl">Projects</p>
      <Checked />
      <div className="my-10">&nbsp;</div>
      <Portfolio />
      <div className="my-10">&nbsp;</div>
      <SpriteCloud />
    </section>
  );
}
