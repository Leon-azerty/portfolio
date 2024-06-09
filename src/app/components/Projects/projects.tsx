import Checked from './checked';
import Portfolio from './portfolio';

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden">
      <p className="text-4xl">Projects</p>
      <Checked />
      <div className="my-10">&nbsp;</div>
      <Portfolio />
    </section>
  );
}
