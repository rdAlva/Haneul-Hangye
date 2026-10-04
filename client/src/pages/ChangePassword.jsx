import { useState } from 'react'
import { supabase } from '../db/supabase'
import { Link } from 'react-router-dom'
import "./ChangePassword.css";
import logo from "../assets/logo.png";
import hangulKorean from "../assets/korean.png";

function ChangePassword() {
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [message, setMessage] = useState(null)
const [error, setError] = useState(null)
const [loading, setLoading] = useState(false)

  const handleReset = async () => {
  setLoading(true)
  setError(null)
  setMessage(null)

  if (password !== confirmPassword) {
    setError('Passwords do not match')
    setLoading(false)
    return
  }

  const { error } = await supabase.auth.updateUser({
    password: password
  })

  if (error) {
    setError(error.message)
  } else {
    setMessage('Your password has been reset successfully!')
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
          Learn Korean. Track your progress.<br />
          Stay consistent.<br /><br />
          Organize your study sessions, build<br />
          your vocabulary, practice with quizzes<br />
          and flashcards, and keep your learning<br />
          streak going all in one place.
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
    Reset your password and create a new<br />
    password for your account.
  </p>

  {error && <p className="error">{error}</p>}
  {message && <p className="success">{message}</p>}

  <div className="form-group">
    <label>New Password</label>
    <input
      type="password"
      placeholder="Enter your new password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Confirm Password</label>
    <input
      type="password"
      placeholder="Confirm your new password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
  </div>

  <div className="password-requirements">
    <p>Password requirements</p>
    <span>• At least 8 characters</span>
    <span>• Letters and numbers</span>
    <span>• Special characters</span>
  </div>

  <button
    className="reset-button"
    onClick={handleReset}
    disabled={loading}
  >
    {loading ? 'Resetting...' : 'Reset Password'}
  </button>
</div>

    </div>
  </div>
)
}

export default ChangePassword