import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import prashimg from '../components/image/Polish_20241230_141958151.jpg';
import './Home.css';

const Home = () => {
  // Set the initial state to control which component is displayed inside the text div
  const [activeSection, setActiveSection] = useState('home'); // Default section is 'home'

  // Function to handle navbar item clicks
  const handleNavClick = (section) => {
    setActiveSection(section); // Update state based on the section clicked
  };

  // Conditional rendering for different sections
  let content;
  switch (activeSection) {
    case 'home':
      content = (
        <div>
          <h2>Prashant Satpute</h2>
          <p>
            A passionate Java Full Stack Developer with expertise in building scalable web applications.
            Experienced in React, SQL, and Java technologies, I create dynamic, high-performance solutions that
            drive business growth. Currently seeking new opportunities to apply my skills and contribute to impactful
            projects.
          </p>
        </div>
      );
      break;
    case 'about':
      content = <About />;
      break;
    case 'skill':
      content = <Skill />;
      break;
    case 'projects':
      content = <Projects />;
      break;
    case 'experience':
      content = <Experience />;
      break;
    default:
      content = <div>Content not found.</div>; // Default if no valid section is selected
  }

  return (
    <div className="home-container">
      {/* Fixed photo on the left */}
      <img src={prashimg} alt="my pic" className="photo" />

      <div className="content-container">
        {/* Profile Information */}
        <div className="profile-info">
          <h2>Prashant Satpute</h2>
          <p><strong>Contact:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> prashant@example.com</p>
        </div>

        {/* Navbar: Pass handleNavClick to manage section switching */}
        <Navbar handleNavClick={handleNavClick} activeSection={activeSection} /> {/* Pass the function to Navbar */}
        
        {/* Text content area */}
        <div className="text">
          {/* Conditionally render content based on activeSection */}
          {content}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
