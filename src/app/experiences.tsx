import Starton2022 from './Experiences/starton2022';
import Starton2021 from './Experiences/starton2021';
import Berlin from './Experiences/berlin';
import Dublin from './Experiences/dublin';

export default function Experiences() {
  return (
    <section className="mt-32" id="experiences">
      <p className="text-4xl">Experiences</p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <Starton2022 />
        <div className="my-5 lg:hidden">&nbsp;</div>
        <Starton2021 />
        <div className="my-5 lg:hidden">&nbsp;</div>
        <Berlin />
        <div className="my-5 lg:hidden">&nbsp;</div>
        <Dublin />
      </div>
    </section>
  );
}
