import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <LoginForm />
      <p>
        Do not have an account? <Link to="/register">REGISTER</Link>
      </p>
    </div>
  );
}

export default Login;
