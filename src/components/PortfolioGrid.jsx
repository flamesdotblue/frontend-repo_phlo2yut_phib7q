import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, title: 'Calacatta Kitchen', category: 'Residential', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Serene Bedroom', category: 'Residential', image: 'https://images.unsplash.com/photo-1652458316788-90b1c3dfb984?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYWxhY2F0dGElMjBLaXRjaGVufGVufDB8MHx8fDE3NjE0NjE4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Minimal Living', category: 'Residential', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Boutique Hotel Lounge', category: 'Commercial', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Modern Office', category: 'Commercial', image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Chef-led Restaurant', category: 'Commercial', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop' },
];

const PortfolioGrid = () => {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-manrope text-3xl font-semibold text-zinc-900 sm:text-4xl">Portfolio</h2>
            <p className="mt-2 max-w-2xl text-zinc-600">Selected work across residential and commercial spaces.</p>
          </div>
          <div className="inline-flex rounded-full border border-zinc-200/80 bg-white p-1 text-sm">
            {['All', 'Residential', 'Commercial'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-full px-4 py-1.5 transition ${filter === tab ? 'bg-zinc-900 text-white' : 'text-zinc-700 hover:bg-zinc-50'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4">
                  <div>
                    <div className="text-sm font-medium text-white/90">{item.title}</div>
                    <div className="text-xs text-white/70">{item.category}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
