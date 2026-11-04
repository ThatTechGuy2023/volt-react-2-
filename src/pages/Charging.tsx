import { useTitle } from '../hooks/useTitle'; import SectionHeading from '../components/common/SectionHeading';
import { ChargingCalculator, RangeEstimator } from '../components/vehicles/Calculators';
const faq = [['Is this a real charging network?', 'No. VOLT and its charging ecosystem are fictional.'], ['How accurate is the calculator?', 'It is simplified: battery size divided by power. Real charging varies with curves, temperature and losses.'], ['Which charging speeds are shown?', 'Illustrative values from home AC levels up to 350 kW.']];
export default function Charging() {
  useTitle('Charging — VOLT');
  return <><section className="bg-obsidian px-5 pb-16 pt-24 text-platinum md:px-14"><div className="mx-auto max-w-7xl"><h1 className="max-w-[14ch] text-5xl md:text-8xl">Charge on your terms.</h1><p className="mt-5 max-w-[56ch] text-muted">A fictional charging ecosystem for home and on the road.</p>
    <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">{[['Home charging', 'A concept wall unit for overnight charging.'], ['Public charging', 'Imagined fast-charging stops along the way.'], ['Charging speeds', 'From about 7 kW at home to 350 kW on public chargers.']].map(([t, x]) => <div key={t} className="bg-graphite p-6"><h2 className="text-2xl">{t}</h2><p className="mt-2 text-sm text-muted">{x}</p></div>)}</div></div></section>
  <section className="bg-graphite px-5 py-16 text-platinum md:px-14"><div className="mx-auto max-w-7xl"><SectionHeading dark title="Charging calculator" /><div className="mt-8"><ChargingCalculator /></div></div></section>
  <section className="bg-obsidian px-5 py-16 text-platinum md:px-14"><div className="mx-auto max-w-7xl"><SectionHeading dark title="Range estimator" /><div className="mt-8"><RangeEstimator /></div></div></section>
  <section className="px-5 py-16 md:px-14"><div className="mx-auto max-w-3xl"><h2 className="text-4xl">Questions</h2>{faq.map(([q, a]) => <details key={q} className="border-b border-charcoal/15 py-4"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-2 text-charcoal/70">{a}</p></details>)}</div></section></>;
}
