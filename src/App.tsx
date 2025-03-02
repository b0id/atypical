import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import MedicationDetailPage from './pages/MedicationDetailPage';
import AboutPage from './pages/AboutPage';
import ReferencesPage from './pages/ReferencesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/medications/risperidone" replace />} />
          <Route path="medications/:id" element={<MedicationDetailPage />} />
          <Route path="references" element={<ReferencesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;