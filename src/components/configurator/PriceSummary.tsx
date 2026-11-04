import { motion } from 'motion/react';
import type { Config } from '../../types';
import { money, priceLines } from '../../utils/pricing';
export default function PriceSummary({ config }: { config: Config }) {
  const { lines, total } = priceLines(config);
  return <div className="border border-charcoal/15 bg-white p-5" aria-live="polite"><table className="w-full text-sm"><tbody>{lines.map((l) => <tr key={l.label} className="border-b border-charcoal/10"><td className="py-2">{l.label}</td><td className="py-2 text-right">{money(l.price)}</td></tr>)}</tbody></table>
    <p className="mt-4 text-sm text-charcoal/60">Final estimated price</p><motion.p key={total} initial={{ opacity: 0.3, y: 8 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl">{money(total)}</motion.p></div>;
}
