
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CTAProps {
  onStartClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onStartClick }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl text-blue-50 opacity-90 mb-10">
              Let’s build your online presence and generate real results for your business. Join dozens of companies scaling their revenue today.
            </p>
            <button 
              onClick={onStartClick}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-black text-xl hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Get Started Now
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
