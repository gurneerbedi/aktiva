import { useState } from "react";
import emailjs from "@emailjs/browser";
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

    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      }
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

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

      // Get current time as formatted string
      const now = new Date();
      const time = now.toLocaleString(); 

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: cleanedPhone,
        message: formData.message,
        time: time,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            alert("Message sent!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
            setErrors({});
          },
          (error) => {
            console.error("Email send error:", error.text);
            alert("Oops! Something went wrong. Please try again.");
          }
        );
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
        <label className="sr-only" htmlFor="lastName">Last Name</label>
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
