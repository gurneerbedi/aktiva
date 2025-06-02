import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Privacy from "./pages/PrivacyPage/PrivacyPage.jsx";
import Terms from "./pages/TermsPage/TermsPage.jsx";
import Amenities from './pages/AmenitiesPage/AmenitiesPage.jsx';
import Programs from './pages/ProgramsPage/ProgramsPage.jsx';
import Contact from './pages/ContactPage/ContactPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
       <Banner></Banner>
       <Footer/>
    </Router>
    
  );
}

export default App;
