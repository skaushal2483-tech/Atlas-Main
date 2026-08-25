import { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/authentication/Login.css";

function Login({ onSwitch }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      submit: "",
    }));
  }

  function handleLogin(event) {
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      event.preventDefault();
      setErrors(newErrors);
      return;
    }

    const storedUser = localStorage.getItem("atlasUser");

    if (!storedUser) {
      event.preventDefault();

      setErrors({
        submit: "No account found. Please sign up first.",
      });

      return;
    }

    const user = JSON.parse(storedUser);

    if (
      user.email !== email ||
      user.password !== password
    ) {
      event.preventDefault();

      setErrors({
        submit: "Incorrect email or password.",
      });

      return;
    }

    localStorage.setItem("atlasLoggedIn", "true");

    localStorage.setItem(
      "atlasCurrentUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      })
    );

    setErrors({});
  }

  return (
    <section className="login-card">

      <h1 className="login-title">
        Train. Track. <span>Improve.</span>
      </h1>

      <div className="login-form">

        <div className="login-field">
          <input
            id="login-email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />

          {errors.email && (
            <p className="login-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="login-field">
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          {errors.password && (
            <p className="login-error">
              {errors.password}
            </p>
          )}
        </div>

        {errors.submit && (
          <p className="login-error login-submit-error">
            {errors.submit}
          </p>
        )}

        <Link
          to="/dashboard"
          className="login-submit"
          onClick={handleLogin}
        >
          Login
        </Link>

      </div>

      <div className="login-switch">
        <span>Don't have an account?</span>

        <button
          type="button"
          onClick={onSwitch}
        >
          Sign up
        </button>
      </div>

    </section>
  );
}

export default Login;