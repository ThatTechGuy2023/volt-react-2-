import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Play } from 'lucide-react';
import { vehicles } from '../../data/vehicles';
export default function Footer() {
  return <footer className="bg-obsidian px-5 py-14 text-sm text-muted md:px-14"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
    <div><p className="font-display text-xl font-bold tracking-[0.3em] text-platinum">VOLT</p><p className="mt-3 max-w-[30ch]">Performance, redefined for an electric generation.</p></div>
    <nav aria-label="Explore" className="flex flex-col gap-2"><Link to="/vehicles">Vehicles</Link><Link to="/technology">Technology</Link><Link to="/charging">Charging</Link><Link to="/about">About</Link><Link to="/test-drive">Test drive</Link></nav>
    <nav aria-label="Vehicles" className="flex flex-col gap-2">{vehicles.map((v) => <Link key={v.slug} to={`/vehicles/${v.slug}`}>{v.name}</Link>)}</nav>
    <div className="flex gap-3">{[Globe, MessageCircle, Play].map((I, i) => <span key={i} aria-hidden className="grid size-10 place-items-center border border-white/15"><I size={16} /></span>)}</div></div>
    <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">VOLT is a fictional brand for a frontend portfolio. All vehicles, specifications, prices and technology are conceptual demonstration content. © 2026 VOLT concept. Social icons are placeholders.</p></footer>;
}
