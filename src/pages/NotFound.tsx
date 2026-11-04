import Button from '../components/common/Button'; import { useTitle } from '../hooks/useTitle';
export default function NotFound({ what = 'page' }: { what?: string }) {
  useTitle('Not found — VOLT');
  return <section className="grid min-h-[70vh] place-content-center gap-6 bg-obsidian px-5 text-center text-platinum"><h1 className="text-6xl md:text-8xl">404</h1><p className="text-muted">We couldn’t find that {what}.</p><div className="flex justify-center gap-3"><Button to="/" variant="primary">Back to home</Button><Button to="/vehicles">View vehicles</Button></div></section>;
}
