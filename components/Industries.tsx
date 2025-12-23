
import React from 'react';
import { Store, Rocket, ShoppingBag, Building2, GraduationCap, UserCircle } from 'lucide-react';

const industries = [
  { icon: <Store className="w-6 h-6" />, name: "Local Businesses" },
  { icon: <Rocket className="w-6 h-6" />, name: "Startups" },
  { icon: <ShoppingBag className="w-6 h-6" />, name: "E-commerce Stores" },
  { icon: <Building2 className="w-6 h-6" />, name: "Real Estate" },
  { icon: <GraduationCap className="w-6 h-6" />, name: "Education Institutes" },
  { icon: <UserCircle className="w-6 h-6" />, name: "Personal Brands" }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16">Industries We Work With</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
              <div className="text-blue-600 mb-4 bg-white p-4 rounded-xl shadow-sm">
                {item.icon}
              </div>
              <span className="text-center font-bold text-slate-700 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
