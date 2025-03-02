import React from 'react';

interface DosingInfo {
  initialDose: string;
  maintenanceDose: string;
  maxDose: string;
  frequencyPerDay: number;
  notes?: string;
}

interface SpecialPopulation {
  title: string;
  recommendation: string;
  warning?: string;
}

interface DosingTabProps {
  dosing: DosingInfo;
  specialPopulations?: SpecialPopulation[];
  administrationGuidelines?: string[];
}

const DosingTab: React.FC<DosingTabProps> = ({
  dosing,
  specialPopulations = [],
  administrationGuidelines = []
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Dosing Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2">Initial Dosing</h3>
            <p className="text-gray-700 mb-4">{dosing.initialDose}</p>
            
            <h3 className="text-md font-medium text-gray-800 mb-2">Maintenance Dosing</h3>
            <p className="text-gray-700 mb-4">{dosing.maintenanceDose}</p>
            
            <h3 className="text-md font-medium text-gray-800 mb-2">Maximum Dose</h3>
            <p className="text-gray-700">{dosing.maxDose}</p>
          </div>
          
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2">Administration</h3>
            <p className="text-gray-700 mb-4">
              {dosing.frequencyPerDay === 1 
                ? 'Once daily' 
                : `${dosing.frequencyPerDay} times daily`}
            </p>
            
            {administrationGuidelines.length > 0 && (
              <div className="mb-4">
                <h3 className="text-md font-medium text-gray-800 mb-2">Administration Guidelines</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {administrationGuidelines.map((guideline, index) => (
                    <li key={index}>{guideline}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {dosing.notes && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Note:</span> {dosing.notes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {specialPopulations.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Special Populations</h2>
          
          <div className="space-y-4">
            {specialPopulations.map((population, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                <h3 className="text-md font-medium text-gray-800 mb-1">{population.title}</h3>
                <p className="text-gray-700">{population.recommendation}</p>
                
                {population.warning && (
                  <div className="mt-2 p-2 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-800">
                    <strong>Warning:</strong> {population.warning}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Dose Adjustments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2">Renal Impairment</h3>
            <div className="overflow-hidden border border-gray-200 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Impairment</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-500">Mild-Moderate</td>
                    <td className="px-4 py-2 text-sm text-gray-700">No adjustment necessary</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-500">Severe</td>
                    <td className="px-4 py-2 text-sm text-gray-700">Consider reducing dose by 50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2">Hepatic Impairment</h3>
            <div className="overflow-hidden border border-gray-200 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Impairment</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-500">Mild</td>
                    <td className="px-4 py-2 text-sm text-gray-700">No adjustment necessary</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-500">Moderate</td>
                    <td className="px-4 py-2 text-sm text-gray-700">Start at 50% of normal dose</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-500">Severe</td>
                    <td className="px-4 py-2 text-sm text-gray-700">Start at 25% of normal dose</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosingTab;