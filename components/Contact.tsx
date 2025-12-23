
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Contact Us</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-8">Get in Touch with Our Experts</h2>
            <p className="text-slate-500 mb-12 text-lg">
              Have questions about how we can help your business? Fill out the form or use our direct contact information below.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Call Us Directly</div>
                  <a href="tel:7903059627" className="text-xl font-bold text-slate-900">+91 7903059627</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Email Address</div>
                  <a href="mailto:editraja555@gmail.com" className="text-xl font-bold text-slate-900">editraja555@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Our Presence</div>
                  <div className="text-xl font-bold text-slate-900">Available Remotely Worldwide</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} placeholder="Tell us about your business goals..." className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98]">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
