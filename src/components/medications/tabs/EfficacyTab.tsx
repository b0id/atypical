import React from 'react';

interface StudyResult {
  condition: string;
  studyType: string;
  outcome: string;
  effectSize?: string;
  comparedTo?: string;
  reference?: string;
}

interface EfficacyRating {
  condition: string;
  rating: 'high' | 'moderate' | 'low' | 'uncertain';
  description: string;
}

interface EfficacyTabProps {
  indications: string[];
  efficacyRatings?: EfficacyRating[];
  keyStudies?: StudyResult[];
}

const EfficacyTab: React.FC<EfficacyTabProps> = ({
  indications,
  efficacyRatings = [],
  keyStudies = []
}) => {
  // Helper function to get color for efficacy rating
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-yellow-100 text-yellow-800';
      case 'uncertain':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">FDA-Approved Indications</h2>
        <ul className="list-disc pl-5 space-y-2">
          {indications.map((indication, index) => (
            <li key={index} className="text-gray-700">{indication}</li>
          ))}
        </ul>
      </div>
      
      {efficacyRatings.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Efficacy Ratings by Condition</h2>
          <div className="space-y-4">
            {efficacyRatings.map((rating, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-medium text-gray-800">{rating.condition}</h3>
                  <span className={`inline-block text-xs px-2 py-1 rounded-full ${getRatingColor(rating.rating)}`}>
                    {rating.rating.charAt(0).toUpperCase() + rating.rating.slice(1)} Evidence
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{rating.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {keyStudies.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Key Clinical Studies</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Condition
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Study Type
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Outcome
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Compared To
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {keyStudies.map((study, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {study.condition}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {study.studyType}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {study.outcome}
                      {study.effectSize && (
                        <span className="text-xs text-gray-500 block mt-1">
                          Effect size: {study.effectSize}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {study.comparedTo || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Clinical Considerations</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Response to treatment may take 2-4 weeks to become apparent</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Negative symptoms of schizophrenia may be less responsive than positive symptoms</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Treatment adherence is a critical factor in efficacy</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Consider long-acting injectable formulations for patients with adherence concerns</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Comparative Efficacy</h2>
        <p className="text-gray-700 mb-4">
          Based on meta-analyses and comparative studies, this medication's efficacy relative to other atypical antipsychotics:
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-32 text-sm text-gray-600">Positive symptoms:</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <span className="ml-2 text-sm text-gray-600">Good</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-32 text-sm text-gray-600">Negative symptoms:</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <span className="ml-2 text-sm text-gray-600">Moderate</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-32 text-sm text-gray-600">Cognitive effects:</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <span className="ml-2 text-sm text-gray-600">Moderate</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-32 text-sm text-gray-600">Overall efficacy:</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <span className="ml-2 text-sm text-gray-600">Good</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EfficacyTab;