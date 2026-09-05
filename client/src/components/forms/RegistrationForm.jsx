import React, { useState } from "react";
import { useUserActions } from "../../hooks/user.actions";
import "./Form.css";

function RegistrationForm() {
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    bio: "",
  });
  const userAction = useUserActions();

  const handleSubmit = (event) => {
    event.preventDefault();
    const registrationForm = event.currentTarget;

    if (registrationForm.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const formData = {
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      password: form.password,
      bio: form.bio,
    };

    userAction.register(formData);
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
          <h2 className="formTitle">Register</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  validated && !form.firstname ? "is-invalid" : ""
                }`}
                id="firstname"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a first name.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  validated && !form.lastname ? "is-invalid" : ""
                }`}
                id="lastname"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a last name.
              </div>
            </div>

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

            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                className={`form-control ${
                  validated && !form.bio ? "is-invalid" : ""
                }`}
                id="bio"
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows="3"
              />
              <div className="invalid-feedback">Please provide a bio.</div>
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
