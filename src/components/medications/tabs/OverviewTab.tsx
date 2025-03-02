import React from 'react';

interface OverviewTabProps {
  mechanismOfAction: string;
  halfLife?: string;
  activeMetabolite?: string;
  availableForms?: string[];
  costCategory?: string;
  genericAvailable?: boolean;
  genericSince?: number;
}

const OverviewTab: React.FC<OverviewTabProps> = ({
  mechanismOfAction,
  halfLife = "Not available",
  activeMetabolite,
  availableForms = [],
  costCategory = "Not specified",
  genericAvailable = false,
  genericSince
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-3">Mechanism of Action</h2>
        <p className="text-sm text-gray-600 mb-2">How this medication works in the brain</p>
        <p className="text-gray-800">{mechanismOfAction}</p>
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
          <p className="text-gray-800">{halfLife}</p>
          {activeMetabolite && (
            <p className="text-sm text-gray-600 mt-1">Active metabolite: {activeMetabolite}</p>
          )}
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">Available Forms</h3>
          </div>
          {availableForms.length > 0 ? (
            <ul className="space-y-1 text-gray-800">
              {availableForms.map((form, index) => (
                <li key={index}>{form}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Information not available</p>
          )}
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">Cost Comparison</h3>
          </div>
          <p className="text-gray-800 font-medium">
            {costCategory.charAt(0).toUpperCase() + costCategory.slice(1)}
          </p>
          {genericAvailable && genericSince && (
            <p className="text-sm text-gray-600 mt-1">Generic available since {genericSince}</p>
          )}
          {!genericAvailable && (
            <p className="text-sm text-gray-600 mt-1">No generic available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;