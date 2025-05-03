import React, { useState } from "react";
import "../css/styles.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name cannot be empty";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name cannot be empty";
    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    }

    if (!formData.password.trim()) newErrors.password = "Password cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <form id="signupForm" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName ? "error" : ""}
        />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className={errors.lastName ? "error" : ""}
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? "error" : ""}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

      <button type="submit">CLAIM YOUR FREE TRIAL</button>
    </form>
  );
};

export default SignupForm;
