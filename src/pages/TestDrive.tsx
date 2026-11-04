import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom'; import { vehicles } from '../data/vehicles'; import { useTitle } from '../hooks/useTitle'; import Button from '../components/common/Button';
const blank = { name: '', email: '', phone: '', vehicle: '', date: '', location: '', message: '' }; type F = typeof blank;
const locs = ['City showroom (concept)', 'Airport lounge (concept)', 'Home visit (concept)'];
export default function TestDrive() {
  useTitle('Test drive — VOLT'); const [sp] = useSearchParams(); const pre = vehicles.find((v) => v.slug === sp.get('vehicle'))?.slug ?? '';
  const [f, setF] = useState<F>({ ...blank, vehicle: pre }); const [err, setErr] = useState<Partial<F>>({}); const [st, setSt] = useState<'idle' | 'loading' | 'done'>('idle');
  const submit = (e: FormEvent) => { e.preventDefault(); const x: Partial<F> = {};
    if (!f.name.trim()) x.name = 'Please enter your full name.'; if (!f.email.trim()) x.email = 'Please enter your email.'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) x.email = 'Enter a valid email address.';
    if (!f.phone.trim()) x.phone = 'Please enter a phone number.'; if (!f.vehicle) x.vehicle = 'Choose a vehicle.'; if (!f.date) x.date = 'Choose a preferred date.'; if (!f.location) x.location = 'Choose a location.';
    setErr(x); if (Object.keys(x).length) return; setSt('loading'); setTimeout(() => setSt('done'), 1200); };
  const cls = 'min-h-11 w-full border border-charcoal/25 bg-white px-3';
  const field = (k: keyof F, l: string, el: React.ReactNode) => <div><label htmlFor={k} className="mb-1 block text-sm">{l}</label>{el}{err[k] && <p id={`${k}-e`} role="alert" className="mt-1 text-sm text-red-700">{err[k]}</p>}</div>;
  const inp = (k: keyof F, type = 'text') => <input id={k} type={type} className={cls} value={f[k]} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} onChange={(e) => setF({ ...f, [k]: e.target.value })} />;
  const sel = (k: keyof F, o: [string, string][]) => <select id={k} className={cls} value={f[k]} aria-invalid={!!err[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}><option value="">Select…</option>{o.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>;
  return <section className="px-5 py-20 md:px-14"><div className="mx-auto max-w-2xl"><h1 className="text-5xl md:text-7xl">Book a test drive.</h1><p className="mt-4 text-charcoal/70">Demonstration form only. Nothing is sent and no dealership receives it.</p>
    {st === 'done' ? <div role="status" className="mt-8 border border-charcoal p-6"><h2 className="text-3xl">Thanks, {f.name.split(' ')[0]}.</h2><p className="mt-2">Your demo enquiry for the {vehicles.find((v) => v.slug === f.vehicle)?.name} was not actually sent anywhere.</p><Button className="mt-4" onClick={() => { setF(blank); setSt('idle'); }}>Start again</Button></div>
    : <form noValidate onSubmit={submit} className="mt-8 grid gap-5">{field('name', 'Full name', inp('name'))}{field('email', 'Email', inp('email', 'email'))}{field('phone', 'Phone number', inp('phone', 'tel'))}{field('vehicle', 'Preferred vehicle', sel('vehicle', vehicles.map((v) => [v.slug, v.name])))}{field('date', 'Preferred date', inp('date', 'date'))}{field('location', 'Preferred location', sel('location', locs.map((l) => [l, l])))}
      {field('message', 'Additional message (optional)', <textarea id="message" rows={4} className={`${cls} py-2`} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />)}
      <div className="flex gap-2"><Button type="submit" variant="primary" disabled={st === 'loading'}>{st === 'loading' ? 'Sending…' : 'Request test drive'}</Button><Button type="button" onClick={() => { setF(blank); setErr({}); }}>Reset</Button></div></form>}</div></section>;
}
