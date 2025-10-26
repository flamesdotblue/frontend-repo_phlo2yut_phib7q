import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Akshay P.',
    role: 'Apartment Owner',
    quote:
      'They transformed our 2BHK into a calming, functional home. The material palette and lighting plan are impeccable.',
  },
  {
    name: 'Maya & Raghav',
    role: 'Villa Owners',
    quote:
      'From concept to execution, everything felt seamless. The team listened deeply and delivered beyond expectations.',
  },
  {
    name: 'Saffron Street',
    role: 'Restaurant Brand',
    quote:
      'Our new space has doubled dwell time. Guests constantly compliment the ambiance and detailing.',
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-manrope text-3xl font-semibold text-zinc-900 sm:text-4xl">Testimonials</h2>
            <p className="mt-2 max-w-2xl text-zinc-600">What our clients say about living and working in the spaces we create.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6"
            >
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-zinc-700">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-9 rounded-full bg-zinc-200" />
                <div>
                  <div className="text-sm font-medium text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-600">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
