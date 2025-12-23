
import React from 'react';
import { Target, TrendingUp, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Team Work" className="rounded-2xl h-64 object-cover w-full mt-8 shadow-lg" />
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" alt="Brainstorming" className="rounded-2xl h-64 object-cover w-full shadow-lg" />
            </div>
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-blue-50 scale-110 rounded-3xl translate-x-4 translate-y-4"></div>
          </div>

          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Who We Are</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">About Our Digital Marketing Agency</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              We are a result-oriented digital marketing agency helping startups, small businesses, and brands grow online. Our focus is on performance marketing, lead generation, and long-term business growth using modern digital tools and proven strategies.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Target className="text-blue-600" />, title: "Result-Oriented", desc: "Focusing on tangible business outcomes." },
                { icon: <TrendingUp className="text-blue-600" />, title: "Growth Focused", desc: "Scaling your brand to new heights." },
                { icon: <Cpu className="text-blue-600" />, title: "Tech Enabled", desc: "Utilizing the latest AI and data tools." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
