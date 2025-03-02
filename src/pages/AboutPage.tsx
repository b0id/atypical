import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">About This Resource</h1>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Purpose</h2>
        <p className="text-gray-700 mb-3">
          The Atypical Antipsychotics Reference is designed to provide clinicians with evidence-based, 
          up-to-date information about atypical antipsychotic medications. This tool aims to support 
          clinical decision-making by offering clear, concise, and practical information about these 
          medications.
        </p>
        <p className="text-gray-700">
          Our goal is to improve patient care by helping clinicians select appropriate medications, 
          optimize dosing regimens, anticipate and manage side effects, and monitor treatment effectively.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Information Sources</h2>
        <p className="text-gray-700 mb-3">
          The information in this reference is compiled from multiple reliable sources, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
          <li>FDA-approved prescribing information</li>
          <li>Published clinical practice guidelines</li>
          <li>Peer-reviewed research literature</li>
          <li>Systematic reviews and meta-analyses</li>
          <li>Pharmacology reference texts</li>
        </ul>
        <p className="text-gray-700">
          All information is reviewed for accuracy and clinical relevance. References for specific 
          recommendations and data points are available in the References section.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Disclaimer</h2>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md text-yellow-800">
          <p className="mb-2">
            <strong>This resource is for educational purposes only.</strong>
          </p>
          <p className="text-sm">
            The information provided should not replace clinical judgment or professional medical advice. 
            Clinicians should always consult the most current prescribing information and clinical guidelines 
            when making treatment decisions. Individual patient factors, comorbidities, and concurrent 
            medications must be considered for each clinical situation.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Development Team</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">Medical Content</h3>
            <p className="text-gray-600">Board-certified psychiatrists and clinical pharmacists specializing in psychopharmacology</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Technical Development</h3>
            <p className="text-gray-600">Software engineers and UX designers with healthcare information systems experience</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Last Updated</h3>
            <p className="text-gray-600">February 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;