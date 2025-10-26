import React from 'react';
import { Home, UtensilsCrossed, Sofa, BedDouble, Building2, Hotel, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-zinc-200/80 bg-white p-6 transition hover:shadow-xl hover:shadow-zinc-900/5">
    <div className="mb-4 inline-flex rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-zinc-800">
      <Icon className="size-5" />
    </div>
    <h4 className="font-medium text-zinc-900">{title}</h4>
    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-2 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-manrope text-3xl font-semibold text-zinc-900 sm:text-4xl">Services</h2>
            <p className="mt-2 max-w-2xl text-zinc-600">
              Tailored solutions for homes and brands. We balance aesthetics, ergonomics, and materiality to create spaces that feel effortless.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full border border-zinc-300/80 px-4 py-2 text-sm text-zinc-800 transition hover:border-zinc-400">
            Start a project
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* B2C */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-zinc-200/80 bg-zinc-50 p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-zinc-900">For Homeowners</h3>
              <span className="rounded-full border border-zinc-200/80 bg-white px-3 py-1 text-xs text-zinc-700">B2C</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card icon={Home} title="Home Interior" desc="End-to-end design for apartments and villas with thoughtful zoning and lighting." />
              <Card icon={UtensilsCrossed} title="Modular Kitchen" desc="Premium modular systems with smart storage, durable finishes, and seamless appliances." />
              <Card icon={Sofa} title="Living Room" desc="Warm, inviting lounges with layered textures, art curation, and bespoke furniture." />
              <Card icon={BedDouble} title="Bedrooms" desc="Calm retreats with soft palettes, millwork, and integrated wardrobes." />
            </div>
          </motion.div>

          {/* B2B */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-3xl border border-zinc-200/80 bg-zinc-50 p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-zinc-900">For Businesses</h3>
              <span className="rounded-full border border-zinc-200/80 bg-white px-3 py-1 text-xs text-zinc-700">B2B</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card icon={Hotel} title="Hotel Interiors" desc="Guest-first experiences with durable materials and brand-forward narratives." />
              <Card icon={UtensilsCrossed} title="Restaurants" desc="Distinct ambiences with acoustics, lighting, and layout engineered for flow." />
              <Card icon={Building2} title="Offices" desc="Human-centered workspaces with modularity, biophilia, and acoustic zoning." />
              <Card icon={Briefcase} title="Retail & More" desc="Concept-to-completion design for showrooms, clinics, and co-working." />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
