import React, { useState } from 'react';
import './Navbar.css'; // Ensure this is imported

const Navbar = ({ handleNavClick, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu on mobile

  // Toggle the mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Handle menu item click and close the menu on mobile
  const handleItemClick = (section) => {
    handleNavClick(section); // Call the function passed from the parent to switch content
    setIsMenuOpen(false); // Close the menu after a click
  };

  return (
    <nav>
      <div className="navbar-container">
        {/* Hamburger icon */}
        <div className="hamburger" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleItemClick('home')}
          >
            Home
          </li>
          <li
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleItemClick('about')}
          >
            About
          </li>
          <li
            className={activeSection === 'skill' ? 'active' : ''}
            onClick={() => handleItemClick('skill')}
          >
            Skills
          </li>
          <li
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleItemClick('projects')}
          >
            Projects
          </li>
          <li
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => handleItemClick('experience')}
          >
            Experience
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
