
import React from 'react';

const steps = [
  { title: "Business Analysis", desc: "Understanding your goals and market landscape." },
  { title: "Strategy Planning", desc: "Crafting a custom roadmap for your growth." },
  { title: "Campaign Execution", desc: "Launching high-impact marketing initiatives." },
  { title: "Optimization", desc: "Refining results based on real-time data." },
  { title: "Monthly Reporting", desc: "Detailed insights on your performance." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">Our Working Process</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
                
                {/* Mobile Connector */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-blue-200 mx-auto my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
