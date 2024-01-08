import Piwio from './Internships/piwio';
import Viapix from './Internships/viapix';

export default function Internships() {
  return (
    <section>
      <p className="text-4xl">Internships</p>
      <Piwio />
      <div className="my-10">&nbsp;</div>
      <Viapix />
    </section>
  );
}
