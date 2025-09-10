import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import CoverCarousel from './components/CoverCarousel.jsx';

import GlobalLoader from './components/GlobalLoader.jsx';

// 懒加载页面组件
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));
const DetailPage = lazy(() => import('./pages/DetailPage.jsx'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <main className="max-w-7xl mx-auto relative">
        <Navbar />

        {/* 全局 Suspense，统一使用 GlobalLoader */}
        <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<ProjectPage />} />
            <Route path="/projects/:slug" element={<DetailPage />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
