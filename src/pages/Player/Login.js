import "./Login.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const correctUsername = "patryk";
  const correctPassword = "1234";

  const handleSubmit = event => {
    event.preventDefault();
    if (password === correctPassword) {
      navigate(`/${username}`);
    } else {
      navigate("/zasady");
    }
  };

  return (
    <div className="login-body">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Username:
          <input
            type="text"
            className="input-field"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" className="submit-button" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
