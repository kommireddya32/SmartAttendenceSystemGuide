import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ProjectGuideLayout from './components/ProjectGuideLayout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/guide/*" element={<ProjectGuideLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
