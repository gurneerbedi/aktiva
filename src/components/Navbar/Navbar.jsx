import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

import mobilelogo from '../../assets/images/mobilelogo.png';
import hamburgerIcon from '../../assets/images/hamburgermenu.png'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__mobile">
        <img className="navbar__logo" src={mobilelogo} alt="logo" />
        <div className="custom-hamburger" onClick={handleMenuToggle}>
          <img src={hamburgerIcon} alt="Menu" />
        </div>
        <Menu
          right
          isOpen={menuOpen}
          onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
          customBurgerIcon={false}
        >
          <Link className={`menu-item ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className={`menu-item ${location.pathname === '/programs' ? 'active' : ''}`} to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link>
          <Link className={`menu-item ${location.pathname === '/amenities' ? 'active' : ''}`} to="/amenities" onClick={() => setMenuOpen(false)}>Amenities</Link>
          <Link className={`menu-item ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link className={`menu-item ${location.pathname === '/booking' ? 'active' : ''}`} to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
        </Menu>
      </div>

      <nav className="navbar__desktop">
        <img className="navbar__logo" src={mobilelogo} alt="logo" />
        <div className="navbar__links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/programs" className={location.pathname === '/programs' ? 'active' : ''}>Programs</Link>
          <Link to="/amenities" className={location.pathname === '/amenities' ? 'active' : ''}>Amenities</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link to="/booking" className={location.pathname === '/booking' ? 'active' : ''}>Booking</Link>
        </div>
        <div className="navbar__buttons">
          <Link to="/booking" className="navbar__button">Try Us Free</Link>
          <a href="https://aktiva.gymmasteronline.com/portal/login" className="navbar__button-membership" target="_blank" rel="noreferrer">Membership</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
