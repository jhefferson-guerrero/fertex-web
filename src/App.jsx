import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Gallery from './components/Gallery';
import Instructors from './components/Instructors';
import Location from './components/Location';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-fertex-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Gallery />
        <Instructors />
        <Location />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
