import { useState } from 'react';
import { getVehicle, vehicles } from '../../data/vehicles';
import { chargeMinutes } from '../../utils/pricing';
const field = 'min-h-11 border border-white/15 bg-graphite px-3 text-platinum';
function VehicleSelect({ value, onChange }: { value: string; onChange: (s: string) => void }) {
  return <label className="flex flex-col gap-1 text-sm text-muted">Vehicle<select className={field} value={value} onChange={(e) => onChange(e.target.value)}>{vehicles.map((v) => <option key={v.slug} value={v.slug}>{v.name}</option>)}</select></label>;
}
export function ChargingCalculator() {
  const [s, setS] = useState('gt'); const [a, setA] = useState(20); const [b, setB] = useState(80); const [kw, setKw] = useState(150); const v = getVehicle(s) ?? vehicles[0];
  const err = [a, b, kw].some((n) => Number.isNaN(n)) ? 'Enter numbers in every field.' : a < 0 || b > 100 ? 'Battery levels must be between 0 and 100.' : a >= b ? 'Target charge must be higher than current charge.' : kw < 1 || kw > 350 ? 'Charging power must be between 1 and 350 kW.' : '';
  const m = err ? 0 : chargeMinutes(v.kwh, a, b, kw);
  const num = (l: string, val: number, set: (n: number) => void) => <label className="flex flex-col gap-1 text-sm text-muted">{l}<input type="number" className={field} value={Number.isNaN(val) ? '' : val} onChange={(e) => set(e.target.valueAsNumber)} /></label>;
  return <div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><VehicleSelect value={s} onChange={setS} />{num('Current battery %', a, setA)}{num('Target battery %', b, setB)}{num('Charging power (kW)', kw, setKw)}</div>
    <p role={err ? 'alert' : 'status'} className={`mt-6 font-display text-4xl md:text-5xl ${err ? 'text-[#ffb4a8] !text-xl' : 'text-ice'}`}>{err || `About ${m >= 60 ? Math.floor(m / 60) + ' h ' : ''}${m % 60} min`}</p>
    <p className="mt-3 max-w-[60ch] text-sm text-muted">Simplified estimate: concept battery capacity ({v.kwh} kWh) ÷ charging power. It does not model charging curves, temperature or losses.</p></div>;
}
const modes: Record<string, number> = { Eco: 1.08, Normal: 1, Sport: 0.88 }; const weather: Record<string, number> = { Mild: 1, Cold: 0.82, Hot: 0.93, Rain: 0.92 }; const styles: Record<string, number> = { Smooth: 1.05, Balanced: 1, Spirited: 0.9 };
export function RangeEstimator() {
  const [s, setS] = useState('gt'); const [m, setM] = useState('Normal'); const [w, setW] = useState('Mild'); const [d, setD] = useState('Balanced'); const v = getVehicle(s) ?? vehicles[0];
  const f = modes[m] * weather[w] * styles[d]; const pct = Math.round((f - 1) * 100);
  const pick = (l: string, val: string, set: (x: string) => void, o: string[]) => <label className="flex flex-col gap-1 text-sm text-muted">{l}<select className={field} value={val} onChange={(e) => set(e.target.value)}>{o.map((x) => <option key={x}>{x}</option>)}</select></label>;
  return <div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><VehicleSelect value={s} onChange={setS} />{pick('Driving mode', m, setM, Object.keys(modes))}{pick('Weather', w, setW, Object.keys(weather))}{pick('Driving style', d, setD, Object.keys(styles))}</div>
    <p className="mt-6 font-display text-4xl text-ice md:text-5xl" aria-live="polite">{Math.round(v.range * f)} mi <span className="text-xl text-muted">({pct >= 0 ? '+' : ''}{pct}%)</span></p>
    <p className="mt-3 max-w-[60ch] text-sm text-muted">{v.name} concept range of {v.range} mi with {m} mode, {w.toLowerCase()} weather and {d.toLowerCase()} driving. Illustrative factors only, not a real-world range guarantee.</p></div>;
}
