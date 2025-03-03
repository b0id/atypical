import React, { useState } from 'react';

// Define medication property types for comparison
interface MedicationProperty {
  id: string;
  name: string;
}

interface ComparisonRating {
  propertyId: string;
  value: number; // 1-5 scale
  notes?: string;
}

interface ComparisonMedication {
  id: string;
  name: string;
  ratings: ComparisonRating[];
}

interface ComparisonTabProps {
  currentMedicationId: string;
  medications: ComparisonMedication[];
  properties: MedicationProperty[];
  strengthsWeaknesses?: {
    strengths: string[];
    weaknesses: string[];
  };
}

const ComparisonTab: React.FC<ComparisonTabProps> = ({
  currentMedicationId,
  medications,
  properties,
  strengthsWeaknesses
}) => {
  const [selectedMedications, setSelectedMedications] = useState<string[]>([
    currentMedicationId,
    // Add 2-3 default comparisons that make sense
    ...medications
      .filter(med => med.id !== currentMedicationId)
      .slice(0, 3)
      .map(med => med.id)
  ]);

  // Handle medication selection
  const toggleMedication = (medicationId: string) => {
    if (medicationId === currentMedicationId) {
      // Can't remove the current medication
      return;
    }

    setSelectedMedications(prev => 
      prev.includes(medicationId)
        ? prev.filter(id => id !== medicationId)
        : [...prev, medicationId]
    );
  };

  // Get rating color based on value (1-5)
  const getRatingColor = (value: number) => {
    switch (value) {
      case 1: return 'bg-red-100 text-red-800';
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-yellow-100 text-yellow-800';
      case 4: return 'bg-blue-100 text-blue-800';
      case 5: return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Filter visible medications
  const visibleMedications = medications.filter(med => 
    selectedMedications.includes(med.id)
  );

  // Get rating text
  const getRatingText = (value: number) => {
    switch (value) {
      case 1: return 'Very low';
      case 2: return 'Low';
      case 3: return 'Moderate';
      case 4: return 'High';
      case 5: return 'Very high';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Medication Comparison</h2>
        
        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-800 mb-2">Select medications to compare:</h3>
          <div className="flex flex-wrap gap-2">
            {medications.map(med => (
              <button
                key={med.id}
                onClick={() => toggleMedication(med.id)}
                className={`px-3 py-1.5 text-sm rounded-md ${
                  selectedMedications.includes(med.id)
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                } ${med.id === currentMedicationId ? 'font-bold ring-2 ring-blue-500 ring-offset-1' : ''}`}
                disabled={med.id === currentMedicationId}
              >
                {med.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50">
                  Property
                </th>
                {visibleMedications.map(med => (
                  <th key={med.id} scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {med.name}
                    {med.id === currentMedicationId && (
                      <span className="ml-1 text-blue-600">(Current)</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.map(property => (
                <tr key={property.id}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                    {property.name}
                  </td>
                  {visibleMedications.map(med => {
                    const rating = med.ratings.find(r => r.propertyId === property.id);
                    const value = rating?.value || 0;
                    
                    return (
                      <td key={`${med.id}-${property.id}`} className="px-4 py-3 text-sm text-center">
                        {value > 0 ? (
                          <div className="flex flex-col items-center">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${getRatingColor(value)}`}>
                              {getRatingText(value)}
                            </span>
                            {rating?.notes && (
                              <span className="text-xs text-gray-500 mt-1">
                                {rating.notes}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {strengthsWeaknesses && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              <span className="inline-flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Strengths
              </span>
            </h2>
            
            <ul className="space-y-2 text-gray-700">
              {strengthsWeaknesses.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              <span className="inline-flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limitations
              </span>
            </h2>
            
            <ul className="space-y-2 text-gray-700">
              {strengthsWeaknesses.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Switching Considerations</h2>
        
        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <p className="text-sm text-gray-800">
            When switching from another antipsychotic to this medication, consider the following general principles:
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-md font-medium text-gray-800 mb-1">Cross-titration</h3>
            <p className="text-gray-700 text-sm">
              Gradually reduce the dose of the current medication while increasing the dose of the new medication. 
              This approach minimizes withdrawal effects and rebound symptoms.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-md font-medium text-gray-800 mb-1">Receptor binding profiles</h3>
            <p className="text-gray-700 text-sm">
              Consider the different receptor binding profiles when switching. Rapid changes can lead to withdrawal symptoms, 
              rebound psychosis, or side effects due to different receptor affinities.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-md font-medium text-gray-800 mb-1">Monitoring</h3>
            <p className="text-gray-700 text-sm">
              Close monitoring is essential during the switching period. Watch for emergence of new side effects, 
              withdrawal effects from the previous medication, or symptom exacerbation.
            </p>
          </div>
          
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-1">Patient education</h3>
            <p className="text-gray-700 text-sm">
              Educate the patient about possible temporary effects during the switch and the importance of 
              reporting any significant changes in symptoms or side effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTab;