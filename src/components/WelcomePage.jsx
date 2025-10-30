import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-page-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Smart Attendance System</h1>
        <p className="welcome-subtitle">Please choose an option to continue</p>

        <div className="options-container">
          <Link to="/guide" style={{ textDecoration: 'none' }}>
            <div className="option-card">
              <h2 className="card-title">Project Guide</h2>
              <p className="card-description">Learn how to use the Smart Attendance System with our comprehensive guide</p>
            </div>
          </Link>
          <div className="option-card" onClick={() => window.location.href = 'https://smart-attendence-systems-1.onrender.com/'} style={{ cursor: 'pointer' }}>
            <h2 className="card-title">Go to Project</h2>
            <p className="card-description">Access the main application to start managing attendance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;