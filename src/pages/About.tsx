import EditorialBlock, { type Block } from '../components/common/EditorialBlock'; import { useTitle } from '../hooks/useTitle';
const blocks: Block[] = [
 { title: 'The VOLT story', text: 'VOLT is a fictional marque imagined for this portfolio. It has no real history, founders or facilities.' },
 { title: 'Brand philosophy', text: 'Confidence through restraint: say less, engineer more.' },
 { title: 'Design principles', text: 'Clean surfaces, honest materials and proportions that suggest motion at rest.' },
 { title: 'Engineering vision', text: 'Performance should feel effortless and quiet.' },
 { title: 'Sustainability vision', text: 'An aspiration to think about the whole life of a vehicle. No real-world environmental claims are made.' },
 { title: 'The future of mobility', text: 'Cars as calm, connected spaces that fit into daily life.' }];
export default function About() {
  useTitle('About — VOLT');
  return <><section className="bg-obsidian px-5 pb-6 pt-24 text-platinum md:px-14"><div className="mx-auto max-w-7xl"><h1 className="max-w-[14ch] text-5xl md:text-8xl">A different way forward.</h1></div></section>{blocks.map((b, i) => <EditorialBlock key={b.title} b={b} i={i} shape={(i % 3) as 0 | 1 | 2} />)}</>;
}
