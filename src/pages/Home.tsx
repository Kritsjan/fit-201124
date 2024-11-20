import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Scale, Target } from 'lucide-react';

function Home() {
  useEffect(() => {
    document.title = 'Health Calculator: Free Online Health & Fitness Calculators';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free online health calculators for body composition, macros, heart health, and ideal weight. Get personalized health insights and recommendations instantly.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Welcome to MyHealthCalculator.fit
          </h1>
          
          <p className="text-lg text-gray-600">
            Your go-to free online health calculator! We provide tools to help you understand your health metrics, 
            make informed decisions, and take action for better health.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Unlock Your Health Potential
            </h2>
            <p className="text-gray-600">Discover the hidden stories behind your health data.</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Crunch the Numbers, Anywhere, Anytime
            </h2>
            <p className="text-gray-600">Access powerful health insights on any device, without spending a dime.</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Simplicity Meets Sophistication
            </h2>
            <p className="text-gray-600">Complex health metrics, simplified. Get expert-level insights without the confusion.</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Your Personal Health Detective
            </h2>
            <p className="text-gray-600">Uncover detailed health clues and actionable recommendations tailored just for you.</p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Track Macros Section */}
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/track-macros" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Activity className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Track Macros</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/keto-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Keto Calculator
                </Link>
                <Link to="/intermittent-fasting-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Intermittent Fasting
                </Link>
                <Link to="/macro-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Macro Calculator
                </Link>
                <Link to="/protein-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Protein Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Body Composition Section */}
          <div className="bg-gradient-to-br from-cyan-600 to-teal-500 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/body-composition" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Scale className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Body Composition</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/body-fat-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Body Fat Calculator
                </Link>
                <Link to="/waist-hip-ratio-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Waist-to-Hip Ratio
                </Link>
                <Link to="/obesity-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Obesity Calculator
                </Link>
                <Link to="/lean-body-mass-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Lean Body Mass
                </Link>
              </div>
            </div>
          </div>

          {/* Heart Health Section */}
          <div className="bg-gradient-to-br from-teal-600 to-emerald-500 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/heart-health" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Heart className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Heart Health</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/max-heart-rate-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Max Heart Rate Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Find Ideal Weight Section */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/ideal-weight" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Target className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Find Ideal Weight</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/ideal-weight-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Ideal Weight Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;