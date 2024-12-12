import React, { useState } from "react";
import "./Formvalidation.scss";

const Formvalidation = () => {
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.id) newErrors.id = "ID is required.";
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      setFormData({ id: "", fullName: "", email: "", phone: "", password: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="Formvalidation">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Enter your Id"
          value={formData.id}
          onChange={handleChange}
        />
        {errors.id && <span className="error">{errors.id}</span>}

        <input
          type="text"
          name="fullName"
          placeholder="Enter Your Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Enter your Phone Num"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Formvalidation;
