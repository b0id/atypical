import React from 'react';
import { Link } from 'react-router-dom';

interface MedicationItemProps {
  id: string;
  genericName: string;
  brandName: string;
  isActive: boolean;
}

const MedicationItem: React.FC<MedicationItemProps> = ({ 
  id, 
  genericName, 
  brandName, 
  isActive 
}) => {
  return (
    <li>
      <Link 
        to={`/medications/${id}`}
        className={`flex items-center px-4 py-3 text-sm font-medium ${
          isActive 
            ? 'bg-gray-100 text-blue-600 border-l-4 border-blue-600' 
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div>
          <div>{genericName}</div>
          <div className="text-xs text-gray-500">{brandName}</div>
        </div>
      </Link>
    </li>
  );
};

export default MedicationItem;