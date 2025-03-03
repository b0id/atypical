import React from 'react';
import MedicationTab, { TabType } from './MedicationTab';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tabId: TabType) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview' as TabType, label: 'Overview' },
    { id: 'dosing' as TabType, label: 'Dosing' },
    { id: 'efficacy' as TabType, label: 'Efficacy' },
    { id: 'sideEffects' as TabType, label: 'Side Effects' },
    { id: 'interactions' as TabType, label: 'Interactions' },
    { id: 'monitoring' as TabType, label: 'Monitoring' },
    { id: 'comparison' as TabType, label: 'Comparison' }
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-2 md:space-x-8 overflow-x-auto pb-1 scrollbar-hide">
        {tabs.map(tab => (
          <MedicationTab
            key={tab.id}
            label={tab.label}
            tabId={tab.id}
            activeTab={activeTab}
            onClick={onTabChange}
          />
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;