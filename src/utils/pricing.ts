import { getVehicle, interiors, paints, vehicles, wheels } from '../data/vehicles';
import type { Config } from '../types';
export const money = (n: number) => '$' + n.toLocaleString('en-US');
export function priceLines(c: Config) {
  const v = getVehicle(c.slug) ?? vehicles[0];
  const lines = [
    { label: 'Base price', price: v.price }, { label: `Trim: ${v.trims[c.trim]?.name ?? ''}`, price: v.trims[c.trim]?.price ?? 0 },
    { label: `Paint: ${paints[c.paint].name}`, price: paints[c.paint].price }, { label: `Wheels: ${wheels[c.wheel].name}`, price: wheels[c.wheel].price },
    { label: interiors[c.interior].name, price: interiors[c.interior].price }];
  return { lines, total: lines.reduce((a, l) => a + l.price, 0) };
}
export const chargeMinutes = (kwh: number, from: number, to: number, kw: number) => Math.round(((kwh * (to - from)) / 100 / kw) * 60);
