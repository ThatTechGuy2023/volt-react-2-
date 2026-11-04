import type { Option, Slug, Vehicle } from '../types';
export const vehicles: Vehicle[] = [
 { slug: 'gt', name: 'VOLT GT', category: 'Electric Grand Tourer', price: 92900, range: 410, acc: 3.2, drive: 'Dual motor AWD', kwh: 105, shape: 0,
   blurb: 'A sleek, aerodynamic grand touring coupe with an aggressive but elegant stance.',
   features: ['Adaptive air suspension', 'Panoramic glass roof', 'Concept driver assistance', 'Over-the-air updates'],
   trims: [{ name: 'Standard', price: 0 }, { name: 'Touring', price: 6000 }, { name: 'Signature', price: 14000 }] },
 { slug: 'one', name: 'VOLT ONE', category: 'Electric Performance Sedan', price: 68900, range: 390, acc: 3.8, drive: 'Rear-wheel drive', kwh: 92, shape: 1,
   blurb: 'A performance sedan with clean lines, a sculpted body and a minimalist interior.',
   features: ['Minimalist cabin', 'Rear-drive balance', 'Concept driver assistance', 'Over-the-air updates'],
   trims: [{ name: 'Standard', price: 0 }, { name: 'Sport', price: 5000 }, { name: 'Signature', price: 11000 }] },
 { slug: 'x', name: 'VOLT X', category: 'Luxury Electric SUV', price: 79900, range: 370, acc: 4.1, drive: 'Dual motor AWD', kwh: 110, shape: 2,
   blurb: 'A commanding SUV with elegant proportions and a spacious, calm interior.',
   features: ['Spacious family-ready cabin', 'Adaptive air suspension', 'Concept driver assistance', 'Over-the-air updates'],
   trims: [{ name: 'Standard', price: 0 }, { name: 'Explorer', price: 5500 }, { name: 'Signature', price: 13000 }] },
];
export const getVehicle = (s?: string): Vehicle | undefined => vehicles.find((v) => v.slug === (s as Slug));
export const paints: Option[] = [
 { name: 'Obsidian Black', price: 0, color: '#15191c' }, { name: 'Glacier Silver', price: 1200, color: '#b4bcc3' },
 { name: 'Arctic White', price: 1200, color: '#eef1f3' }, { name: 'Midnight Blue', price: 1800, color: '#1c2f52' }, { name: 'Titanium Grey', price: 1800, color: '#5d656c' }];
export const wheels: Option[] = [{ name: '19-inch Aero', price: 0, size: 19 }, { name: '20-inch Sport', price: 1500, size: 20 }, { name: '21-inch Performance', price: 2800, size: 21 }];
export const interiors: Option[] = [{ name: 'Obsidian Interior', price: 0, color: '#1a1d20' }, { name: 'Arctic White Interior', price: 1500, color: '#eceff1' }, { name: 'Graphite Interior', price: 900, color: '#3a4248' }];
