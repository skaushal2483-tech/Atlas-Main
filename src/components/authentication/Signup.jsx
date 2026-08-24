import { useState } from "react";
import "../../styles/authentication/Signup.css";

function Signup({ onSwitch }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
      submit: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();

    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required.";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Enter a valid name.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Use 8+ characters with uppercase, lowercase and a number.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedUser = localStorage.getItem("atlasUser");

    if (storedUser) {
      const existingUser = JSON.parse(storedUser);

      if (existingUser.email === email) {
        setErrors({
          submit: "An account with this email already exists.",
        });
        return;
      }
    }

    const user = {
      name,
      email,
      password: formData.password,
    };

    localStorage.setItem("atlasUser", JSON.stringify(user));

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({});

    onSwitch();
  }

  return (
    <section className="signup-card">

      <h1 className="signup-title">
        JOIN <span>ATLAS</span>
      </h1>

      <form
        className="signup-form"
        onSubmit={handleSubmit}
        noValidate
      >

        <div className="signup-field">
          <input
            id="signup-name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />

          {errors.name && (
            <p className="signup-error">{errors.name}</p>
          )}
        </div>

        <div className="signup-field">
          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />

          {errors.email && (
            <p className="signup-error">{errors.email}</p>
          )}
        </div>

        <div className="signup-field">
          <input
            id="signup-password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />

          {errors.password && (
            <p className="signup-error">{errors.password}</p>
          )}
        </div>

        <div className="signup-field">
          <input
            id="signup-confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
          />

          {errors.confirmPassword && (
            <p className="signup-error">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {errors.submit && (
          <p className="signup-error signup-submit-error">
            {errors.submit}
          </p>
        )}

        <button
          className="signup-submit"
          type="submit"
        >
          Sign Up
        </button>

      </form>

      <div className="signup-switch">
        <span>Already have an account?</span>

        <button
          type="button"
          onClick={onSwitch}
        >
          Login
        </button>
      </div>

    </section>
  );
}

export default Signup;