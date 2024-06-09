import GnConsulting from './gnConsulting';
import Piwio from './piwio';
import Viapix from './viapix';

export default function Internships() {
  return (
    <section className="mt-20 relative z-20" id="internships">
      <p className="text-4xl">Internships</p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 overflow-hidden">
        <Piwio />
        <div className="my-10 lg:hidden">&nbsp;</div>
        <Viapix />
        <div className="my-10 lg:hidden">&nbsp;</div>
        <GnConsulting />
      </div>
    </section>
  );
}
