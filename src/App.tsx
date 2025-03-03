import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import MedicationDetailPage from './pages/MedicationDetailPage';
import ReferencesPage from './pages/ReferencesPage';
import AboutPage from './pages/AboutPage';
import { MedicationProvider } from './context/MedicationContext';

const App: React.FC = () => {
  return (
    <MedicationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* Redirect root to first medication */}
            <Route index element={<Navigate to="/medications/risperidone" replace />} />
            
            {/* Medication routes */}
            <Route path="medications">
              {/* Redirect /medications to first medication */}
              <Route index element={<Navigate to="/medications/risperidone" replace />} />
              
              {/* Individual medication detail page */}
              <Route path=":id" element={<MedicationDetailPage />} />
            </Route>
            
            {/* Reference and About pages */}
            <Route path="references" element={<ReferencesPage />} />
            <Route path="about" element={<AboutPage />} />
            
            {/* Catch-all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </MedicationProvider>
  );
};

export default App;