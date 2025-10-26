import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import PortfolioGrid from './components/PortfolioGrid';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="font-manrope text-lg font-semibold tracking-tight">Atelier Form</a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-700 sm:flex">
            <a href="#portfolio" className="hover:text-zinc-900">Portfolio</a>
            <a href="#services" className="hover:text-zinc-900">Services</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
            <a href="#" className="rounded-full border border-zinc-300/80 px-3 py-1.5 hover:border-zinc-400">B2B</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <PortfolioGrid />
        <Testimonials />

        {/* Contact CTA */}
        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl rounded-3xl border border-zinc-200/80 bg-zinc-50 p-8">
              <h3 className="font-manrope text-2xl font-semibold">Start your project</h3>
              <p className="mt-2 text-zinc-600">Tell us a little about your space and goals. We’ll get back within one business day.</p>
              <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-sm text-zinc-700">Full name</label>
                  <input className="w-full rounded-xl border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 outline-none ring-zinc-900/10 focus:ring-2" placeholder="Jane Doe" />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-sm text-zinc-700">Email</label>
                  <input type="email" className="w-full rounded-xl border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 outline-none ring-zinc-900/10 focus:ring-2" placeholder="jane@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-zinc-700">Project details</label>
                  <textarea rows={4} className="w-full rounded-xl border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 outline-none ring-zinc-900/10 focus:ring-2" placeholder="Apartment in Bandra, 2BHK — scandinavian palette, budget, timeline..." />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between">
                  <p className="text-xs text-zinc-600">By submitting, you agree to our privacy policy.</p>
                  <button type="button" onClick={() => alert('Thanks! This is a demo UI.')} className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
                    Send inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/80 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Atelier Form. All rights reserved.</p>
          <div className="text-sm text-zinc-600">Instagram · Behance · LinkedIn</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
