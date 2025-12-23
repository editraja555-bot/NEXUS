
import React from 'react';
import { Search, Share2, MousePointer2, Layout, PenTool, Mail, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8 text-blue-600" />,
    title: "Search Engine Optimization (SEO)",
    description: "Improve Google rankings to get organic traffic and long-term growth.",
    points: ["Keyword Research", "On-Page SEO", "Technical SEO", "Off-Page SEO", "Local SEO"]
  },
  {
    icon: <Share2 className="w-8 h-8 text-blue-600" />,
    title: "Social Media Marketing",
    description: "Grow and manage social media pages with engaging content.",
    points: ["Instagram & Facebook Marketing", "Content Planning", "Reels & Creatives", "Engagement Growth"]
  },
  {
    icon: <MousePointer2 className="w-8 h-8 text-blue-600" />,
    title: "Paid Advertising (Ads)",
    description: "Run high-converting ads to generate instant leads and sales.",
    points: ["Google Ads", "Facebook & Instagram Ads", "Lead Generation", "Remarketing"]
  },
  {
    icon: <Layout className="w-8 h-8 text-blue-600" />,
    title: "Website Design & Development",
    description: "Build fast, mobile-friendly, conversion-focused websites.",
    points: ["Business Websites", "Landing Pages", "Responsive Design", "Speed Optimization", "Basic SEO"]
  },
  {
    icon: <PenTool className="w-8 h-8 text-blue-600" />,
    title: "Content Creation",
    description: "Create high-quality content to build trust and engagement.",
    points: ["Graphic Design", "Short Videos & Reels", "Thumbnails", "Content Strategy"]
  },
  {
    icon: <Mail className="w-8 h-8 text-blue-600" />,
    title: "Email & WhatsApp Marketing",
    description: "Directly connect with customers through automated messaging.",
    points: ["Email Campaigns", "Newsletters", "WhatsApp Automation", "Follow-ups"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">Our Digital Marketing Services</h2>
          <p className="text-slate-600">Comprehensive solutions designed to accelerate your brand's digital presence and maximize ROI.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                    {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
