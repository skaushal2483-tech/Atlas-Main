import { useState } from "react";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import AuthBg from "../components/authentication/AuthBg";


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

        <Footer />
      </div>
    </div>
  );
}

export default Auth;