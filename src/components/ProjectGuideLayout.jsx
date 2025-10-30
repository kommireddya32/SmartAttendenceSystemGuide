import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import AdminPortalGuide from './AdminPortalGuide';
import FacultyPortalGuide from './FacultyPortalGuide';
import StudentPortalGuide from './StudentPortalGuide';
import './ProjectGuideLayout.css';

function ProjectGuideLayout() {
  const location = useLocation();

  return (
    <div className="guide-layout">
      <nav className="guide-nav">
        <Link 
          to="/guide/admin" 
          className={`nav-link ${location.pathname === '/guide/admin' ? 'active' : ''}`}
        >
          Admin Portal Guide
        </Link>
        <Link 
          to="/guide/faculty" 
          className={`nav-link ${location.pathname === '/guide/faculty' ? 'active' : ''}`}
        >
          Faculty Portal Guide
        </Link>
        <Link 
          to="/guide/student" 
          className={`nav-link ${location.pathname === '/guide/student' ? 'active' : ''}`}
        >
          Student Portal Guide
        </Link>
      </nav>
      
      <div className="guide-content">
        <Routes>
          <Route path="admin" element={<AdminPortalGuide />} />
          <Route path="faculty" element={<FacultyPortalGuide />} />
          <Route path="student" element={<StudentPortalGuide />} />
          <Route index element={
            <div className="welcome-message">
              <h1>Project Guide</h1>
              <p>Select a guide from the navigation above to get started.</p>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default ProjectGuideLayout;
