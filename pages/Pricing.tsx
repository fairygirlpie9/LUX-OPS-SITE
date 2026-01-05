import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, HelpCircle } from 'lucide-react';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <div className="py-16 md:py-20 px-4 md:px-6 text-center border-b border-white/10 bg-panel">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase">Pricing</h1>
        <p className="text-base md:text-lg font-mono text-gray-400 uppercase tracking-wide">Two tiers. Clear differences. No hidden fees.</p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Professional */}
          <div className="p-6 md:p-8 border border-white/10 bg-navy hover:border-white/30 transition-all">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 uppercase">Professional</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl md:text-4xl font-mono font-bold text-white">$25,000</span>
              <span className="text-xs font-mono text-gray-500 uppercase">/ One-time build</span>
            </div>
            <p className="text-gray-400 mb-8 h-auto md:h-12 font-mono text-sm">Real-time intelligence for operational teams.</p>
            <div className="space-y-4 mb-8">
              {[
                "Up to 3 API sources",
                "Up to 4 dashboard views",
                "15-20 AI rules",
                "10 user seats",
                "Custom styling",
                "2-week deployment",
                "60 days support",
                "Browser based",
                "Optional Monthly Retainer"
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                  <CheckCircle className="w-4 h-4 text-electric shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <Button variant="secondary" fullWidth>Book Demo</Button>
            </Link>
             <div className="mt-6 pt-6 border-t border-white/10 text-xs font-mono text-gray-500">
              <span className="block font-bold text-gray-400 mb-2 uppercase">Best for:</span>
              Single teams, Clear scope, Standard APIs
            </div>
          </div>

          {/* Enterprise */}
          <div className="p-6 md:p-8 border-2 border-electric bg-black relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-electric text-black font-mono text-xs font-bold px-3 py-1 uppercase">POPULAR</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-electric mb-2 uppercase">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-xs font-mono text-gray-400 uppercase">Starting at</span>
              <span className="text-3xl md:text-4xl font-mono font-bold text-white">$60,000</span>
            </div>
            <p className="text-gray-400 mb-8 h-auto md:h-12 font-mono text-sm">Mission-critical command centers.</p>
            <div className="space-y-4 mb-8">
              {[
                "Unlimited APIs",
                "Unlimited views",
                "30+ AI rules or ML",
                "Unlimited users",
                "Fully bespoke design",
                "1-2 week priority",
                "6 months support",
                "White-label option",
                "Dedicated account mgr",
                "Optional Monthly Retainer"
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-mono text-sm">
                  <CheckCircle className="w-4 h-4 text-electric shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <Button fullWidth>Book Demo</Button>
            </Link>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs font-mono text-gray-500">
              <span className="block font-bold text-gray-400 mb-2 uppercase">Best for:</span>
              Mission-critical ops, Multi-location, Complex integrations
            </div>
          </div>

        </div>

        {/* Add-ons */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white text-center mb-8 md:mb-12 uppercase">Optional Monthly Retainers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Basic", price: "$2,000/mo", features: ["Bug fixes", "Minor updates", "Up to 5 hrs/mo"] },
              { name: "Standard", price: "$4,000/mo", features: ["Everything in Basic", "Monthly optimization", "1 new feature/qtr", "Up to 12 hrs"] },
              { name: "Premium", price: "$8,000/mo", features: ["Bi-weekly strategy", "New features as needed", "Priority support (4hr)", "Dedicated mgr"] }
            ].map((plan, i) => (
              <div key={i} className="p-6 border border-white/10 bg-panel hover:border-electric transition-colors">
                <h4 className="font-display font-bold text-white mb-2 uppercase">{plan.name}</h4>
                <div className="text-xl font-mono font-bold text-electric mb-4">{plan.price}</div>
                <ul className="space-y-2 text-xs font-mono text-gray-400">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                       <span className="w-1 h-1 bg-electric mt-1.5 shrink-0"></span>
                       {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-500 font-mono text-xs">
            Retainers ensure your system evolves with your operations.
          </div>
        </div>
        
        {/* FAQ */}
        <div className="py-16 md:py-24 px-4 md:px-6 border-t border-white/5 mt-16 md:mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-center mb-8 md:mb-12 uppercase">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {[
                { q: "How long does it take to build?", a: "Professional tier takes 2 weeks. Enterprise tier takes 1-2 weeks with priority queue." },
                { q: "What if I need changes after launch?", a: "Professional tier includes 60 days of bug fixes. Enterprise includes 6 months plus significant changes. For long term, we recommend a retainer." },
                { q: "Can I start with Professional and upgrade?", a: "Yes! Many clients start with Professional to prove ROI, then expand to Enterprise for multi-location or advanced features." },
                { q: "Do you offer 24/7 support?", a: "No. Our support is business hours (Mon-Fri 9am-6pm GMT) with 4-hour response for Enterprise. However, our proactive monitoring catches most issues before you do." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-8 last:border-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 flex items-start md:items-center gap-3 font-display uppercase">
                    <HelpCircle className="w-5 h-5 text-gray-500 shrink-0 mt-0.5 md:mt-0" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 pl-8 leading-relaxed font-mono text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;