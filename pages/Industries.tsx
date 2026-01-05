import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, Plane, Truck, ArrowRight, Hexagon, Cpu } from 'lucide-react';
import Button from '../components/Button';

const Industries: React.FC = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <div className="py-16 md:py-24 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 uppercase">Built For Your Industry</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-mono">
          We understand the unique decision-making needs of racing teams, drone operators, fleet managers, and esports coaches.
        </p>
      </div>

      {/* Deep Dives */}
      <div className="space-y-0 border-t border-white/10">
        
        {/* Racing */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-panel border-b border-white/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-1 md:order-1 relative border border-white/10 p-2">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-electric"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-electric"></div>
              <img src="https://i.ibb.co/r20kTnvW/motorsports-lux-ops.jpg" alt="Racing Dashboard" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="order-2 md:order-2">
              <div className="flex items-center gap-3 mb-4 text-electric">
                <Flag className="w-6 h-6" />
                <span className="font-mono font-bold tracking-widest uppercase text-sm">Racing & Motorsports</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase">Make Split-Second Decisions With Confidence</h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-mono">
                In racing, milliseconds matter. Our dashboards help teams make optimal pit strategy calls, manage tire degradation, and respond to changing track conditions in real-time.
              </p>
              <ul className="space-y-3 mb-10 font-mono text-sm">
                {["Real-time strategy recommendations", "Tire and fuel management", "Weather impact analysis", "Gap and positioning insights"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-electric"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact"><Button fullWidth>Book Call</Button></Link>
                <Link to="/demo/racing"><Button variant="outline" fullWidth>View Demo</Button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Drones */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4 text-electric">
                <Plane className="w-6 h-6" />
                <span className="font-mono font-bold tracking-widest uppercase text-sm">Drone Operations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase">Scale Your Fleet Safely</h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-mono">
                 Managing a swarm requires more than just video feeds. We provide aggregate health monitoring, battery prediction, and automated mission status updates to keep your birds in the air.
              </p>
              <ul className="space-y-3 mb-10 font-mono text-sm">
                {["Fleet health monitoring", "Battery life prediction", "No-fly zone alerts", "Mission status tracking"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-electric"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact"><Button fullWidth>Book Call</Button></Link>
                <Link to="/demo/drones"><Button variant="outline" fullWidth>View Demo</Button></Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative border border-white/10 p-2">
               <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-electric"></div>
               <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-electric"></div>
               <img src="https://i.ibb.co/8gk7zPbw/drones-lux-ops.jpg" alt="Drone Dashboard" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-panel border-b border-white/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-1 md:order-1 relative border border-white/10 p-2">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-electric"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-electric"></div>
              <img src="https://i.ibb.co/7dx1fyD4/fleets-vans-lux-ops.jpg" alt="Fleet Dashboard" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="order-2 md:order-2">
              <div className="flex items-center gap-3 mb-4 text-electric">
                <Truck className="w-6 h-6" />
                <span className="font-mono font-bold tracking-widest uppercase text-sm">Fleet Management</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase">Optimize Every Mile</h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-mono">
                Turn GPS data into profit. We build custom dispatch and tracking interfaces that highlight inefficiencies, predict maintenance needs, and optimize routing in real-time.
              </p>
              <ul className="space-y-3 mb-10 font-mono text-sm">
                {["Predictive maintenance", "Route optimization", "Driver behavior analysis", "Fuel consumption tracking"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-electric"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact"><Button fullWidth>Book Call</Button></Link>
                <Link to="/demo/fleet"><Button variant="outline" fullWidth>View Demo</Button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Industries - New Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4 text-electric">
                <Hexagon className="w-6 h-6" />
                <span className="font-mono font-bold tracking-widest uppercase text-sm">Custom Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase">Universal Intelligence</h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-mono">
                Our decision engine is industry-agnostic. From energy grids to emergency response, if you have complex data streams and critical decisions to make, we can build the interface that makes it possible.
              </p>
              <ul className="space-y-3 mb-10 font-mono text-sm">
                {["Energy & Utilities", "Emergency Services", "Manufacturing", "Financial Trading"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-electric"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link to="/contact" className="w-full sm:w-auto"><Button fullWidth>Discuss Your Custom Project</Button></Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative border border-white/10 p-8 md:p-12 bg-navy flex items-center justify-center aspect-square">
               <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-electric"></div>
               <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-electric"></div>
               <div className="text-center opacity-50">
                   <Cpu className="w-24 h-24 md:w-32 md:h-32 text-gray-500 mb-6 mx-auto stroke-1" />
                   <div className="font-mono text-xs text-electric uppercase tracking-widest">Agnostic Architecture</div>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Industries;