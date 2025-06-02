import "./Footer.scss";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import XIcon from "../../assets/images/twitter.png";
import YoutubeIcon from "../../assets/images/youtube.png";
import { Link } from "react-router-dom";
import logo from "../../assets/images/mobilelogo.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div >
          <img className="footer__logo" src={logo}alt="logo" />
        </div>
      <nav>
        <ol className="footer__socials">
          <li>
            <a className="footer__link" href="https://facebook.com">
              <img
                className="footer__socialicon"
                src={FacebookIcon}
                alt="facebook icon"
              />
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://x.com">
              <img
                className="footer__socialicon"
                src={XIcon}
                alt="twitter icon"
              />
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://instagram.com">
              <img
                className="footer__socialicon"
                src={InstagramIcon}
                alt="instagram icon"
              />
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://youtube.com">
              <img
                className="footer__socialicon"
                src={YoutubeIcon}
                alt="youtube icon"
              />
            </a>
          </li>
        </ol>
        <div className="footer__nav">
          <h2 className="footer__header">NAVIGATION</h2>
          <div className="footer__text-links">
            <ol className="footer__list">
              <li>
                <Link className="footer__link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/programs">
                  Programs
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/amenities">
                  Amenities
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/contact">
                  Contact
                </Link>
              </li>
            </ol>
          </div>

          <h2 className="footer__header">PROGRAMS</h2>
          <div className="footer__text-links">
            <ol className="footer__list">
              <li>
                <Link className="footer__link" to="/">
                  Semi-Private Training
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/programs">
                  VIP-Private Training
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/programs">
                  Standard Gym Membership
                </Link>
              </li>
              
            </ol>
          </div>

          <h2 className="footer__header">CONTACT</h2>
          <div className="footer__contactinfo">
            <p className="footer__contact">Aktiva Fitness</p>
            <p className="footer__contact">809 Alness St North York, ON M3J 2H8</p>
            <p className="footer__contactbold">(416) 201-1887</p>
            <p className="footer__contact">info@aktiva.ca</p>
          </div>

          <h2 className="footer__header">NEWSLETTER</h2>
          <p className="footer__newsletter">Enter your email address and receive latest news and offers.</p>
        </div>
      </nav>
      <div className="footer__subscribe">
      <input
        type="email"
        placeholder="Email Address"
        className="footer__subscribe-input"
      />
      <button className="footer__subscribe-button">Subscribe Now</button>
    </div>
    <div className="footer__terms">
  <p className="footer__termsp">Copyright @ 2025 Aktiva Fitness.</p>
  <p className="footer__termsp">
    <Link className="footer__link" to="/terms">Terms of Use | </Link>
    <Link className="footer__link" to="/privacy">Privacy Policy |</Link>
    <Link className="footer__link" to="/"> Site Map</Link>
    
  </p>
</div>

    </footer>
  );
};

export default Footer;
