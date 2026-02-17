
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import GrowDigital from './components/GrowDigital';
import Partnerships from './components/Partnerships';
import WhyChoose from './components/WhyChoose';
import Support from './components/Support';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesGrid />
        <GrowDigital />
        <Partnerships />
        <WhyChoose />
        <Support />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default App;
