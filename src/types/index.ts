export type Slug = 'gt' | 'one' | 'x';
export interface Trim { name: string; price: number }
export interface Vehicle { slug: Slug; name: string; category: string; price: number; range: number; acc: number; drive: string; kwh: number; shape: 0 | 1 | 2; blurb: string; features: string[]; trims: Trim[] }
export interface Option { name: string; price: number; color?: string; size?: number }
export interface Config { slug: Slug; trim: number; paint: number; wheel: number; interior: number }
