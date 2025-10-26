import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignette to enhance legibility without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col items-start justify-center px-6 py-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs tracking-wide text-black/70 backdrop-blur"
        >
          Interior Design Agency • Residential & Commercial
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-manrope text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl md:text-6xl"
        >
          Minimalist luxury for modern living
          <span className="block text-zinc-500">Spaces that breathe. Details that matter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg"
        >
          We craft elevated interiors for discerning homeowners and future-forward brands. From calm, curated homes to hospitality and workspace experiences—our work blends function with a timeless aesthetic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Book consultation
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300/80 bg-white px-6 py-3 text-sm font-medium text-zinc-800 backdrop-blur transition hover:border-zinc-400"
          >
            Explore portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
