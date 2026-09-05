import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/forms/RegistrationForm";

function Registration() {
  return (
    <div>
      <RegistrationForm />
      <p>
        Have an account? <Link to="/login">LOGIN</Link>
      </p>
    </div>
  );
}

export default Registration;
