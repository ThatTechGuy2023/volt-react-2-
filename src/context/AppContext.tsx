import { createContext, useContext, useState, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Config, Slug } from '../types';
interface Ctx { favs: Slug[]; toggleFav: (s: Slug) => void; compare: Slug[]; toggleCompare: (s: Slug) => void; clearCompare: () => void; saved: Config | null; setSaved: (c: Config | null) => void }
const AppCtx = createContext<Ctx | null>(null);
export function AppProvider({ children }: { children: ReactNode }) {
  const [favs, setFavs] = useLocalStorage<Slug[]>('volt-favs', []);
  const [saved, setSaved] = useLocalStorage<Config | null>('volt-config', null);
  const [compare, setCompare] = useState<Slug[]>([]);
  const toggleFav = (s: Slug) => setFavs((f) => (f.includes(s) ? f.filter((x) => x !== s) : [...f, s]));
  const toggleCompare = (s: Slug) => setCompare((c) => (c.includes(s) ? c.filter((x) => x !== s) : c.length < 3 ? [...c, s] : c));
  return <AppCtx.Provider value={{ favs, toggleFav, compare, toggleCompare, clearCompare: () => setCompare([]), saved, setSaved }}>{children}</AppCtx.Provider>;
}
export function useApp() { const c = useContext(AppCtx); if (!c) throw new Error('useApp must be used inside AppProvider'); return c; }
