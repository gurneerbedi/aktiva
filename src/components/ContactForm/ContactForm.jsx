import { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone = formData.phone;

    // Required fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      }
    }

    // Email format
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone: no spaces, 10 digits only
    const phoneHasSpaces = /\s/.test(phone);
    const strippedPhone = phone.replace(/[^\d]/g, "");

    if (phoneHasSpaces) {
      newErrors.phone = "Phone number must not contain spaces";
    } else if (!/^\d{10}$/.test(strippedPhone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const cleanedPhone = formData.phone.replace(/[^\d]/g, "");
      const submittedData = {
        ...formData,
        phone: cleanedPhone,
      };

      console.log("Submitted Form Data:", submittedData);

      alert("Message sent!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__group">
        <label className="sr-only" htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name*"
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div className="contact-form__group">
        <label className="sr-only"htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name*"
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div className="contact-form__group">
        <label className="sr-only" htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address*"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="contact-form__group">
        <label className="sr-only" htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number*"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <div className="contact-form__group">
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
         className="message__textarea"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message*"
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <button type="submit" className="contact-form__submit">
        Send a Message
      </button>
    </form>
  );
}

export default ContactForm;
