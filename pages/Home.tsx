import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayCircle, 
  CalendarCheck, 
  CheckCircle, 
  XCircle, 
  Gauge, 
  Airplane, 
  Truck, 
  CornersOut, 
  ChatCircle, 
  Code, 
  Rocket,
  Flag,
  Trophy,
  ArrowRight,
  Hexagon
} from '@phosphor-icons/react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'racing' | 'drone' | 'fleet'>('racing');

  const demoUrls = {
    racing: "https://gr86strategy.netlify.app/",
    drone: "https://luxopsaerial.netlify.app/",
    fleet: "https://luxopsfleet.netlify.app/"
  };

  return (
    <div className="w-full">
      
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 relative pt-20">
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-electric text-black font-mono text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-black animate-pulse"></span>
            System Status: Online
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] text-white uppercase">
            Real-Time Dashboards<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">That Tell You What To Do</span>
          </h1>
          
          <div className="h-px w-24 bg-electric mx-auto my-6"></div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-mono leading-relaxed">
            Transform complex telemetry into beautiful, actionable insights. No technical expertise required. Intelligence made visible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-8 w-full sm:w-auto">
            <Link to="/demo/racing" className="w-full sm:w-auto">
              <Button size="lg" icon={<PlayCircle className="w-5 h-5" />} fullWidth>Play Interactive Demos</Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" icon={<CalendarCheck className="w-5 h-5" />} fullWidth>Book a Demo Call</Button>
            </Link>
          </div>

          <div className="pt-12 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <Trophy className="w-8 h-8 text-electric" />
            <div className="text-sm text-gray-400 font-mono">
              <span className="font-bold text-white uppercase">Best in Real-Time Analytics</span><br />
              Toyota GR Racing, 2025
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/10 bg-panel">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Left: The Bad Way */}
            <div className="relative p-1 border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
              <div className="bg-navy p-6 md:p-8 border border-white/10">
                <div className="font-mono text-red-500 text-xs mb-4 uppercase tracking-widest">/// Error: Legacy System</div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 uppercase">Traditional Dashboards</h3>
                <p className="text-gray-500 font-mono text-sm mb-6 border-l-2 border-red-500/20 pl-4">Show data. You interpret it.</p>
                <ul className="space-y-3 font-mono text-sm text-gray-500">
                  <li className="flex items-center gap-3"><XCircle className="w-4 h-4 text-red-500" /> Ugly and hard to read</li>
                  <li className="flex items-center gap-3"><XCircle className="w-4 h-4 text-red-500" /> Requires technical expertise</li>
                  <li className="flex items-center gap-3"><XCircle className="w-4 h-4 text-red-500" /> No decision support</li>
                  <li className="flex items-center gap-3"><XCircle className="w-4 h-4 text-red-500" /> Slow to configure</li>
                </ul>
              </div>
            </div>

            {/* Right: The Lux Ops Way */}
            <div className="relative">
               <div className="absolute -inset-1 bg-electric opacity-20 blur-sm"></div>
               <div className="relative bg-black border border-electric p-6 md:p-8 shadow-[0_0_30px_rgba(204,255,0,0.1)]">
                <div className="font-mono text-electric text-xs mb-4 uppercase tracking-widest">/// Status: Optimized</div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 uppercase">Lux Ops Intelligence</h3>
                <p className="text-gray-300 font-mono text-sm mb-6 border-l-2 border-electric pl-4">Shows decisions. You execute them.</p>
                <ul className="space-y-3 font-mono text-sm text-white">
                  <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-electric" /> Beautiful and intuitive</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-electric" /> Actionable recommendations</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-electric" /> AI-powered insights</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-electric" /> Deployed in 2 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE DEMO */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-4">See It In Action</h2>
            <p className="text-gray-400 font-mono uppercase tracking-widest text-sm">Click on any demo to explore a live dashboard.</p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {[
              { id: 'racing', label: 'Racing', icon: <Gauge size={16}/> },
              { id: 'drone', label: 'Drone', icon: <Airplane size={16}/> },
              { id: 'fleet', label: 'Fleet', icon: <Truck size={16}/> }
            ].map((btn) => (
              <button 
                key={btn.id}
                type="button"
                onClick={() => setActiveDemo(btn.id as any)}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase border transition-all whitespace-nowrap ${activeDemo === btn.id ? 'bg-electric text-black border-electric font-bold' : 'bg-transparent text-gray-500 border-white/20 hover:border-white hover:text-white'}`}
              >
                {btn.icon} {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[50vh] md:h-[80vh] bg-black border border-white/20 overflow-hidden">
          {/* Controls */}
          <div className="absolute bottom-4 right-4 z-10">
            <Link to={`/demo/${activeDemo}`} target="_blank">
               <button type="button" className="bg-black border border-white/20 hover:border-electric text-white p-3 transition-colors group">
                 <CornersOut className="w-5 h-5 group-hover:text-electric" />
               </button>
            </Link>
          </div>
          
          <iframe 
            key={activeDemo}
            src={demoUrls[activeDemo]} 
            className="w-full h-full border-0"
            title="Live Demo"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-presentation"
          />
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 font-mono">This could be yours in 2 weeks.</p>
          <Link to="/contact">
             <Button>Get This For Your Operation</Button>
          </Link>
        </div>
      </section>

      {/* SECTION 4: EXECUTION PROTOCOL */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-panel border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 md:mb-16 uppercase">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/10"></div>
             {[
               { icon: <ChatCircle size={32} />, step: "01.", title: "Discovery", desc: "15-minute call to understand your data needs." },
               { icon: <Code size={32} />, step: "02.", title: "Build", desc: "We integrate data and build custom AI logic." },
               { icon: <Rocket size={32} />, step: "03.", title: "Deploy", desc: "Launch in 2 weeks. Train your team." }
             ].map((item, idx) => (
               <div key={idx} className="relative z-10 bg-black border border-white/10 p-8 hover:border-electric transition-colors group">
                 <div className="text-electric mb-6 group-hover:scale-110 transition-transform duration-300">
                   {item.icon}
                 </div>
                 <div className="text-electric font-mono font-bold text-xl mb-2">{item.step}</div>
                 <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{item.title}</h3>
                 <p className="text-gray-400 font-mono text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TARGET VERTICALS */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Built For Decision-Makers</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Flag />, title: "Racing & Motorsports", items: ["Make split-second calls", "Tire degradation tracking"] },
            { icon: <Airplane />, title: "Drone & Aerial", items: ["Monitor fleet battery", "Prevent crashes"] },
            { icon: <Truck />, title: "Logistics", items: ["Optimize routes", "Boost efficiency"] },
            { icon: <Hexagon />, title: "Custom Solutions", items: ["Any API integration", "Bespoke decision logic"] }
          ].map((card, idx) => (
            <div key={idx} className="group p-8 border border-white/10 hover:border-electric bg-black transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-electric -rotate-45" />
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-white mb-6">
                {React.cloneElement(card.icon as any, { size: 32 })}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-6 uppercase leading-none">{card.title}</h3>
              <ul className="space-y-2 mb-8">
                {card.items.map((item, i) => (
                  <li key={i} className="text-xs font-mono text-gray-400 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1 h-1 bg-electric"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/industries" className="text-electric text-sm font-semibold group-hover:underline flex items-center gap-1 font-mono uppercase">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}
      <section className="py-20 md:py-24 px-4 md:px-6 border-y border-white/10 bg-panel">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="w-12 h-12 text-electric mx-auto mb-6" />
          <div className="text-electric font-mono text-xs mb-4 uppercase tracking-[0.2em]">Winner: Best Real-Time Analytics</div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 uppercase">Toyota GR Racing Hack the Track, 2025</h3>
          <blockquote className="text-xl md:text-3xl font-display uppercase font-bold text-gray-500 mb-8 leading-tight">
            "We needed a way to make faster pit strategy decisions. Lux Ops delivered a dashboard that showed us exactly what to do, exactly when to do it."
          </blockquote>
          <cite className="text-gray-500 not-italic font-semibold font-mono uppercase">Toyota Gazoo Racing Team</cite>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-20 md:py-32 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-8 uppercase">Ready To Transform Your Operations?</h2>
        <div className="flex flex-col items-center gap-6">
          <Link to="/contact">
            <Button size="lg" icon={<CalendarCheck className="w-5 h-5"/>}>Book a 15-Minute Demo Call</Button>
          </Link>
          <Link to="/pricing" className="text-gray-500 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
             Or explore our pricing and packages below
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;