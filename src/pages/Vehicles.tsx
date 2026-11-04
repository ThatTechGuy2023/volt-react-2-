import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { vehicles } from '../data/vehicles'; import { useTitle } from '../hooks/useTitle';
import VehicleCard from '../components/vehicles/VehicleCard'; import ComparePanel from '../components/vehicles/ComparePanel';
import SectionHeading from '../components/common/SectionHeading'; import Button from '../components/common/Button';
export default function Vehicles() {
  useTitle('Vehicles — VOLT'); const [q, setQ] = useState(''); const [cat, setCat] = useState('All');
  const cats = ['All', ...new Set(vehicles.map((v) => v.category))];
  const list = useMemo(() => vehicles.filter((v) => (cat === 'All' || v.category === cat) && `${v.name} ${v.category} ${v.blurb}`.toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return <section className="px-5 py-20 md:px-14"><div className="mx-auto max-w-7xl"><SectionHeading h1 title="Choose your direction." text="Three concept vehicles. Search, filter and compare up to three." />
    <div className="mt-10 flex flex-wrap items-center gap-3"><label className="flex min-h-11 items-center gap-2 border border-charcoal/20 bg-white px-3"><Search size={18} aria-hidden /><span className="sr-only">Search vehicles</span><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search vehicles" className="bg-transparent outline-none" /></label>
      {cats.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`min-h-11 border px-4 text-sm ${cat === c ? 'bg-charcoal text-white' : 'border-charcoal/20'}`}>{c}</button>)}</div>
    {list.length ? <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((v) => <VehicleCard key={v.slug} v={v} selectable />)}</div>
      : <div className="mt-8 border border-dashed border-charcoal/20 p-10 text-center"><p>No vehicles match “{q}”.</p><Button className="mt-4" onClick={() => { setQ(''); setCat('All'); }}>Clear search and filters</Button></div>}
    <ComparePanel /></div></section>;
}
