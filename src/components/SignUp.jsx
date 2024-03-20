import React, { useState } from "react";

const Signup = ({ toggleModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== repeatPassword) {
      // Handle password mismatch error
      alert("Passwords do not match");
      return;
    }

    toggleModal();
    // Reset the form
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setRepeatPassword("");
    setAddress("");
  };

  return (
    <div className="signup-modal-overlay" onClick={toggleModal}>
      <div
        className="signup-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close" onClick={toggleModal}>
          &times;
        </span>
        <div className="signup-form">
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
