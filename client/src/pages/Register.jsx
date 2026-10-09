import { useState } from "react";
import { supabase } from "../db/supabase";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import logo from "../assets/logo.png";
import hangulKorean from "../assets/korean.png";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-info">
          <div className="brand">
            <div className="brand-logo">
              <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <h2>Haneul Hangye</h2>
          </div>

          <h1>
            Good day,
            <br />
            Learner!
          </h1>

          <p className="korean-greeting">안녕하세요!</p>

          <p>
            Learn Korean. Track your progress.
            <br />
            Stay consistent.
            <br />
            <br />
            Organize your study sessions, build your vocabulary and keep your learning streak going all in
            one place.
          </p>

          <div className="language-icons">
            <img className="language-icon" src={hangulKorean} alt="Korean" />
          </div>
        </div>

        <div className="register-form">
          <h1>Create your Account</h1>
          <p>Start your Korean learning journey today</p>

          {error && <p className="error">{error}</p>}

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button onClick={handleRegister} disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="login-link">
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
