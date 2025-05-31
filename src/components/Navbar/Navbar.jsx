import { slide as Menu } from 'react-burger-menu'
import "./Navbar.scss"
import mobilelogo from "../../assets/images/mobilelogo.png"
import { Link } from 'react-router-dom';

function Navbar (){

    return(<>
    <div className='navbar'><img className= "navbar__logo"src={mobilelogo} alt="logo" />
    
    <Menu right>
  <Link className="menu-item" to="/">
    Home
  </Link>
  <Link className="menu-item" to="/programs">
    Programs
  </Link>
  <Link className="menu-item" to="/amenities">
    Amenities
  </Link>
  <Link className="menu-item" to="/contact">
    Contact
  </Link>
</Menu>
    </div>
    </>);
};

export default Navbar