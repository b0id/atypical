import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MedicationHeader from '../components/medications/MedicationHeader';
import TabNavigation from '../components/medications/TabNavigation';
import MedicationTabContent from '../components/medications/MedicationTabContents';
import { TabType } from '../components/medications/MedicationTab';
import { useMedication } from '../context/MedicationContext';

const MedicationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const { currentMedication, setCurrentMedicationId } = useMedication();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    if (id) {
      setCurrentMedicationId(id);
      setLoading(false);
    }
  }, [id, setCurrentMedicationId]);
  
  // Function to change active tab
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (!currentMedication) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Medication Not Found</h2>
        <p className="mb-6">The medication you're looking for doesn't exist in our database.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Medication Header */}
      <MedicationHeader 
        genericName={currentMedication.genericName} 
        brandName={currentMedication.brandName || currentMedication.brandNames[0]} 
      />
      
      {/* Tabs Navigation */}
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
      
      {/* Tab Content */}
      <div className="mt-6">
        <MedicationTabContent 
          activeTab={activeTab}
          medicationId={id || ''}
          medicationData={currentMedication}
        />
      </div>
    </div>
  );
};

export default MedicationDetailPage;