
import React from 'react';
import { Award, DollarSign, BarChart3, Users, Zap } from 'lucide-react';

const reasons = [
  { icon: <Zap className="text-blue-600" />, text: "Result-Driven Strategy" },
  { icon: <DollarSign className="text-blue-600" />, text: "Affordable Pricing" },
  { icon: <BarChart3 className="text-blue-600" />, text: "Transparent Reporting" },
  { icon: <Users className="text-blue-600" />, text: "Dedicated Support" },
  { icon: <Award className="text-blue-600" />, text: "Proven Growth Methods" }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
             <div className="w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-6">Why Choose Our Agency</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We combine creative thinking with data analytics to deliver marketing campaigns that actually convert. Our approach is built on trust, excellence, and a relentless pursuit of growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                       {reason.icon}
                    </div>
                    <span className="text-white font-medium">{reason.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-dashed border-blue-500/30 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-48 h-48 md:w-60 md:h-60 bg-blue-600 rounded-full flex flex-col items-center justify-center text-center p-6 text-white">
                    <span className="text-4xl md:text-5xl font-black mb-1">98%</span>
                    <span className="text-xs uppercase font-bold tracking-widest opacity-80">Client Retention</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
