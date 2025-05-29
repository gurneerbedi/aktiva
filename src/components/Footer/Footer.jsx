import "./Footer.scss";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import XIcon from "../../assets/images/twitter.png";
import YoutubeIcon from "../../assets/images/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <div className="footer__logo">
          <img src="" alt="" />
        </div>
        <ol className="footer__socials">
          <li>
            <a className="footer__link" href="https://facebook.com">
              <img className="footer__socialicon" src={FacebookIcon} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://x.com">
              <img className="footer__socialicon" src={XIcon} alt="twitter icon" />
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://instagram.com">
              <img className="footer__socialicon" src={InstagramIcon} alt="instagram icon" />
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://youtube.com">
              <img className="footer__socialicon" src={YoutubeIcon} alt="youtube icon" />
            </a>
          </li>
        </ol>

        <div className="footer__nav">
          <h2 className="footer__header">NAVIGATION</h2>
          <div className="footer__text-links">
            <ol className="footer__list">
              <li><a className="footer__link" href="/">Home</a></li>
              <li><a className="footer__link" href="/programs">Programs</a></li>
              <li><a className="footer__link" href="/amenities">Amenities</a></li>
              <li><a className="footer__link" href="/contact">Contact</a></li>
            </ol>
          </div>

          <h2 className="footer__header">PROGRAMS</h2>
          <div className="footer__text-links">
            <ol className="footer__list">
              <li><a className="footer__link" href="/">Semi-Private Training</a></li>
              <li><a className="footer__link" href="/programs">VIP-Private Training</a></li>
              <li><a className="footer__link" href="/programs">Standard Gym Membership</a></li>
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
          <p className="footer__newsletter">
            Enter your email address and receive latest news and offers.
          </p>
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
          <a className="footer__link" href="/terms">Terms of Use | </a>
          <a className="footer__link" href="/privacy">Privacy Policy | </a>
          <a className="footer__link" href="/">Site Map</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
