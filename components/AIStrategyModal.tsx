import React, { useState } from 'react';
import { X, Sparkles, Loader2, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface AIStrategyModalProps {
  onClose: () => void;
}

const AIStrategyModal: React.FC<AIStrategyModalProps> = ({ onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [strategy, setStrategy] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateStrategy = async () => {
    if (!businessName || !industry) return;
    setLoading(true);
    setError(null);

    try {
      // Initialize GoogleGenAI with the API key directly from environment variables
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Act as a world-class digital marketing expert. Generate a concise, high-impact digital marketing strategy for a business named "${businessName}" in the "${industry}" industry. Focus on lead generation, brand awareness, and conversions. Format the output nicely with bullet points.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setStrategy(response.text || "Sorry, I couldn't generate a strategy at this time.");
    } catch (err) {
      setError("Failed to generate strategy. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8 md:p-12">
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
            <X size={28} />
          </button>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
              <Sparkles />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">AI Strategy Assistant</h3>
              <p className="text-slate-500 text-sm">Get a custom growth roadmap in seconds.</p>
            </div>
          </div>

          {!strategy ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Nexus Tech" 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Industry</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. E-commerce, Real Estate..." 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                />
              </div>
              
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <button 
                onClick={generateStrategy}
                disabled={loading || !businessName || !industry}
                className="w-full bg-blue-600 text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Analyzing Market Data...
                  </>
                ) : (
                  <>
                    Generate My Strategy
                    <Send size={20} />
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 p-6 rounded-2xl max-h-[400px] overflow-y-auto custom-scrollbar">
                <div className="prose prose-slate prose-sm max-w-none">
                  {strategy.split('\n').map((line, i) => (
                    <p key={i} className="mb-2 text-slate-700">{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setStrategy(null)}
                  className="flex-1 border border-slate-200 text-slate-600 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all"
                >
                  Start Over
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg transition-all"
                >
                  Close & Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AIStrategyModal;