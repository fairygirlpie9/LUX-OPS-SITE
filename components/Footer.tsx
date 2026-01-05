import React from 'react';
import { Hexagon, LinkedinLogo, TwitterLogo, MapPin, Envelope } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Hexagon weight="fill" className="w-6 h-6 text-electric" />
            <span className="text-lg font-display font-bold text-white uppercase tracking-widest">LUX OPS</span>
          </div>
          <p className="text-gray-500 mb-6 max-w-xs font-mono text-xs">
            Intelligence made visible. Transforming complex telemetry into beautiful, actionable insights for high-stakes operations.
          </p>
          <div className="text-xs font-mono text-gray-600 uppercase">
            © 2025 Lux Ops. System Active.
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="grid grid-cols-2 gap-8 font-mono text-sm uppercase">
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/demo/racing" className="text-gray-500 hover:text-electric transition-colors">Racing</Link></li>
              <li><Link to="/demo/drones" className="text-gray-500 hover:text-electric transition-colors">Drone Ops</Link></li>
              <li><Link to="/demo/fleet" className="text-gray-500 hover:text-electric transition-colors">Fleet</Link></li>
              <li><Link to="/pricing" className="text-gray-500 hover:text-electric transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-electric transition-colors">About</Link></li>
              <li><Link to="/industries" className="text-gray-500 hover:text-electric transition-colors">Sectors</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-electric transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="font-mono text-sm">
          <h4 className="text-white font-bold mb-4 uppercase">Comms</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-500">
              <Envelope className="w-4 h-4 text-electric shrink-0" />
              <a href="mailto:hello@lux-ops.com" className="hover:text-white transition-colors uppercase">hello@lux-ops.com</a>
            </div>
            <div className="flex items-start gap-3 text-gray-500">
              <MapPin className="w-4 h-4 text-electric shrink-0" />
              <span className="uppercase">London, UK<br />Global Ops</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-electric border border-white/10 hover:border-electric transition-all">
                <LinkedinLogo className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-electric border border-white/10 hover:border-electric transition-all">
                <TwitterLogo className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;