import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';
import Home from './pages/Home';
import './styles/global.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-[#f1f5f9] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollToTopButton />
      <Navbar />
      <Home />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
