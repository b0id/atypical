import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
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
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                References
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
          <div className="p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search medications..."
              />
            </div>
          </div>
          <nav className="mt-2">
            <ul>
              {/* This will be populated with medication list from data */}
              <li>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-sm font-medium bg-gray-100 text-blue-600 border-l-4 border-blue-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <div>Risperidone</div>
                    <div className="text-xs text-gray-500">Risperdal</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <div>Olanzapine</div>
                    <div className="text-xs text-gray-500">Zyprexa</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <div>Quetiapine</div>
                    <div className="text-xs text-gray-500">Seroquel</div>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* This is where the router will inject content */}
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