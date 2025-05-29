import "./ContactPage.scss";
import Pin from "../../assets/images/pin.png";
import Phonecall from "../../assets/images/phone-call.png";
import Email from "../../assets/images/email.png";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import XIcon from "../../assets/images/twitter.png";
import YoutubeIcon from "../../assets/images/youtube.png";

function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className="contact__heading">GET IN TOUCH</h1>
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7431031765864!2d-79.47693502317851!3d43.77819127109649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fe0488e6ee7%3A0x868b2382745e71cc!2sAktiva%20Fitness!5e0!3m2!1sen!2sca!4v1748532436121!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aktiva Fitness Map"
          ></iframe>
        </div>
        <div className="contact__container">
          <div className="contact__info">
            <div className="contact__icon-wrapper">
              <img className="contact__icon" src={Pin} alt="pin icon" />
            </div>
            <div className="contact__details">
              <p className="contact__details-heading">809 Alness St</p>
              <p className="contact__details-info">North York, ON M3J 2H8</p>
            </div>
          </div>
          <div className="contact__info">
            <div className="contact__icon-wrapper">
              <img className="contact__icon" src={Phonecall} alt="phone icon" />
            </div>
            <div className="contact__details">
              <p className="contact__details-heading">Phone:</p>
              <p className="contact__details-info">(416) 201-1887</p>
            </div>
          </div>
          <div className="contact__info">
            <div className="contact__icon-wrapper">
              <img className="contact__icon" src={Email} alt="email icon" />
            </div>
            <div className="contact__details">
              <p className="contact__details-heading">Email:</p>
              <p className="contact__details-info">info@aktiva.ca</p>
            </div>
          </div>
        </div>

        <div className="contact__socials">
          <p className="contact__socials-heading">Social Media:</p>
          <div className="contact__socials-icon-container">
            <div className="contact__socials-icon-wrapper">
              <img
                className="contact__socials-icon"
                src={FacebookIcon}
                alt="facebook icon"
              />
            </div>
            <div className="contact__socials-icon-wrapper">
              <img
                className="contact__socials-icon"
                src={InstagramIcon}
                alt="instagram icon"
              />
            </div>
            <div className="contact__socials-icon-wrapper">
              <img
                className="contact__socials-icon"
                src={YoutubeIcon}
                alt="youtube icon"
              />
            </div>
            <div className="contact__socials-icon-wrapper">
              <img
                className="contact__socials-icon"
                src={XIcon}
                alt="twitter icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
