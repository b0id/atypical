import React from 'react';

const ReferencesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">References & Resources</h1>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Clinical Guidelines</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">American Psychiatric Association (APA) Practice Guidelines</p>
              <p className="text-gray-600 text-sm">Guidelines for the treatment of patients with schizophrenia</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">NICE Guidelines</p>
              <p className="text-gray-600 text-sm">UK guidelines for psychosis and schizophrenia treatment</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">World Federation of Societies of Biological Psychiatry (WFSBP)</p>
              <p className="text-gray-600 text-sm">Guidelines for biological treatment of schizophrenia</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Key Literature</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">Leucht et al. (2013)</p>
              <p className="text-gray-600 text-sm">Comparative efficacy and tolerability of 15 antipsychotic drugs in schizophrenia: a multiple-treatments meta-analysis</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">CATIE Trial (2005)</p>
              <p className="text-gray-600 text-sm">Effectiveness of antipsychotic drugs in patients with chronic schizophrenia</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">Pilinger et al. (2020)</p>
              <p className="text-gray-600 text-sm">Comparative effects of 18 antipsychotics on metabolic function in patients with schizophrenia</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Drug Information Resources</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">FDA Prescribing Information</p>
              <p className="text-gray-600 text-sm">Official US FDA approved medication information</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">Psychotropic Drug Directory</p>
              <p className="text-gray-600 text-sm">Comprehensive reference on psychotropic medications</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <div>
              <p className="font-medium text-gray-800">Maudsley Prescribing Guidelines</p>
              <p className="text-gray-600 text-sm">Evidence-based prescribing guidelines for psychiatric disorders</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReferencesPage;