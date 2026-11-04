import type { Option } from '../../types';
import { money } from '../../utils/pricing';
export default function Selector({ label, options, value, onChange }: { label: string; options: Option[]; value: number; onChange: (i: number) => void }) {
  return <div role="radiogroup" aria-label={label} className="grid gap-3 sm:grid-cols-2">{options.map((o, i) => <button key={o.name} role="radio" aria-checked={value === i} onClick={() => onChange(i)} className={`flex min-h-16 items-center gap-3 border p-4 text-left transition-all ${value === i ? 'border-charcoal shadow-[inset_0_0_0_1px_#111418]' : 'border-charcoal/15 hover:border-charcoal/50'}`}>
    {o.color && <span className="size-8 shrink-0 rounded-full border border-charcoal/20" style={{ background: o.color }} />}<span className="flex-1">{o.name}</span><span className="text-sm text-charcoal/60">{o.price ? '+' + money(o.price) : 'Included'}</span></button>)}</div>;
}
