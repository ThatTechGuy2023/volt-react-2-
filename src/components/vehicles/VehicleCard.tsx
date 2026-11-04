import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import type { Vehicle } from '../../types';
import { useApp } from '../../context/AppContext';
import { money } from '../../utils/pricing';
import Button from '../common/Button';
import CarArt from './CarArt';
export default function VehicleCard({ v, selectable = false }: { v: Vehicle; selectable?: boolean }) {
  const { favs, toggleFav, compare, toggleCompare } = useApp(); const fav = favs.includes(v.slug); const cmp = compare.includes(v.slug);
  return <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className={`flex flex-col gap-3 border bg-white p-7 ${cmp ? 'border-charcoal' : 'border-charcoal/10'}`}>
    <div className="flex justify-end"><button aria-pressed={fav} aria-label={fav ? `Remove ${v.name} from favourites` : `Save ${v.name} to favourites`} onClick={() => toggleFav(v.slug)} className="grid size-11 place-items-center"><Heart className={fav ? 'fill-charcoal' : ''} /></button></div>
    <div className="bg-linear-to-b from-[#1b2227] to-obsidian p-3"><CarArt shape={v.shape} label={`${v.name} illustration`} className="w-full" /></div>
    <h3 className="text-3xl">{v.name}</h3><p className="text-sm text-charcoal/60">{v.category}</p>
    <dl className="my-2 flex gap-8"><div><dt className="text-xs text-charcoal/60">From</dt><dd className="font-display text-xl">{money(v.price)}</dd></div><div><dt className="text-xs text-charcoal/60">Range</dt><dd className="font-display text-xl">{v.range} mi</dd></div></dl>
    <div className="mt-auto flex flex-wrap gap-2"><Button to={`/vehicles/${v.slug}`}>Explore</Button><Button to={`/configure/${v.slug}`} variant="primary">Configure</Button>
      {selectable && <button aria-pressed={cmp} onClick={() => toggleCompare(v.slug)} className={`min-h-11 border px-4 text-sm ${cmp ? 'bg-charcoal text-white' : ''}`}>{cmp ? 'Selected to compare' : 'Compare'}</button>}</div>
  </motion.article>;
}
