import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';
import './styles/global.css';

const Home = lazy(() => import('./pages/Home'));
const PlayerPage = lazy(() => import('./pages/PlayerPage'));
const CoachPage = lazy(() => import('./pages/CoachPage'));
const ScoutPage = lazy(() => import('./pages/ScoutPage'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Loading = () => (
  <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a] text-[#f1f5f9] font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <ScrollToTop />
        <ScrollToTopButton />
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player" element={<PlayerPage />} />
            <Route path="/coach" element={<CoachPage />} />
            <Route path="/scout" element={<ScoutPage />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}
export default App;