import React from "react";
import SignupForm from "./SignupForm";
import "../css/styles.css";

const Form = () => {
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
          <SignupForm />
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
