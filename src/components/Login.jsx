import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ toggleModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");

    // Close the modal
    toggleModal();

    nav("/");
  };

  return (
    <div className="login-modal-overlay" onClick={toggleModal}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={toggleModal}>
          &times;
        </span>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
