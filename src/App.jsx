import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

import AboutPage from './pages/AboutPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import ScrollToTop from './components/ScrollToTop';
import CoverCarousel from './components/CoverCarousel.jsx';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <main className="max-w-7xl mx-auto relative">
      <Navbar />
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
      <Route path="/projects/:slug" element={<CoverCarousel />} />
      </Routes>
      
    </main>
    </Router>
    
  );
};

export default App;
