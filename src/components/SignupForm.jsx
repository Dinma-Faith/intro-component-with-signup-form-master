import React from "react";
import "../css/styles.css";

const SignupForm = () => {
  return (
    <div className="main-layout">
      <div className="intro">
        <h1 className="form-title">Learn to code by watching others</h1>
        <p className="description">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="form-section">
        <div className="offer">
          Try it free 7 days <span> then $20/mo. thereafter</span>
        </div>
        <div className="container">
          <form id="signupForm">
            <input type="text" id="firstName" placeholder="First Name" />
            <p className="error-message" id="firstNameError"></p>

            <input type="text" id="lastName" placeholder="Last Name" />
            <p className="error-message" id="lastNameError"></p>

            <input type="email" id="email" placeholder="Email Address" />
            <p className="error-message" id="emailError"></p>

            <input type="password" id="password" placeholder="Password" />
            <p className="error-message" id="passwordError"></p>

            <button type="submit">CLAIM YOUR FREE TRIAL</button>
          </form>
          <p className="terms">
            By clicking the button, you are agreeing to our
            <span>Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
