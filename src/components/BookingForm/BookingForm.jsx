import React, { useState } from 'react';
import "./BookingForm.scss"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    goals: [],
    interests: [],
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const goalOptions = [
    'Lose weight',
    'Build muscle',
    'Improve endurance',
    'Look & feel better',
    'Reduce stress',
    'Enhance mobility',
    'Improve athletic skill',
    'Health & wellness',
  ];

  const interestOptions = [
    'Group fitness',
    'Strength training',
    'Cardio training',
    'Cross functional',
    'Yoga',
    "Women's only",
    'Unsure',
  ];

  const timeOptions = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'consent') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'checkbox') {
      const category = e.target.dataset.category;
      const currentValues = formData[category];
      const updatedValues = checked
        ? [...currentValues, value]
        : currentValues.filter((v) => v !== value);
      setFormData({ ...formData, [category]: updatedValues });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
  const newErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone = formData.phone;
  const phoneHasSpaces = /\s/.test(phone);
  const strippedPhone = phone.replace(/[^\d]/g, "");

  if (!formData.firstName.trim()) newErrors.firstName = "Required";
  if (!formData.lastName.trim()) newErrors.lastName = "Required";

  if (!formData.email.trim()) {
    newErrors.email = "Required";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Invalid email";
  }

  if (!phone.trim()) {
    newErrors.phone = "Required";
  } else if (phoneHasSpaces) {
    newErrors.phone = "Phone number must not contain spaces";
  } else if (!/^\d{10}$/.test(strippedPhone)) {
    newErrors.phone = "Phone number must be exactly 10 digits";
  }

  if (formData.goals.length === 0) newErrors.goals = "Select at least one goal";
  if (formData.interests.length === 0) newErrors.interests = "Select at least one interest";
  if (!formData.consent) newErrors.consent = "You must agree before continuing";

  return newErrors;
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
     
    }
  };

  return (
    <form className='booking-form' onSubmit={handleSubmit}> 
    <h1 className='booking-form__heading'>Ready to Visit? <span className='highlight'>BOOK HERE</span></h1> 
    <h2 className='booking-form__sub-heading'>Ready to take the first step? Fill out the form below to book your free consultation or schedule a visit - we're excited to help you reach your fitness goals!</h2>

      <label htmlFor="firstName" className="sr-only">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name*"
        value={formData.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <div className='error'>{errors.firstName}</div>}

      <label htmlFor="lastName" className="sr-only">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name*"
        value={formData.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <div className='error'>{errors.lastName}</div>}

      <label htmlFor="email" className="sr-only">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address*"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <div className='error'>{errors.email}</div>}

      <label htmlFor="phone" className="sr-only">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number*"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <div className='error'>{errors.phone}</div>}

      <label htmlFor="date" className="sr-only">Select a Date</label>
      <input className='booking-form__option'
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="time" className="sr-only">Select a Time</label>
      <select className='booking-form__time' name="time" id="time" value={formData.time} onChange={handleChange}>
        <option  value="">-- Select Time --</option>
        {timeOptions.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <fieldset className='booking-form__field'>
  <legend className='booking-form__legend'>Select Your Primary Goals*</legend>
  {goalOptions.map((goal) => (
    <label
      className={`booking-form__option ${
        formData.goals.includes(goal) ? 'selected' : ''
      }`}
      key={goal}
    >
      <input 
        type="checkbox"
        value={goal}
        data-category="goals"
        checked={formData.goals.includes(goal)}
        onChange={handleChange}
      />
      {goal}
    </label>
  ))}
  {errors.goals && <div className='error'>{errors.goals}</div>}
</fieldset>

      <fieldset className='booking-form__field'>
  <legend className='booking-form__legend'>Select Your Primary Interests*</legend>
  {interestOptions.map((interest) => (
    <label
      key={interest}
      className={`booking-form__option ${
        formData.interests.includes(interest) ? 'selected' : ''
      }`}
    >
      <input
        type="checkbox"
        value={interest}
        data-category="interests"
        checked={formData.interests.includes(interest)}
        onChange={handleChange}
      />
      {interest}
    </label>
  ))}
  {errors.interests && <div className='error'>{errors.interests}</div>}
</fieldset>
  
   <label className="booking-form__terms">
  <input
    type="checkbox"
    name="consent"
    checked={formData.consent}
    onChange={handleChange}
  />
  <div className="booking-form__terms-text-wrapper">
    In order to continue, I agree to receive emails and texts from Aktiva Fitness about its services, promotions, offers, and updates. You can unsubscribe at any time. For information about how we manage your personal information, please see our Privacy Policy.
    {errors.consent && (
      <div className="booking-form__error-term">{errors.consent}</div>
    )}
  </div>
</label>



      <button className='booking-form__submit' type="submit">Book a Visit</button>
      
    </form>
  );
};

export default BookingForm;
