import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="w-full pt-20">
      
      <div className="py-12 px-4 md:px-6 text-center border-b border-white/10 bg-panel">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">Let's Talk Strategy</h1>
        <p className="text-gray-400 font-mono">Choose how you want to connect.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid lg:grid-cols-2 gap-12">
        
        {/* Left: Calendly */}
        <div className="bg-navy border border-white/10 p-6 md:p-8 shadow-2xl order-2 lg:order-1">
          <h2 className="text-2xl font-display font-bold text-white mb-2 uppercase">Book a Demo Call</h2>
          <p className="text-gray-400 mb-8 text-sm font-mono">
            15-minute discovery call to discuss your needs. We'll talk about your decision-making needs, data sources, and timeline.
          </p>
          
          {/* Calendly Placeholder/Mock */}
          <div className="w-full h-[500px] md:h-[600px] bg-black border border-white/10 relative">
             <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col gap-4">
                <p className="font-mono text-xs uppercase">/// Calendly Embed Would Go Here</p>
                <Button variant="primary">Select a Time</Button>
             </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-black border border-white/10 p-6 md:p-8 h-fit order-1 lg:order-2">
          <h2 className="text-2xl font-display font-bold text-white mb-2 uppercase">Request a Quote</h2>
          <p className="text-gray-400 mb-8 text-sm font-mono">
            Prefer email? Fill out this comprehensive form and we'll get back to you with a custom proposal.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono font-bold text-electric uppercase tracking-wider mb-2">Name*</label>
                <input type="text" className="w-full bg-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors font-mono text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-electric uppercase tracking-wider mb-2">Email*</label>
                <input type="email" className="w-full bg-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors font-mono text-sm" placeholder="john@company.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-electric uppercase tracking-wider mb-2">Industry*</label>
              <select className="w-full bg-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors font-mono text-sm">
                <option>Racing & Motorsports</option>
                <option>Drone Operations</option>
                <option>Fleet Management</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                 <label className="block text-xs font-mono font-bold text-electric uppercase tracking-wider mb-2">Which Tier?</label>
                 <select className="w-full bg-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors font-mono text-sm">
                  <option>Professional ($25k)</option>
                  <option>Enterprise ($60k+)</option>
                  <option>Unsure</option>
                </select>
              </div>
              <div>
                 <label className="block text-xs font-mono font-bold text-electric uppercase tracking-wider mb-2">Data Sources</label>
                 <input type="text" className="w-full bg-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors font-mono text-sm" placeholder="API, SQL, CSV..." />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-electric uppercase tracking-wider mb-2">What decisions do you need to make faster?</label>
              <textarea rows={4} className="w-full bg-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors font-mono text-sm" placeholder="We need to decide when to pit..."></textarea>
            </div>

            <Button fullWidth>Submit Request</Button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;