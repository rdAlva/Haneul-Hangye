import { useState } from "react";
import { supabase } from "../db/supabase";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import logo from '../assets/logo.png'
import hangulKorean from '../assets/korean.png'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-info">
          <div className="brand">
            <div className="brand-logo">
              <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <h2>Haneul Hangye - 하늘항계</h2>
          </div>
          <h1>
            Good day, Learner!
          </h1>
          <p className="korean-text">안녕하세요!</p>
          <p className="info-text">
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
        <div className="login-form">
          <h1>Welcome Back!</h1>

          <p className="login-subtitle">
            Log in to continue your Korean learning journey
          </p>

          {error && <p className="error">{error}</p>}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button
            className="login-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="signup-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
