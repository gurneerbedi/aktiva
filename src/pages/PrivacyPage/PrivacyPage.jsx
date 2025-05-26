import "./PrivacyPage.scss";

function PrivacyPage() {
  return (
    <div className="privacy">
      <p className="privacy__intro">
        At Aktiva, we are committed to protecting the privacy of our members,
        website visitors, and staff. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your personal information in
        accordance with the Personal Information Protection and Electronic
        Documents Act (PIPEDA) and other applicable Ontario laws.
      </p>

      <ol className="privacy__list">
        <li className="privacy__list-item">
          INFORMATION WE COLLECT
          <p className="privacy__info">
            We may collect the following types of information through our
            website www.aktiva.ca and our in-person services:
          </p>
          <ol type="A">
            <li className="privacy__subitem">
              PERSONAL INFORMATION
              <ul>
                <li className="privacy__subitem-details">Full name</li>
                <li className="privacy__subitem-details">Email address</li>
                <li className="privacy__subitem-details">Phone number</li>
                <li className="privacy__subitem-details">Address</li>
                <li className="privacy__subitem-details">
                  Emergency contact details
                </li>
                <li className="privacy__subitem-details">Date of Birth</li>
                <li className="privacy__subitem-details">
                  Health or fitness information
                </li>
                <li className="privacy__subitem-details">
                  Billing and payment information
                </li>
              </ul>
            </li>
            <li className="privacy__subitem">
              TECHNICAL INFORMATION
              <ul>
                <li className="privacy__subitem-details">IP address</li>
                <li className="privacy__subitem-details">
                  Browser type and device information
                </li>
                <li className="privacy__subitem-details">
                  Pages visited and time spent on the Site
                </li>
                <li className="privacy__subitem-details">Referral source</li>
              </ul>
            </li>
            <li className="privacy__subitem">
              COOKIES AND ANALYTICS
              <p className="privacy__info">
                We use cookies and third-party tools (such as Google Analytics)
                to enhance your experience and understand usage trends.
              </p>
            </li>
          </ol>
        </li>
        <li className="privacy__list-item">
          PURPOSE OF COLLECTION
          <p className="privacy__info">
            We collect and use your personal information to:
          </p>
          <ul>
            <li className="privacy__subitem-details">
              Manage your gym membership
            </li>
            <li className="privacy__subitem-details">
              Schedule classes and facility bookings
            </li>
            <li className="privacy__subitem-details">Process Payments</li>
            <li className="privacy__subitem-details">Communicate with you</li>
            <li className="privacy__subitem-details">
              Monitor and improve our services
            </li>
            <li className="privacy__subitem-details">
              Comply with legal obligations
            </li>
          </ul>
        </li>
        <li className="privacy__list-item">
          CONSENT
          <p className="privacy__info">
            By providing your personal information, you consent to its
            collection, use, and disclosure. You may withdraw consent at any
            time by contacting us.
          </p>
        </li>
        <li className="privacy__list-item">
          DISCLOSURE OF PERSONAL INFORMATION
          <p className="privacy__info">
            We do not sell your personal information. We may disclose it:
          </p>
          <ul>
            <li className="privacy__subitem-details">To service providers</li>
            <li className="privacy__subitem-details">When required by law</li>
            <li className="privacy__subitem-details">
              With your explicit consent
            </li>
          </ul>
        </li>
        <li className="privacy__list-item">
          DATA RETENTION
          <p className="privacy__info">
            We retain your information only as long as necessary and securely
            destroy it when no longer needed.
          </p>
        </li>
        <li className="privacy__list-item">
          SECURITY OF YOUR INFORMATION
          <p className="privacy__info">
            We use appropriate measures to protect your information from
            unauthorized access or disclosure.
          </p>
        </li>
        <li className="privacy__list-item">
          YOUR RIGHTS
          <p className="privacy__info">You have the right to:</p>
          <ul>
            <li className="privacy__subitem-details">
              Access your personal information
            </li>
            <li className="privacy__subitem-details">Request corrections</li>
            <li className="privacy__subitem-details">Withdraw consent</li>
            <li className="privacy__subitem-details">File a complaint</li>
          </ul>
        </li>
        <li className="privacy__list-item">
          THIRD-PARTY LINKS
          <p className="privacy__info">
            We are not responsible for the privacy practices of third-party
            websites linked from our site.
          </p>
        </li>
        <li className="privacy__list-item">
          CHANGES TO THIS POLICY
          <p className="privacy__info">
            We may update this Privacy Policy. Updates will be posted with a new
            effective date.
          </p>
        </li>
        <li className="privacy__list-item">
          CONTACT US
          <ul>
            <li className="privacy__contact-list">Aktiva Fitness</li>
            <li className="privacy__contact-list">809 Alness St</li>
            <li className="privacy__contact-list">North York, ON, M3J 2H8</li>
            <li className="privacy__contact-list">Email: info@aktiva.ca</li>
            <li className="privacy__contact-list">Phone: 416-201-1887</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default PrivacyPage;
