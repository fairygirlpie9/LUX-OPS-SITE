import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'toyota-gr-racing-dashboard',
    title: 'How I designed the Toyota GR Racing Best In Realtime Analytics Dashboard',
    excerpt: 'The story behind the winning dashboard for the GR Cup Series, designed to transform raw telemetry into instant strategic calls.',
    date: 'Wednesday 7th Jan 2025',
    author: 'Lux Ops Team',
    image: 'https://i.ibb.co/SD0nVCv6/blog-toyota-lux-ops.jpg',
    content: `
      <h3 class="text-2xl font-display font-bold text-white mb-4 uppercase">Inspiration</h3>
      <p class="mb-6 text-gray-400 font-mono text-sm leading-relaxed">The project was primarily inspired by the critical need for race engineers to make instant, data-driven decisions in the high-pressure environment of a live race. I recognised that winning often depends on the speed and accuracy of strategic calls. My goal was to create a tool that transforms massive amounts of raw telemetry data into actionable intelligence, directly enhancing driver insights and team performance during race-day decision-making for the GR Cup Series.</p>

      <h3 class="text-2xl font-display font-bold text-white mb-4 uppercase">What it does</h3>
      <p class="mb-6 text-gray-400 font-mono text-sm leading-relaxed">The GR Cup Real-Time Dashboard Simulator is a browser-based analytics and strategy tool designed for use by a race engineer on a tablet. It provides a real-time, visual experience of the race. It shows live standings and telemetry, while dynamically tracking all cars on the Barber Motorsports Park circuit, highlighting the selected car in red. The tool features a Strategy Impact panel displaying critical metrics like Tire Status and degradation, and competitor Gap Ahead/Behind. Most importantly, it uses AI to provide an immediate, data-driven recommendation (e.g., PUSH) and calculates the optimal Pit Stop window.</p>

      <h3 class="text-2xl font-display font-bold text-white mb-4 uppercase">How I built it</h3>
      <p class="mb-6 text-gray-400 font-mono text-sm leading-relaxed">The dashboard was built using JavaScript and the three.js library for the visualisation and car movement. For data, I used the anonymised CSV files provided for the competition, including the Analysis Endurance and Weather data for Race 1, to simulate a live data feed. Creating the track layout involved tracing the Barber circuit on Google Maps, converting the file from KML to TXT, and then rendering it as an SVG to plot the animated car positions.</p>

      <h3 class="text-2xl font-display font-bold text-white mb-4 uppercase">What We Can Do For You</h3>
      <p class="mb-6 text-gray-400 font-mono text-sm leading-relaxed">While this project was built for racing, our underlying decision engine works for any industry. We build custom, high-performance dashboards that integrate with your existing APIs—whether you're tracking logistics fleets, monitoring drone swarms, or managing energy grids. We specialize in taking complex data streams and turning them into simple, clear instructions for your team. No bloat, no confusion, just the intelligence you need, displayed exactly when you need it. From small teams to enterprise operations, we can deploy a custom solution in as little as two weeks.</p>
    `
  }
];