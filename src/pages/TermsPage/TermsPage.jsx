import "./TermsPage.scss";

function TermsPage() {
  return (
    <div className="terms">
      <p className="terms__intro">
        Welcome to www.aktiva.ca (the "Site"), operated by Aktiva Fitness ("we",
        "our", or "us"). These Terms and Conditions ("Terms") govern your use of
        our website and online services. By accessing or using our Site, you
        agree to be bound by these Terms and all applicable laws.
      </p>
      <ol className="terms__list">
        <li className="terms__list-item">
          USE OF THE WEBSITE
          <p className="terms__info">
            You may use this Site for lawful, personal, non-commercial purposes
            only. You agree not to:
            <ul>
              <li className="terms__subitem-details">
                Use the Site in a way that violates any laws or regulations
              </li>
            
            <li className="terms__subitem-details">Attempt to interfere with or compromise the Site's security</li>
            <li className="terms__subitem-details">
              Use automated means (e.g., bots, scrapers) to access or collect
              data from the Site
            </li>
            </ul>
          </p>
        </li>

        <li className="terms__list-item">
          MEMBERSHIP AND ONLINE SERVICES
          <p className="terms__info">
            Some features of our Site may require registration or membership
            (e.g., booking classes, viewing schedules, managing accounts). You
            agree to provide accurate and complete information when registering
            and to keep your account credentials secure. <br></br>
            <br></br>We reserve the right to suspend or terminate accounts if we
            detect misuse or false information.
          </p>
        </li>
        <li className="terms__list-item">
          PAYMENT AND BILLING
          <p className="terms__info">
            All prices for memberships, classes, and products listed on the Site
            are in Canadian Dollar (CAD) and subject to applicable taxes under
            Ontario law. Payment must be made through our approved third-party
            payment processors. We do not store your payment information.{" "}
            <br></br>
            <br />
            Recurring memberships will be billed in accordance with the plan you
            select. You may cancel your subscription by contacting us or through
            your online account, subject to any minimum commitment periods.
          </p>
        </li>
        <li className="terms__list-item">
          CANCELLATIONS AND REFUNDS
          <p className="terms__info">
            Class bookings may be cancelled or rescheduled according to our
            cancellation policy, which will be available on the Site. Refunds
            are subject to our discretion and in compliance with Ontario's
            Consumer Protection Act.
          </p>
        </li>
        <li className="terms__list-item">
          INTELLECTUAL PROPERTY
          <p className="terms__info">
            All content on this Site, including logos, text, images, videos, and
            sofrware, is the property of Aktiva or its licensors. You may not
            reproduce, distribute, or exploit any content without our prior
            written permission.
          </p>
        </li>
        <li className="terms__list-item">
          HEALTH AND SAFETY DISCLAIMER
          <p className="terms__info">
            By participating in any fitness class or using our facilities, you
            acknowledge that physical exercise carries inherent risks. Always
            consult a physician before beginning a new exercise program.
            <br />
            <br />
            Aktiva is not liable for any injuries, health conditions, or damages
            arising from your use of our programms, services, or facilities.
          </p>
        </li>
        <li className="terms__list-item">
          LIMITATION OF LIABILITY
          <p className="terms__info">
            To the maximum extent permitted by law, Aktiva is not liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of the Site or our services.
          </p>
        </li>
        <li className="terms__list-item">
          INDEMNIFICATION
          <p className="terms__info">
            You agree to indemnify and hold harmless Aktiva, its employees,
            contractors, and affiliates from any claims, liabilities, damages,
            and expenses arising out of your use of the Site or breach of these
            Terms.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default TermsPage;
