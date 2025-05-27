import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Privacy from "./pages/PrivacyPage/PrivacyPage.jsx";
import Terms from "./pages/TermsPage/TermsPage.jsx";
import Amenities from './pages/AmenitiesPage/AmenitiesPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/amenities" element={<Amenities />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
