
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Industries from './components/Industries';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIStrategyModal from './components/AIStrategyModal';

const App: React.FC = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const openAIModal = () => setIsAIModalOpen(true);
  const closeAIModal = () => setIsAIModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero onConsultationClick={openAIModal} />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Industries />
        <CTA onStartClick={openAIModal} />
        <Contact />
      </main>
      <Footer />
      
      {isAIModalOpen && <AIStrategyModal onClose={closeAIModal} />}
    </div>
  );
};

export default App;
