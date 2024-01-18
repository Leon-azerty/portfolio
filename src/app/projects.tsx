import Checked from './Projects/checked';
import Portfolio from './Projects/portfolio';

export default function Projects() {
  return (
    <section id="projects">
      <p className="text-4xl">Projects</p>
      <Checked />
      <div className="my-10">&nbsp;</div>
      <Portfolio />
    </section>
  );
}
