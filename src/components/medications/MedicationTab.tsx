import React from 'react';

export type TabType = 'overview' | 'dosing' | 'efficacy' | 'sideEffects' | 'interactions' | 'monitoring' | 'comparison';

interface MedicationTabProps {
  label: string;
  tabId: TabType;
  activeTab: TabType;
  onClick: (tabId: TabType) => void;
}

const MedicationTab: React.FC<MedicationTabProps> = ({ 
  label, 
  tabId, 
  activeTab, 
  onClick 
}) => {
  return (
    <button
      onClick={() => onClick(tabId)}
      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
        activeTab === tabId
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
    >
      {label}
    </button>
  );
};

export default MedicationTab;