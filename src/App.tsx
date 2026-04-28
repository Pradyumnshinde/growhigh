/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import CaseStudy from './components/CaseStudy';
import Process from './components/Process';
import Founder from './components/Founder';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-zinc-50 font-sans selection:bg-zinc-800 selection:text-white relative bg-zinc-950">
      <Navbar />
      <Hero />
      <Showcase />
      <CaseStudy />
      <div id="process">
        <Process />
      </div>
      <Founder />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
}
