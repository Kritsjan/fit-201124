import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sitemap from './pages/Sitemap';
import TrackMacros from './pages/TrackMacros';
import BodyComposition from './pages/BodyComposition';
import HeartHealth from './pages/HeartHealth';
import IdealWeight from './pages/IdealWeight';
import KetoCalculator from './pages/KetoCalculator';
import IntermittentFasting from './pages/IntermittentFasting';
import MacroCalculator from './pages/MacroCalculator';
import ProteinCalculator from './pages/ProteinCalculator';
import BodyFatCalculator from './pages/BodyFatCalculator';
import WaistHipRatioCalculator from './pages/WaistHipRatioCalculator';
import ObesityCalculator from './pages/ObesityCalculator';
import IdealWeightCalculator from './pages/IdealWeightCalculator';
import LeanBodyMassCalculator from './pages/LeanBodyMassCalculator';
import MaxHeartRateCalculator from './pages/MaxHeartRateCalculator';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 flex flex-col">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* Category Routes */}
        <Route path="/category/track-macros" element={<TrackMacros />} />
        <Route path="/category/body-composition" element={<BodyComposition />} />
        <Route path="/category/heart-health" element={<HeartHealth />} />
        <Route path="/category/ideal-weight" element={<IdealWeight />} />
        
        {/* Calculator Routes */}
        <Route path="/keto-calculator" element={<KetoCalculator />} />
        <Route path="/intermittent-fasting-calculator" element={<IntermittentFasting />} />
        <Route path="/macro-calculator" element={<MacroCalculator />} />
        <Route path="/protein-calculator" element={<ProteinCalculator />} />
        <Route path="/body-fat-calculator" element={<BodyFatCalculator />} />
        <Route path="/waist-hip-ratio-calculator" element={<WaistHipRatioCalculator />} />
        <Route path="/obesity-calculator" element={<ObesityCalculator />} />
        <Route path="/ideal-weight-calculator" element={<IdealWeightCalculator />} />
        <Route path="/lean-body-mass-calculator" element={<LeanBodyMassCalculator />} />
        <Route path="/max-heart-rate-calculator" element={<MaxHeartRateCalculator />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;