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
        <input
          type="text"
          className="form-control border border-dark"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control border border-dark"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control border border-dark"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control border border-dark"
          id="confirmPassword"
          placeholder="Confirm Password"
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
