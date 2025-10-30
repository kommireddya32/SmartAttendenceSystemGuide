import './AdminPortalGuide.css';

const AdminPortalGuide = () => {
  return (
    <div className="admin-guide-container">
      <h1>Admin Portal Guide</h1>
      <p>This guide provides a step-by-step explanation for administrators managing the Smart Attendance System.</p>

      <h2>1. Access and Login</h2>
      <a href="https://smart-attendence-systems-1.onrender.com/admin" className="access-link" target="_blank" rel="noopener noreferrer">
        Go to Admin Login Page
      </a>
      <p><strong>URL:</strong> <code>https://smart-attendence-systems-1.onrender.com/admin</code></p>
      <img src="/src/assets/adminlogin.png" alt="Admin Login Screen" className="screenshot" />
      <ul>
        <li className="list-item">Enter your registered <strong>Email</strong> (e.g., <code>admin@example.com</code>).</li>
        <li className="list-item">Enter your <strong>Password</strong> (e.g., <code>Admin@123</code>).</li>
        <li className="list-item">Click the <strong>Login</strong> button to access the Admin Dashboard.</li>
      </ul>

      <h2>2. Dashboard Overview</h2>
      <img src="/src/assets/admindashboard.png" alt="Admin Dashboard" className="screenshot" />
      <ul>
        <li className="list-item"><strong>Total Students:</strong> Current count of all registered students.</li>
        <li className="list-item"><strong>Total Faculty:</strong> Current count of all faculty members.</li>
        <li className="list-item"><strong>Departments:</strong> Number of academic departments.</li>
        <li className="list-item"><strong>Recent Activity:</strong> Timeline of recent system changes.</li>
      </ul>

      <h2>3. Manage Faculty</h2>
      <img src="/src/assets/managefaculty.png" alt="Manage Faculty" className="screenshot" />
      <h3>Adding a New Faculty Member:</h3>
      <ul>
        <li className="list-item">Click the <strong>Add New Faculty</strong> button.</li>
        <li className="list-item">Fill in: <strong>Full Name, Email, Password,</strong> and <strong>Department</strong>.</li>
        <li className="list-item">Click <strong>Save Faculty</strong> to create the account.</li>
      </ul>

      <h2>4. Manage Students</h2>
      <img src="/src/assets/managestudent.png" alt="Manage Students" className="screenshot" />
      <h3>Adding a New Student:</h3>
      <img src="/src/assets/addstudent.png" alt="Add Student" className="screenshot" />
      <ul>
        <li className="list-item">Click <strong>Add New Student</strong>.</li>
        <li className="list-item">Enter <strong>Full Name</strong> and <strong>Email</strong>.</li>
        <li className="list-item">Set <strong>Password</strong> and select <strong>Department</strong>.</li>
        <li className="list-item">Click <strong>Save Student</strong>.</li>
      </ul>
    </div>
  );
};

export default AdminPortalGuide;
