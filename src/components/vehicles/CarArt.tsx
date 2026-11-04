import { useId } from 'react';
interface P { shape: 0 | 1 | 2; color?: string; wheel?: number; label: string; className?: string }
const BODY = ['M55 172 Q100 128 250 108 Q340 58 470 62 Q600 70 650 112 Q735 124 748 172 Z', 'M60 172 Q90 110 230 98 Q300 56 420 54 Q540 58 600 100 Q720 112 745 172 Z', 'M70 170 L110 95 Q130 62 190 58 L560 58 Q640 62 690 110 L735 170 Z'];
const WIN = ['M290 110 Q360 72 465 74 Q560 80 610 110 Z', 'M270 106 Q330 66 425 66 Q520 68 570 106 Z', 'M205 72 L545 72 Q600 80 640 112 L190 112 Z'];
export default function CarArt({ shape, color = '#8d979e', wheel = 20, label, className = '' }: P) {
  const id = useId().replace(/:/g, ''); const r = wheel / 2 + 8;
  const wh = (x: number) => <g key={x}><circle cx={x} cy={178} r={r + 22} fill="#07090a" /><circle cx={x} cy={178} r={r + 8} fill="#2b3237" /><circle cx={x} cy={178} r={r - 6} fill="#9aa3aa" opacity=".7" /></g>;
  return <svg viewBox="0 0 800 260" role="img" aria-label={label} className={className}>
    <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".35" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".35" /></linearGradient></defs>
    <ellipse cx="400" cy="235" rx="340" ry="12" fill="#000" opacity=".4" />{[190, 610].map(wh)}
    <path d={BODY[shape]} fill={color} style={{ transition: 'fill .5s' }} /><path d={BODY[shape]} fill={`url(#${id})`} />
    <path d={WIN[shape]} fill="#0a1216" stroke="#B9F3FF" strokeOpacity=".25" /><rect x="735" y="150" width="14" height="5" fill="#B9F3FF" /></svg>;
}
