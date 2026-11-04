import { motion } from 'motion/react';
import type { ReactNode } from 'react';
export default function Reveal({ children, className = '', d = 0 }: { children: ReactNode; className?: string; d?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
