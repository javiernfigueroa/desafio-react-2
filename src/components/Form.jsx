import { useState } from "react";

export function Form({ setAlertMessage, setAlertColor }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setAlertMessage("There are blank fields");
      setAlertColor("")
    } else if (password !== confirmPassword) {
      setAlertMessage("The passwords do not match");
      setAlertColor("")
    } else if (!isValidEmail(email)){
      setAlertMessage("The email has an incorrect format");
      setAlertColor("")
    } else {
      setAlertMessage("Registration successful");
      setAlertColor("ok");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3 mt-3">
        <label htmlFor="nombre" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control border border-dark"
          id="name"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control border border-dark"
          id="email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control border border-dark"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control border border-dark"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-secondary w-100">
          Sign Up
        </button>
      </div>
    </form>
  );
}
