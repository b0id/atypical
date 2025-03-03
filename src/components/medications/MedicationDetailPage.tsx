import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MedicationHeader from '../../components/medications/MedicationHeader';
import TabNavigation from '../../components/medications/TabNavigation';
import MedicationTabContent from '../../components/medications/MedicationTabContents';
import { TabType } from '../../components/medications/MedicationTab';

// This would normally be imported from a data service
// For now, we'll use placeholder data
const getMedicationData = (id: string) => {
  // This is placeholder data - in a real app, you would fetch this from an API or data source
  return {
    id,
    genericName: 'Risperidone',
    brandName: 'Risperdal',
    mechanismOfAction: 'Blocks dopamine D2 and serotonin 5-HT2A receptors, with higher affinity for 5-HT2A than D2.',
    indications: [
      'Schizophrenia',
      'Bipolar I Disorder (acute manic or mixed episodes)',
      'Irritability associated with Autism'
    ],
    sideEffects: [
      {
        name: 'Weight gain',
        severity: 'moderate',
        frequency: 'common',
        description: 'Average weight gain of 2-3 kg over 6-8 weeks of treatment.'
      },
      {
        name: 'Extrapyramidal symptoms',
        severity: 'moderate',
        frequency: 'common',
        description: 'Including parkinsonism, akathisia, dystonia, and tardive dyskinesia, especially at higher doses.'
      }
    ],
    dosing: {
      initialDose: '0.5-1 mg/day',
      maintenanceDose: '2-6 mg/day',
      maxDose: '16 mg/day',
      frequencyPerDay: 1,
      notes: 'Doses above 6 mg/day typically increase side effects without added efficacy.'
    },
    halfLife: '20-24 hours',
    activeMetabolite: '9-hydroxyrisperidone, 21-30 hours',
    availableForms: [
      'Tablets: 0.25, 0.5, 1, 2, 3, 4 mg',
      'Oral solution: 1 mg/mL',
      'Long-acting injection'
    ],
    costCategory: 'low',
    genericAvailable: true,
    genericSince: 2008
  };
};

const MedicationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [medicationData, setMedicationData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    if (id) {
      const data = getMedicationData(id);
      setMedicationData(data);
      setLoading(false);
    }
  }, [id]);
  
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

  if (!medicationData) {
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
        genericName={medicationData.genericName} 
        brandName={medicationData.brandName} 
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
          medicationData={medicationData}
        />
      </div>
    </div>
  );
};

export default MedicationDetailPage;