import Starton2022 from './Experiences/starton2022';
import Starton2021 from './Experiences/starton2021';
import Berlin from './Experiences/berlin';
import Dublin from './Experiences/dublin';

export default function Experiences() {
  return (
    <section className="mt-10">
      <p className="text-4xl">Experiences</p>
      <Starton2022 />
      <div className="my-5">&nbsp;</div>
      <Starton2021 />
      <div className="my-5">&nbsp;</div>
      <Berlin />
      <div className="my-5">&nbsp;</div>
      <Dublin />
    </section>
  );
}
