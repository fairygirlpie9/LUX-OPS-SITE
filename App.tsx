import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Hide Navbar/Footer on specific demo pages if requested, but design doc says "Minimal header" for demo.
  // The Demo page component implements its own header, so we might want to exclude the main Navbar there.
  const isDemoPage = location.pathname.startsWith('/demo');

  return (
    <div className="min-h-screen bg-navy text-white font-sans selection:bg-electric selection:text-black flex flex-col">
      {!isDemoPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDemoPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Preload critical images to ensure they are ready when users navigate
    const imageUrls = [
      "https://i.ibb.co/r20kTnvW/motorsports-lux-ops.jpg", // Industries: Racing
      "https://i.ibb.co/8gk7zPbw/drones-lux-ops.jpg",       // Industries: Drones
      "https://i.ibb.co/7dx1fyD4/fleets-vans-lux-ops.jpg",   // Industries: Fleet
      "https://i.ibb.co/SD0nVCv6/blog-toyota-lux-ops.jpg"    // Blog: Toyota
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo/:type" element={<Demo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;