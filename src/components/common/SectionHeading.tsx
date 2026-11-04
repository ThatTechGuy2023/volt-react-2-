import Reveal from './Reveal';
export default function SectionHeading({ title, text, dark = false, h1 = false }: { title: string; text?: string; dark?: boolean; h1?: boolean }) {
  const H = h1 ? 'h1' : 'h2';
  return <Reveal><H className="max-w-[18ch] text-4xl md:text-6xl">{title}</H>{text && <p className={`mt-5 max-w-[56ch] ${dark ? 'text-muted' : 'text-charcoal/70'}`}>{text}</p>}</Reveal>;
}
