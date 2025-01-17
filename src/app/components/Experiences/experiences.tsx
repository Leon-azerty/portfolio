import Berlin from './berlin';
import Dublin from './dublin';
import Starton2021 from './starton2021';
import Starton2022 from './starton2022';

export default function Experiences() {
  return (
    <section className="mt-32" id="experiences">
      <p className="text-4xl">Experiences</p>
      <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <Starton2022 />
        <div className="my-5 lg:hidden">&nbsp;</div>
        <Starton2021 />
        <div className="my-5 lg:hidden">&nbsp;</div>
        <Dublin />
        <div className="my-5 lg:hidden">&nbsp;</div>
        <Berlin />
      </div>
    </section>
  );
}
