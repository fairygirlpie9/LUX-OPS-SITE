import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Target, Globe } from '@phosphor-icons/react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <div className="py-16 md:py-24 px-4 md:px-6 text-center max-w-4xl mx-auto border-b border-white/10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-8 uppercase">About Lux Ops</h1>
        <p className="text-lg md:text-xl text-gray-400 font-mono">Making real-time intelligence accessible to everyone.</p>
      </div>

      {/* Story */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-panel">
        <div className="max-w-3xl mx-auto leading-relaxed text-base md:text-lg text-gray-300 space-y-8 font-mono">
          <p>
            Founded in 2025, Lux Ops was born from a simple observation: decision-makers are drowning in data but starving for clarity.
          </p>
          <p>
            Traditional dashboards like Grafana and Tableau show you the data. But they don't tell you what to do with it. They require data scientists to query and engineers to maintain.
          </p>
          <p>
            We built Lux Ops to bridge that gap, combining beautiful design, intelligent AI recommendations, and rapid deployment to help teams make better decisions, faster.
          </p>
        </div>
      </section>

      {/* Award */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto border-y border-white/10">
        <div className="border border-white/20 bg-navy p-8 md:p-12 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            <div className="shrink-0 text-center">
              <Trophy className="w-24 h-24 md:w-32 md:h-32 text-electric mb-4 mx-auto" />
              <div className="text-electric font-mono font-bold text-lg uppercase tracking-widest">Best in Real-Time Analytics</div>
              <div className="text-gray-500 text-xs font-mono uppercase">Toyota GR Racing Hack the Track, 2025</div>
            </div>
            <div className="border-t md:border-t-0 border-l-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 space-y-6">
              <p className="text-white text-lg md:text-xl font-display uppercase font-bold text-center md:text-left">
                "We built the best real-time racing telemetry dashboard."
              </p>
              <p className="text-gray-400 font-mono text-sm text-center md:text-left">
                In December 2025, we competed against teams from across the UK to build the best real-time racing telemetry dashboard. Our AI-powered decision engine and intuitive interface won first place. This validation proved what we already believed: when you combine beautiful design with actionable intelligence, you transform how decisions are made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 border border-electric flex items-center justify-center mx-auto mb-6 text-electric">
             <Target className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase">Our Mission</h2>
          <p className="text-xl md:text-2xl text-white font-mono mb-12">
            Build dashboards that don't just show data, they show <span className="text-electric font-bold underline decoration-electric/50 underline-offset-4">decisions</span>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto font-mono text-sm">
            {[
              "Beautiful design isn't optional, it's essential for fast decision-making",
              "AI should recommend actions, not just analyze data",
              "Technical barriers shouldn't prevent great decision-making",
              "Two weeks is enough time to transform operations"
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-electric font-bold">>></span>
                <span className="text-gray-400 uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-panel border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-12 h-12 text-gray-500 mx-auto mb-6" />
          <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Based in London, UK</h3>
          <p className="text-gray-400 mb-12 font-mono text-sm">
            We work with clients globally, bringing real-time intelligence to racing teams, drone operators, fleet managers, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button fullWidth>Book a Call</Button></Link>
            <Link to="/industries"><Button variant="outline" fullWidth>View Our Work</Button></Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;