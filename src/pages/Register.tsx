import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import { register } from "../api/api";
import { validateRegister } from "../utils/validateRegister";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function clearError(field: string) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const newErrors = validateRegister(
      { name, email, dateOfBirth, phoneNumber, country, password },
      repeatPassword,
    );

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setError("");

    try {
      await register({
        name,
        email,
        dateOfBirth,
        phoneNumber,
        country,
        password,
      });
      navigate("/login");
    } catch (err) {
      if (err instanceof Error && err.message === "Email already registered") {
        setErrors({ email: err.message });
      } else {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    }
  }

  return (
    <main className="register">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <div className="register-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError("name");
            }}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}
        </div>
        <div className="register-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
            }}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
        <div className="register-field">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
              clearError("dateOfBirth");
            }}
          />
          {errors.dateOfBirth && (
            <p className="field-error">{errors.dateOfBirth}</p>
          )}
        </div>
        <div className="register-field">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              clearError("phoneNumber");
            }}
          />
          {errors.phoneNumber && (
            <p className="field-error">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="register-field">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              clearError("country");
            }}
          />
          {errors.country && <p className="field-error">{errors.country}</p>}
        </div>
        <div className="register-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError("password");
            }}
          />
          {errors.password && <p className="field-error">{errors.password}</p>}
        </div>
        <div className="register-field">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            id="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
              clearError("repeatPassword");
            }}
          />
          {errors.repeatPassword && (
            <p className="field-error">{errors.repeatPassword}</p>
          )}
        </div>
        {error && <p className="register-error">{error}</p>}
        <button className="btn" type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
}

export default Register;
