import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for the menu toggle

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar flexbox">
      <div className="navbar-title flexbox">
        <img
          onClick={() => window.location.href = 'https://www.kdkce.edu.in/'}
          src="./logo.png"
          alt="Logo"
        />
        <div onClick={() => navigate('/')}> 
          <h2>Coding</h2>
          <h2>Club</h2>
        </div>
      </div>
      
      {/* Mobile Menu Toggle Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links flexbox ${menuOpen ? 'open' : ''}`}>
        <span onClick={() => navigate('/join')}>Join Us</span>
        <span onClick={() => navigate('/members')}>Members</span>
        <span onClick={() => window.location.href = 'https://ritishdas.github.io/coding_club/#events'}>Event</span>
        <span onClick={() => window.location.href = 'https://ritishdas.github.io/coding_club/#about'}>About</span>
      </div>
    </div>
  );
}
