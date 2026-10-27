import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please fill in email and password");
            return;
        }
        setError("");

        //sen to backend comes later
        console.log("Logging in", email);
    }

  return (
    <main className="login">
      <h2>Log in</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">Password</label>
                  <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              {error && <p className="login-error">{error}</p>}
        <button type="submit">Log in</button>
      </form>
      <p>
        No account? <Link to="/register">Register</Link>
      </p>
    </main>
  );
}

export default Login;
