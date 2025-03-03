import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import MedicationSidebar from '../medications/MedicationSidebar';

const AppLayout: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Atypical Antipsychotics Reference</h1>
              <p className="text-sm text-gray-600">Evidence-based medication information for clinicians</p>
            </div>
            <div className="flex space-x-2">
              <Link 
                to="/references" 
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                References
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar - only show for medication routes */}
        {location.pathname.includes('/medications') && (
          <div className="md:w-64 w-full bg-white border-b md:border-b-0 md:border-r border-gray-200 flex-shrink-0">
            <MedicationSidebar />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Atypical Antipsychotics Reference App</div>
            <div>Last updated: February 2025 | Disclaimer: For educational purposes only</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;