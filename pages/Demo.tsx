import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const demoData = {
  racing: {
    title: "Racing Telemetry Dashboard",
    url: "https://gr86strategy.netlify.app/",
    desc: "Built for Toyota Gazoo Racing's Hack the Track competition, this dashboard provides real-time race strategy recommendations including pit stop timing, tire management, and gap analysis.",
    features: [
      "Live race positioning and lap times",
      "AI-powered strategy recommendations (Push/Defend/Conserve)",
      "Tire degradation tracking and optimal pit windows",
      "Weather impact modeling"
    ]
  },
  drones: {
    title: "Drone Operations Command",
    url: "https://luxopsaerial.netlify.app/",
    desc: "A centralized command center for multi-drone fleets. Monitor battery levels, signal strength, and mission status in real-time to prevent loss and optimize flight time.",
    features: [
      "Aggregate fleet health status",
      "Individual drone telemetry drill-down",
      "Predictive return-to-home alerts",
      "No-fly zone proximity warnings"
    ]
  },
  fleet: {
    title: "Fleet Management System",
    url: "https://luxopsfleet.netlify.app/",
    desc: "Turn GPS data into actionable logistics insights. Track delivery status, driver performance, and vehicle maintenance needs from a single glass pane.",
    features: [
      "Real-time vehicle tracking map",
      "Driver efficiency scoring",
      "Predictive maintenance alerts",
      "Fuel consumption optimization"
    ]
  }
};

const Demo: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const data = demoData[type as keyof typeof demoData] || demoData.racing;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="w-full min-h-screen bg-navy flex flex-col">
      {/* Header */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-4 md:px-6 bg-navy z-20">
        <div className="flex items-center gap-4">
           <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 text-xs md:text-sm font-mono uppercase transition-colors">
             <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Site</span><span className="sm:hidden">Back</span>
           </Link>
           <div className="h-4 w-px bg-white/20 hidden md:block"></div>
           <h1 className="text-white font-display font-bold uppercase hidden md:block">{data.title}</h1>
        </div>
        <Link to="/contact">
          <Button size="sm" variant="primary">Schedule a Call</Button>
        </Link>
      </div>

      {/* Main Content (Iframe) */}
      <div className="flex-1 relative bg-black">
        <iframe 
          src={data.url} 
          className="w-full h-[60vh] md:h-[85vh] border-0"
          title="Demo Frame"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-presentation"
        />
      </div>

      {/* Footer Info */}
      <div className="bg-panel border-t border-white/10 p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 uppercase">About This Dashboard</h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-mono text-base md:text-lg">
            {data.desc}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div>
              <h3 className="text-white font-bold mb-6 font-mono uppercase text-base tracking-wider">Key Features:</h3>
              <ul className="space-y-4">
                {data.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 font-mono text-sm uppercase leading-relaxed">
                    <CheckCircle size={18} className="text-electric mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start md:items-center bg-black rounded-sm p-8 border border-white/10">
              <h3 className="text-white font-bold mb-3 font-display uppercase text-2xl text-center md:text-left w-full md:w-auto">Want This For Your Team?</h3>
              <p className="text-gray-400 text-sm font-mono mb-6 uppercase tracking-wide text-center md:text-left w-full md:w-auto">Get a custom dashboard built in 2 weeks.</p>
              <Link to="/contact" className="w-full md:w-auto">
                <Button fullWidth>Book a 15-Minute Call</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;