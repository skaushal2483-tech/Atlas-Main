import { useState } from "react";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import AuthBg from "../components/authentication/AuthBg";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

import "../styles/authentication/Auth.css";

function Auth() {
  const [isDark, setIsDark] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`auth-page ${isDark ? "dark" : "light"}`}>
      <AuthBg />

      <div className="auth-content">
        <Navbar
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <main className="auth-main">
          {isSignup ? (
            <Signup onSwitch={() => setIsSignup(false)} />
          ) : (
            <Login onSwitch={() => setIsSignup(true)} />
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Auth;