import React from 'react';

interface SideEffect {
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  frequency: 'common' | 'uncommon' | 'rare';
  description: string;
}

interface BlackBoxWarning {
  title: string;
  description: string;
}

interface SideEffectsTabProps {
  sideEffects: SideEffect[];
  blackBoxWarnings?: BlackBoxWarning[];
}

const SideEffectsTab: React.FC<SideEffectsTabProps> = ({
  sideEffects,
  blackBoxWarnings = []
}) => {
  // Helper function to get appropriate colors based on severity
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Helper function to get appropriate colors based on frequency
  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'common':
        return 'bg-blue-100 text-blue-800';
      case 'uncommon':
        return 'bg-purple-100 text-purple-800';
      case 'rare':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Side Effects</h2>
        <p className="text-gray-600 mb-4">Common and notable side effects associated with this medication.</p>
        
        <div className="mt-6 space-y-6">
          {sideEffects.map((effect, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between">
                <h3 className="text-md font-medium text-gray-800">{effect.name}</h3>
                <div className="flex space-x-2">
                  <span className={`inline-block text-xs px-2 py-1 rounded-full ${getSeverityColor(effect.severity)}`}>
                    {effect.severity.charAt(0).toUpperCase() + effect.severity.slice(1)}
                  </span>
                  <span className={`inline-block text-xs px-2 py-1 rounded-full ${getFrequencyColor(effect.frequency)}`}>
                    {effect.frequency.charAt(0).toUpperCase() + effect.frequency.slice(1)}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mt-2">{effect.description}</p>
            </div>
          ))}

          {sideEffects.length === 0 && (
            <p className="text-gray-500 italic">No specific side effect information available.</p>
          )}
        </div>
      </div>
      
      {blackBoxWarnings && blackBoxWarnings.length > 0 && (
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
          <div className="flex items-center mb-4">
            <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">Black Box Warnings</h3>
          </div>
          
          <div className="space-y-4">
            {blackBoxWarnings.map((warning, index) => (
              <div key={index} className="border-l-4 border-yellow-400 pl-4 py-2">
                <h4 className="font-medium text-gray-800">{warning.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{warning.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Management Strategies</h3>
        <p className="text-gray-700 mb-3">
          The following strategies may help manage common side effects:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Sedation: Take medication in the evening; dose adjustments may be necessary</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Weight gain: Monitor weight regularly; implement diet and exercise interventions early</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Extrapyramidal symptoms: Consider dose reduction or anticholinergic medication</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Metabolic changes: Regular monitoring of glucose and lipids is recommended</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideEffectsTab;