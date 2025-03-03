import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MedicationItem from './MedicationItem';
import { useMedication } from '../../context/MedicationContext';
import SearchBar from '../common/SearchBar';

const MedicationSidebar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { 
    medicationList, 
    allIndications,
    searchMedications,
    filterByIndication 
  } = useMedication();
  
  const [selectedIndication, setSelectedIndication] = useState<string>("");
  
  // Handle indication change
  const handleIndicationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const indication = e.target.value;
    setSelectedIndication(indication);
    filterByIndication(indication);
  };
  
  // Handle search
  const handleSearch = (searchTerm: string) => {
    searchMedications(searchTerm);
  };

  // If medication changes in the URL but not in the sidebar selection, navigate to it
  useEffect(() => {
    if (id && medicationList.length > 0 && !medicationList.some(med => med.id === id)) {
      // If the current medication isn't in the filtered list, navigate to the first one
      navigate(`/medications/${medicationList[0].id}`);
    }
  }, [medicationList, id, navigate]);
  
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <div className="p-4">
        <SearchBar 
          placeholder="Search medications..."
          onSearch={handleSearch}
          className="mb-3"
        />
        
        <select
          value={selectedIndication}
          onChange={handleIndicationChange}
          className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">All Indications</option>
          {allIndications.map((indication) => (
            <option key={indication} value={indication}>
              {indication}
            </option>
          ))}
        </select>
      </div>
      
      <nav className="mt-2">
        <ul>
          {medicationList.length > 0 ? (
            medicationList.map(medication => (
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