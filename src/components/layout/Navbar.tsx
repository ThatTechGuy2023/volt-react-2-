import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';
const links = [['/vehicles', 'Vehicles'], ['/technology', 'Technology'], ['/charging', 'Charging'], ['/about', 'About'], ['/configure/gt', 'Configure']] as const;
export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { const s = () => setScrolled(window.scrollY > 24); const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('scroll', s); window.addEventListener('keydown', k); return () => { window.removeEventListener('scroll', s); window.removeEventListener('keydown', k); }; }, []);
  return <header className={`sticky top-0 z-40 text-platinum transition-colors duration-300 ${scrolled || open ? "bg-obsidian" : "bg-obsidian/90"}`}>
    <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-14">
      <Link to="/" className="font-display text-xl font-bold tracking-[0.3em]">VOLT</Link>
      <div className="hidden items-center gap-8 text-sm md:flex">{links.map(([to, l]) => <NavLink key={to} to={to} className={({ isActive }) => `transition-colors hover:text-ice ${isActive ? 'text-ice' : 'text-platinum/80'}`}>{l}</NavLink>)}<Button to="/test-drive" variant="primary" className="min-h-10 px-4">Test Drive</Button></div>
      <button className="grid size-11 place-items-center md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="fixed inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col gap-2 bg-obsidian px-5 pt-6 md:hidden">
      {[...links, ['/test-drive', 'Test Drive'] as const].map(([to, l], i) => <motion.div key={to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}><Link to={to} className="block border-b border-white/10 py-4 font-display text-3xl">{l}</Link></motion.div>)}</motion.div>}</AnimatePresence>
  </header>;
}
