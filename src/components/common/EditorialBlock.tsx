import type { Vehicle } from '../../types';
import CarArt from '../vehicles/CarArt'; import Reveal from './Reveal';
export interface Block { title: string; text: string }
export default function EditorialBlock({ b, i, shape }: { b: Block; i: number; shape: Vehicle['shape'] }) {
  const dark = i % 2 === 0;
  return <section className={`px-5 py-20 md:px-14 ${dark ? 'bg-obsidian text-platinum' : 'bg-soft'}`}><div className={`mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 ${i % 4 > 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
    <Reveal><p className={`text-sm ${dark ? 'text-ice' : 'text-charcoal/60'}`}>0{i + 1}</p><h2 className="mt-2 text-4xl md:text-6xl">{b.title}</h2><p className={`mt-5 max-w-[52ch] ${dark ? 'text-muted' : 'text-charcoal/70'}`}>{b.text}</p></Reveal>
    <Reveal d={0.15}><div className="bg-linear-to-b from-[#1b2227] to-obsidian p-4"><CarArt shape={shape} color={['#8d979e', '#1c2f52', '#5d656c'][i % 3]} label="Concept vehicle illustration" className="w-full" /></div></Reveal></div></section>;
}
