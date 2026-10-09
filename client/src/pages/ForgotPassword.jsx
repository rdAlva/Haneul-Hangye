import { useState } from 'react'
import { supabase } from '../db/supabase'
import { Link } from 'react-router-dom'
import "./ForgotPassword.css";
import logo from "../assets/logo.png";
import hangulKorean from "../assets/korean.png";

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleReset = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: `${window.location.origin}/reset-password`,
  })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Check your email for the reset link!')
    }
    setLoading(false)
  }

 return (
  <div className="forgot-page">
    <div className="forgot-card">

      <div className="forgot-info">
        <div className="brand">
          <div className="brand-logo">
            <img className="logo-img" src={logo} alt="Logo" />
          </div>
          <h1>Haneul Hangye</h1>
        </div>

        <h2>
          Good day,<br />
          Learner!
        </h2>

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
          <img
            className="language-icon"
            src={hangulKorean}
            alt="Korean"
          />
        </div>
      </div>

      <div className="forgot-form">
        <h1>Reset your password</h1>

        <p className="forgot-subtitle">
          Enter your email or username and we'll<br />
          send you a link to reset your password.
        </p>

        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="reset-button"
          onClick={handleReset}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>

        <p className="login-text">
          Remember your password? <Link to="/">Log In</Link>
        </p>
      </div>

    </div>
  </div>
)
}

export default ForgotPassword