import React from 'react';

interface MedicationHeaderProps {
  genericName: string;
  brandName: string;
}

const MedicationHeader: React.FC<MedicationHeaderProps> = ({ 
  genericName, 
  brandName 
}) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{genericName}</h1>
        <p className="text-gray-600">{brandName}</p>
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
  );
};

export default MedicationHeader;