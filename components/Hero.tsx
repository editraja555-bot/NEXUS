
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onConsultationClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsultationClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Animated Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-blob-slow"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] animate-blob-slower"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Modern Marketing Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Grow Your Business with <span className="text-blue-500">Smart</span> Digital Marketing
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
            We help businesses generate leads, increase sales, and build a strong online presence using data-driven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onConsultationClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 hover:scale-105 hover:brightness-110 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/20"
            >
              Get Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-xl font-bold text-lg text-white border border-slate-700 hover:bg-white/5 transition-all text-center"
            >
              Contact Us
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 20}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-slate-900" 
                  alt="Client"
                />
              ))}
            </div>
            <div className="text-sm text-slate-400">
              <span className="text-white font-bold">500+</span> Businesses grown worldwide
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
             <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Marketing Analytics" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-float">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Monthly Active Growth</div>
              <div className="text-xl font-bold text-slate-900">+124% Results</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob-slow {
          animation: blob-drift 20s ease-in-out infinite;
        }
        .animate-blob-slower {
          animation: blob-drift 30s ease-in-out infinite reverse;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
