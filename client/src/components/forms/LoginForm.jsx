import React, { useState } from "react";
import { useUserActions } from "../../hooks/user.actions";
import "./Form.css";

function LoginForm() {
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const userActions = useUserActions();

  const handleSubmit = (event) => {
    event.preventDefault();
    const registrationForm = event.currentTarget;

    if (registrationForm.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const formData = {
      email: form.email,
      password: form.password,
    };

    userActions.login(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="formContainer">
      <div className="formMain">
        <div className="col-md-6">
          <h2 className="formTitle">LOGIN</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  validated && !form.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  validated && !form.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Please provide a password.</div>
            </div>
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
