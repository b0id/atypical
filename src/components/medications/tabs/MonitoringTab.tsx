import React from 'react';

interface MonitoringParameter {
  parameter: string;
  baseline: boolean;
  frequency: string;
  threshold?: string;
  rationale: string;
}

interface MonitoringTabProps {
  monitoringParameters: MonitoringParameter[];
  assessmentTools?: {
    name: string;
    description: string;
    link?: string;
  }[];
  followUpRecommendations?: string[];
}

const MonitoringTab: React.FC<MonitoringTabProps> = ({
  monitoringParameters,
  assessmentTools = [],
  followUpRecommendations = []
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Monitoring Guidelines</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parameter
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Baseline
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rationale
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {monitoringParameters.map((param, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {param.parameter}
                    {param.threshold && (
                      <p className="text-xs text-gray-500 mt-1">
                        Threshold: {param.threshold}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {param.baseline ? (
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        Required
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                        Optional
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {param.frequency}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {param.rationale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {assessmentTools.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Assessment Tools</h2>
          
          <div className="space-y-4">
            {assessmentTools.map((tool, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <h3 className="text-md font-medium text-gray-800">{tool.name}</h3>
                <p className="text-gray-600 mt-1">{tool.description}</p>
                {tool.link && (
                  <a href={tool.link} className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-block">
                    View tool information
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Metabolic Monitoring</h2>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Weight/BMI</span>
                <span className="text-sm text-blue-600">Priority</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Monitor at baseline, 4 weeks, 8 weeks, 12 weeks, then quarterly
              </p>
            </div>
            
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Blood glucose</span>
                <span className="text-sm text-blue-600">Priority</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Monitor at baseline, 12 weeks, then annually
              </p>
            </div>
            
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Lipid profile</span>
                <span className="text-sm text-blue-600">Priority</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Monitor at baseline, 12 weeks, then annually
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Neurological Monitoring</h2>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">AIMS assessment</span>
                <span className="text-sm text-purple-600">Every 6 months</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Abnormal Involuntary Movement Scale to detect tardive dyskinesia
              </p>
            </div>
            
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">EPS assessment</span>
                <span className="text-sm text-purple-600">As needed</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Monitor for parkinsonian symptoms, akathisia, and dystonia
              </p>
            </div>
            
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Sedation</span>
                <span className="text-sm text-purple-600">Regular</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Assess impact on functioning and safety (e.g., driving)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {followUpRecommendations.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Follow-up Recommendations</h2>
          
          <ul className="space-y-2 text-gray-700">
            {followUpRecommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
                <span>{recommendation}</span>
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
          <h3 className="text-lg font-medium text-gray-900">Monitoring Alerts</h3>
        </div>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Weight gain &gt; 7% from baseline requires intervention and possible medication review</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Fasting blood glucose &gt; 126 mg/dL or HbA1c &gt; 6.5% warrants referral to primary care</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Any signs of tardive dyskinesia require immediate clinical evaluation</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 flex-shrink-0 mr-2">•</span>
            <span>Abnormal liver function tests &gt; 3 times upper limit require dose reduction or discontinuation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MonitoringTab;