
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Routes from './components/Routes';
import IncludedServices from './components/IncludedServices';
import ExtraServices from './components/ExtraServices';
import CustomTrips from './components/CustomTrips';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Routes />
        <IncludedServices />
        <ExtraServices />
        <CustomTrips />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
