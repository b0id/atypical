import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MedicationItem from './MedicationItem';

// This would typically come from an API or data file
// For now, we'll use some sample data
const sampleMedications = [
  { 
    id: 'risperidone', 
    genericName: 'Risperidone', 
    brandName: 'Risperdal' 
  },
  { 
    id: 'olanzapine', 
    genericName: 'Olanzapine', 
    brandName: 'Zyprexa' 
  },
  { 
    id: 'quetiapine', 
    genericName: 'Quetiapine', 
    brandName: 'Seroquel' 
  },
  { 
    id: 'aripiprazole', 
    genericName: 'Aripiprazole', 
    brandName: 'Abilify' 
  },
  { 
    id: 'ziprasidone', 
    genericName: 'Ziprasidone', 
    brandName: 'Geodon' 
  }
];

const MedicationSidebar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter medications based on search term
  const filteredMedications = sampleMedications.filter(med => 
    med.genericName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    med.brandName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <nav className="mt-2">
        <ul>
          {filteredMedications.length > 0 ? (
            filteredMedications.map(medication => (
              <MedicationItem 
                key={medication.id}
                id={medication.id}
                genericName={medication.genericName}
                brandName={medication.brandName}
                isActive={medication.id === id}
              />
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-gray-500 italic">
              No medications found
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MedicationSidebar;