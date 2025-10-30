import './StudentPortalGuide.css';

const StudentPortalGuide = () => {
  return (
    <div className="student-guide-container">
      <h1>Student Portal Guide</h1>
      <p>Welcome to the Student Portal! This guide will help you navigate the attendance system and manage your attendance records.</p>

      <h2>1. Student Login</h2>
      <p>Access the student portal by clicking the <strong>'Student Login'</strong> button on the main page.</p>
      <img src="/src/assets/studentlogin.png" alt="Student Login Screen" className="screenshot" />
      <div className="step">
        <h3>Login Steps:</h3>
        <ol>
          <li>Enter your registered <strong>Email</strong> (e.g., <code>student@example.com</code>)</li>
          <li>Enter your <strong>Password</strong> (e.g., <code>pass123</code>)</li>
          <li>Click the <strong>Login</strong> button to access your dashboard</li>
        </ol>
      </div>

      <h2>2. Marking Attendance</h2>
      <p>Once logged in, you'll see the student dashboard with your attendance options.</p>
      <img src="/src/assets/studentdashboard.png" alt="Student Dashboard" className="screenshot" />
      
      <div className="step">
        <h3>How to Mark Your Attendance:</h3>
        <ol>
          <li>Click the <strong>'Scan Attendance QR Code'</strong> button (blue button)</li>
          <li>Allow camera access when prompted by your browser</li>
          <li>Point your camera at the QR code displayed by your faculty</li>
          <li>Hold steady until the system confirms your attendance</li>
        </ol>
      </div>
      
      <div className="note">
        <strong>Important:</strong> The QR code refreshes every few seconds. Make sure to scan it while it's visible on the screen.
      </div>

      <h2>3. Viewing Attendance History</h2>
      <p>Track your attendance records and status.</p>
      <ul>
        <li className="list-item"><strong>Date:</strong> Check the date of each attendance record</li>
        <li className="list-item"><strong>Faculty:</strong> See which faculty member conducted the session</li>
        <li className="list-item"><strong>Department:</strong> Verify the department/course</li>
        <li className="list-item"><strong>Status:</strong> View whether you were marked Present/Absent</li>
      </ul>

      <h2>4. Profile Management</h2>
      <p>Update your personal information and security settings.</p>
      <ul>
        <li className="list-item"><strong>Update Email:</strong> Change your registered email address</li>
        <li className="list-item"><strong>Change Password:</strong> Set a new password for your account</li>
        <li className="list-item"><strong>View Activity:</strong> Check your recent login history</li>
      </ul>
      
      <div className="note">
        <strong>Need Help?</strong> If you encounter any issues, please contact your faculty or system administrator.
      </div>
      <a href="https://smart-attendence-systems-1.onrender.com/student_login.html" className="access-link" target="_blank" rel="noopener noreferrer">
        Go to Student Portal
      </a>
    </div>
  );
};

export default StudentPortalGuide;
