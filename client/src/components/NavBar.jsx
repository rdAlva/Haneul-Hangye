import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { supabase } from '../db/supabase'
import './NavBar.css'
import logo from '../assets/logo.png'
import AccModal from './AccModal'
import user from '../assets/user.png'

function NavBar() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }
  const [ModalOpen, setModalOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Haneul Hangye" />
        <h1>Haneul Hangye - 하늘항계 </h1>
      </div>

      <div className="nav-links">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/sessions">Sessions</Link></li>
        <li><Link to="/vocabulary">Vocabulary</Link></li>
      </ul>

      <img onClick={() => setModalOpen(true)} className="logo-img" src={user} alt="User Profile" />
      {ModalOpen && <AccModal isOpen={ModalOpen} onClose={setModalOpen} onConfirm={handleLogout} />}
      </div>
    </nav>
  )
}

export default NavBar