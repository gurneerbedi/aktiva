import { slide as Menu } from 'react-burger-menu'
import "./Navbar.scss"
import mobilelogo from "../../assets/images/mobilelogo.png"
function Navbar (){

    return(<>
    <div className='navbar'><img className= "navbar__logo"src={mobilelogo} alt="logo" />
    
     <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/programs">
        Programs
      </a>
      <a className="menu-item" href="/amenities">
        Amenities
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
    </div>
    </>);
};

export default Navbar