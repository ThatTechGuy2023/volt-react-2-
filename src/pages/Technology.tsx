import EditorialBlock, { type Block } from '../components/common/EditorialBlock'; import { useTitle } from '../hooks/useTitle';
const blocks: Block[] = [
 { title: 'Electric performance', text: 'Instant response and a low centre of gravity define the concept VOLT driving character.' },
 { title: 'Battery architecture', text: 'A conceptual floor-mounted pack designed around thermal stability and structural rigidity.' },
 { title: 'Electric motor systems', text: 'Compact dual-motor and single-motor layouts, tuned per model in this fictional lineup.' },
 { title: 'Intelligent vehicle software', text: 'A clean, responsive interface with imagined over-the-air improvements.' },
 { title: 'Driver assistance', text: 'Concept assistance features that keep the driver informed and in control.' },
 { title: 'Connected vehicle experience', text: 'Imagined phone integration for pre-conditioning, charging status and trip planning.' },
 { title: 'Safety and engineering', text: 'A conceptual safety-first structure and careful validation philosophy.' }];
export default function Technology() {
  useTitle('Technology — VOLT');
  return <><section className="bg-obsidian px-5 pb-6 pt-24 text-platinum md:px-14"><div className="mx-auto max-w-7xl"><h1 className="max-w-[14ch] text-5xl md:text-8xl">Engineering, imagined.</h1><p className="mt-5 max-w-[56ch] text-muted">All technology described here is conceptual and fictional.</p></div></section>{blocks.map((b, i) => <EditorialBlock key={b.title} b={b} i={i} shape={(i % 3) as 0 | 1 | 2} />)}</>;
}
