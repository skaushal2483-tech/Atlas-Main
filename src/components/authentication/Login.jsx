import { useState } from "react";
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
      setErrors(newErrors);
      return;
    }

    const storedUser = localStorage.getItem("atlasUser");

    if (!storedUser) {
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

    setFormData({
      email: "",
      password: "",
    });

    setErrors({});

    console.log("Login successful");
  }

  return (
    <section className="login-card">

      <h1 className="login-title">
        Train. Track. <span>Improve.</span>
      </h1>

      <form
        className="login-form"
        onSubmit={handleSubmit}
        noValidate
      >

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

        <button
          className="login-submit"
          type="submit"
        >
          Login
        </button>

      </form>

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