import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Tab type for type safety
type TabType = 'overview' | 'dosing' | 'efficacy' | 'sideEffects' | 'interactions' | 'monitoring' | 'comparison';

const MedicationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  
  // Function to change active tab
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="space-y-6">
      {/* Medication Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Risperidone</h1>
          <p className="text-gray-600">Risperdal</p>
        </div>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            PDF
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Patient Info
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => handleTabChange('overview')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleTabChange('dosing')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'dosing'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Dosing
          </button>
          <button
            onClick={() => handleTabChange('efficacy')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'efficacy'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Efficacy
          </button>
          <button
            onClick={() => handleTabChange('sideEffects')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'sideEffects'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Side Effects
          </button>
          <button
            onClick={() => handleTabChange('interactions')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'interactions'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Interactions
          </button>
          <button
            onClick={() => handleTabChange('monitoring')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'monitoring'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Monitoring
          </button>
          <button
            onClick={() => handleTabChange('comparison')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'comparison'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Comparison
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="mt-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Mechanism of Action</h2>
              <p className="text-sm text-gray-600 mb-2">How this medication works in the brain</p>
              <p className="text-gray-800">
                Blocks dopamine D2 and serotonin 5-HT2A receptors, with higher affinity for 5-HT2A than D2.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">Key Points</h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                    <span>FDA approved indications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                    <span>Off-label uses with evidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                    <span>Unique properties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">Cautions</h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                    <span>Contraindications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                    <span>Black box warnings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                    <span>Special populations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">Half-life</h3>
                </div>
                <p className="text-gray-800">20-24 hours</p>
                <p className="text-sm text-gray-600 mt-1">Active metabolite: 21-30 hours</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">Available Forms</h3>
                </div>
                <ul className="space-y-1 text-gray-800">
                  <li>Tablets: 0.25, 0.5, 1, 2, 3, 4 mg</li>
                  <li>Oral solution: 1 mg/mL</li>
                  <li>Long-acting injection</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">Cost Comparison</h3>
                </div>
                <p className="text-gray-800 font-medium">Low</p>
                <p className="text-sm text-gray-600 mt-1">Generic available since 2008</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Placeholder for other tabs */}
        {activeTab === 'dosing' && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Dosing Information</h2>
            <p className="text-gray-600">Dosing information would be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'efficacy' && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Efficacy Data</h2>
            <p className="text-gray-600">Efficacy information would be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'sideEffects' && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Side Effects</h2>
            <p className="text-gray-600">Side effects information would be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'interactions' && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Drug Interactions</h2>
            <p className="text-gray-600">Drug interactions information would be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'monitoring' && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Monitoring Guidelines</h2>
            <p className="text-gray-600">Monitoring information would be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'comparison' && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Comparison</h2>
            <p className="text-gray-600">Medication comparison information would be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicationDetailPage;