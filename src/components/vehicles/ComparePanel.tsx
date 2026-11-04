import { X } from 'lucide-react';
import { getVehicle } from '../../data/vehicles';
import { useApp } from '../../context/AppContext';
import { money } from '../../utils/pricing';
import type { Vehicle } from '../../types';
import Button from '../common/Button';
const rows: [string, (v: Vehicle) => string][] = [['Starting price', (v) => money(v.price)], ['Estimated range', (v) => `${v.range} mi`], ['0–60 mph', (v) => `${v.acc} s`], ['Drivetrain', (v) => v.drive], ['Category', (v) => v.category], ['Battery (concept)', (v) => `${v.kwh} kWh`], ['Features', (v) => v.features.slice(0, 2).join(', ')]];
export default function ComparePanel() {
  const { compare, toggleCompare, clearCompare } = useApp(); const vs = compare.map(getVehicle).filter((v): v is Vehicle => !!v);
  if (!vs.length) return <p className="mt-12 border border-dashed border-charcoal/20 p-6 text-sm text-charcoal/60">Select up to three vehicles with Compare to see them side by side.</p>;
  return <div className="mt-12"><div className="mb-3 flex items-center justify-between"><h2 className="text-3xl">Compare</h2><Button onClick={clearCompare}>Clear all</Button></div>
    <div className="overflow-x-auto"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead><tr><th className="p-3" />{vs.map((v) => <th key={v.slug} className="p-3 font-display text-xl">{v.name}<button aria-label={`Remove ${v.name} from comparison`} onClick={() => toggleCompare(v.slug)} className="ml-2 inline-grid size-8 place-items-center align-middle"><X size={16} /></button></th>)}</tr></thead>
      <tbody>{rows.map(([l, f]) => <tr key={l} className="border-t border-charcoal/10"><th scope="row" className="p-3 font-normal text-charcoal/60">{l}</th>{vs.map((v) => <td key={v.slug} className="p-3">{f(v)}</td>)}</tr>)}</tbody></table></div></div>;
}
