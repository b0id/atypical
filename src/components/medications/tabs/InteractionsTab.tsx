import React from 'react';

interface DrugInteraction {
  drug: string;
  effect: string;
  severity: 'major' | 'moderate' | 'minor';
  mechanism?: string;
  recommendation: string;
}

interface PharmacokineticInfo {
  property: string;
  value: string;
  notes?: string;
}

interface InteractionsTabProps {
  drugInteractions: DrugInteraction[];
  pharmacokinetics?: PharmacokineticInfo[];
  cyp450?: {
    substrate?: string[];
    inhibitor?: string[];
    inducer?: string[];
  };
  foodInteractions?: string[];
}

const InteractionsTab: React.FC<InteractionsTabProps> = ({
  drugInteractions,
  pharmacokinetics = [],
  cyp450 = {},
  foodInteractions = []
}) => {
  // Helper function to get color for interaction severity
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'major':
        return 'bg-red-100 text-red-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'minor':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Drug Interactions</h2>
        
        {drugInteractions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Drug
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Effect
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Severity
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recommendation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {drugInteractions.map((interaction, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {interaction.drug}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {interaction.effect}
                      {interaction.mechanism && (
                        <span className="text-xs text-gray-500 block mt-1">
                          Mechanism: {interaction.mechanism}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${getSeverityColor(interaction.severity)}`}>
                        {interaction.severity.charAt(0).toUpperCase() + interaction.severity.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {interaction.recommendation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 italic">No specific drug interactions available.</p>
        )}
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">CYP450 Interactions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-2">Substrate of</h3>
            {cyp450.substrate && cyp450.substrate.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {cyp450.substrate.map((enzyme, index) => (
                  <li key={index}>{enzyme}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No data available</p>
            )}
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-2">Inhibits</h3>
            {cyp450.inhibitor && cyp450.inhibitor.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {cyp450.inhibitor.map((enzyme, index) => (
                  <li key={index}>{enzyme}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No significant inhibition</p>
            )}
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-2">Induces</h3>
            {cyp450.inducer && cyp450.inducer.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {cyp450.inducer.map((enzyme, index) => (
                  <li key={index}>{enzyme}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No significant induction</p>
            )}
          </div>
        </div>
      </div>
      
      {pharmacokinetics.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Pharmacokinetics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pharmacokinetics.map((pk, index) => (
              <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0 md:border-b-0 md:pb-0">
                <h3 className="text-sm font-medium text-gray-500">{pk.property}</h3>
                <p className="text-gray-900">{pk.value}</p>
                {pk.notes && <p className="text-xs text-gray-500 mt-1">{pk.notes}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {foodInteractions.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Food Interactions</h2>
          
          <ul className="space-y-2 text-gray-700">
            {foodInteractions.map((interaction, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                <span>{interaction}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
        <div className="flex items-center mb-4">
          <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">Important Considerations</h3>
        </div>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Always check for potential interactions with current medications when starting or changing dose</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>QT prolongation risk increases when combined with other QT-prolonging medications</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Enzyme inducers may decrease efficacy; enzyme inhibitors may increase side effects</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Polypharmacy in psychiatric patients increases risk of clinically significant interactions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InteractionsTab;