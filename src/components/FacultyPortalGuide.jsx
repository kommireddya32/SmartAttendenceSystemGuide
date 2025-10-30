import { Link } from 'react-router-dom';
import './FacultyPortalGuide.css';
import facultyLoginImg from '../assets/facultylogin.png';
import facultyDashboardImg from '../assets/facultydashboard.png';
import liveSessionImg from '../assets/livesession.png';

const FacultyPortalGuide = () => {
  return (
    <div className="faculty-guide-container">
      <h1>Faculty Portal Guide</h1>
      <p>This guide explains how to use the Faculty Portal for managing attendance sessions and viewing student records.</p>

      <h2>1. Faculty Login</h2>
      <p>Click the <strong>'Faculty Login'</strong> button on the main page to access the sign-in form.</p>
      <img src={facultyLoginImg} alt="Faculty Login Screen" className="screenshot" />
      <ul>
        <li className="list-item">Use your registered <strong>Email</strong> (e.g., <code>prof@example.com</code>)</li>
        <li className="list-item">Enter your <strong>Password</strong> (e.g., <code>pass123</code>)</li>
        <li className="list-item">Click <strong>Login</strong> to access the Faculty Dashboard</li>
      </ul>

      <h2>2. Live Session Management</h2>
      <p>After logging in, you'll see the main dashboard for managing attendance sessions.</p>
      <img src={facultyDashboardImg} alt="Faculty Dashboard" className="screenshot" />
      
      <h3>Starting a New Session:</h3>
      <ol>
        <li className="list-item">Select the appropriate <strong>Department</strong> from the dropdown menu</li>
        <li className="list-item">Click the <strong>'Start Live Session'</strong> button</li>
        <li className="list-item">A QR code will appear on the screen</li>
      </ol>
      
      <div className="note">
        <strong>Note:</strong> The QR code refreshes every 3 seconds for security purposes. Students must scan the code while it's active.
      </div>
      
      <img src={liveSessionImg} alt="Live Session QR Code" className="screenshot" />
      
      <h3>Ending a Session:</h3>
      <ul>
        <li className="list-item">Click the <strong>'Stop Session'</strong> button to end the attendance session</li>
        <li className="list-item">The QR code will be deactivated immediately</li>
      </ul>

      <h2>3. Viewing Attendance Records</h2>
      <p>Access past attendance records and generate reports.</p>
      <ul>
        <li className="list-item"><strong>Filter by Date:</strong> Select a date range to view specific records</li>
        <li className="list-item"><strong>Filter by Department:</strong> View records for specific departments</li>
        <li className="list-item"><strong>Export Options:</strong> Download attendance reports in various formats</li>
      </ul>

      <h2>4. Profile Management</h2>
      <p>Update your account information and security settings.</p>
      <ul>
        <li className="list-item">Change your email address</li>
        <li className="list-item">Update your password</li>
        <li className="list-item">View your activity log</li>
      </ul>
      
      <a href="https://smart-attendence-systems-1.onrender.com/faculty_login.html" className="access-link" target="_blank" rel="noopener noreferrer">
        Go to Faculty Portal
      </a>
    </div>
  );
};

export default FacultyPortalGuide;
