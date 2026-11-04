import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getVehicle, interiors, paints, vehicles, wheels } from '../data/vehicles'; import type { Config, Option, Slug } from '../types';
import { useApp } from '../context/AppContext'; import { useTitle } from '../hooks/useTitle';
import CarArt from '../components/vehicles/CarArt'; import Selector from '../components/configurator/Selector'; import PriceSummary from '../components/configurator/PriceSummary'; import Button from '../components/common/Button'; import NotFound from './NotFound';
const steps = ['Vehicle', 'Trim', 'Paint', 'Wheels', 'Interior', 'Summary'];
const fresh = (slug: Slug): Config => ({ slug, trim: 0, paint: 0, wheel: 0, interior: 0 });
export default function Configurator() {
  const v = getVehicle(useParams().slug); useTitle(v ? `Configure ${v.name} — VOLT` : 'Not found — VOLT');
  const { saved, setSaved } = useApp(); const nav = useNavigate(); const [c, setC] = useState<Config>(() => (v ? fresh(v.slug) : fresh('gt'))); const [step, setStep] = useState(0); const [msg, setMsg] = useState('');
  useEffect(() => { if (v && c.slug !== v.slug) setC(fresh(v.slug)); }, [v, c.slug]);
  if (!v) return <NotFound what="vehicle" />;
  const set = (k: keyof Config) => (i: number) => setC({ ...c, [k]: i });
  const body = [
    <Selector key="v" label="Vehicle" value={vehicles.findIndex((x) => x.slug === v.slug)} onChange={(i) => nav(`/configure/${vehicles[i].slug}`)} options={vehicles.map((x): Option => ({ name: x.name, price: 0 }))} />,
    <Selector key="t" label="Trim" value={c.trim} onChange={set('trim')} options={v.trims.map((t): Option => ({ name: t.name, price: t.price }))} />,
    <Selector key="p" label="Exterior paint" value={c.paint} onChange={set('paint')} options={paints} />,
    <Selector key="w" label="Wheels" value={c.wheel} onChange={set('wheel')} options={wheels} />,
    <Selector key="i" label="Interior" value={c.interior} onChange={set('interior')} options={interiors} />,
    <PriceSummary key="s" config={c} />][step];
  return <section className="px-5 py-12 md:px-14"><div className="mx-auto max-w-7xl"><h1 className="text-5xl md:text-7xl">Build your {v.name}</h1>
    <ol className="mt-6 flex gap-1" aria-label="Progress">{steps.map((s, i) => <li key={s} className="flex-1"><button onClick={() => setStep(i)} aria-current={i === step} className="w-full text-left"><div className={`h-1 ${i <= step ? 'bg-charcoal' : 'bg-charcoal/15'}`} /><span className={`mt-1 hidden text-xs sm:block ${i === step ? 'font-medium' : 'text-charcoal/60'}`}>{s}</span></button></li>)}</ol>
    <p className="mt-2 text-sm sm:hidden">Step {step + 1} of 6: {steps[step]}</p>
    <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div className="bg-linear-to-b from-[#1b2227] to-obsidian p-6 lg:sticky lg:top-24"><CarArt shape={v.shape} color={paints[c.paint].color} wheel={wheels[c.wheel].size} label={`${v.name} preview in ${paints[c.paint].name}`} className="w-full" /><p className="mt-2 text-xs text-muted">2D illustration of your paint and wheel choice. Not a 3D render. Interior choices appear in the summary only.</p></div>
      <div><h2 className="mb-4 text-3xl">{steps[step]}</h2><AnimatePresence mode="wait"><motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>{body}</motion.div></AnimatePresence>
        <div className="mt-6 flex flex-wrap gap-2"><Button disabled={step === 0} onClick={() => setStep(step - 1)}><ChevronLeft size={16} />Back</Button>{step < 5 ? <Button variant="primary" onClick={() => setStep(step + 1)}>Next<ChevronRight size={16} /></Button> : <Button variant="primary" to={`/test-drive?vehicle=${v.slug}`}>Continue to test drive</Button>}</div>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-charcoal/10 pt-6"><Button onClick={() => { setSaved(c); setMsg('Configuration saved in this browser.'); }}>Save configuration</Button>
          <Button disabled={!saved} onClick={() => { if (saved) { nav(`/configure/${saved.slug}`); setC(saved); setMsg('Saved configuration restored.'); } }}>Restore saved</Button><Button onClick={() => { setC(fresh(v.slug)); setStep(0); setMsg('Configuration reset.'); }}>Reset</Button></div><p role="status" className="mt-3 text-sm text-charcoal/60">{msg}</p>
        {step < 5 && <div className="mt-6"><PriceSummary config={c} /></div>}</div></div></div></section>;
}
