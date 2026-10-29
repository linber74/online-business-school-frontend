import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import { register } from "../api/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNr, setPhoneNr] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (name === "" || email === "" || dateOfBirth === "" ||
      password === "" || repeatPassword === "") {
      setError("Please fill in all required fields");
      return;
    }

    if (password.length < 8) {
       setError("Password must be at least 8 characters");
       return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      await register({ name, email, dateOfBirth, phoneNr, country, password });
      navigate("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <main className="register">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label htmlFor="phoneNr">Phone number (optional)</label>
          <input
            id="phoneNr"
            type="tel"
            value={phoneNr}
            onChange={(e) => setPhoneNr(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label htmlFor="country">Country (optional)</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            id="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        {error && <p className="register-error">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
}

export default Register;