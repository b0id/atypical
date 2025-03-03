import React from 'react';
import { TabType } from './MedicationTab';

// Import all tab components
import OverviewTab from './tabs/OverviewTab';
import DosingTab from './tabs/DosingTab';
import EfficacyTab from './tabs/EfficacyTab';
import SideEffectsTab from './tabs/SideEffectsTab';
import InteractionsTab from './tabs/InteractionsTab';
import MonitoringTab from './tabs/MonitoringTab';
import ComparisonTab from './tabs/ComparisonTab';

interface MedicationTabContentProps {
  activeTab: TabType;
  medicationId: string;
  // This would normally get the medication data from a context or props
  // For now, we'll use placeholder props
  medicationData: any;
}

const MedicationTabContent: React.FC<MedicationTabContentProps> = ({
  activeTab,
  medicationId,
  medicationData
}) => {
  // Render the appropriate tab content based on activeTab
  switch (activeTab) {
    case 'overview':
      return (
        <OverviewTab 
          mechanismOfAction={medicationData.mechanismOfAction || "Not available"}
          halfLife={medicationData.halfLife || "Not available"}
          activeMetabolite={medicationData.activeMetabolite}
          availableForms={medicationData.availableForms || []}
          costCategory={medicationData.costCategory || "Not specified"}
          genericAvailable={medicationData.genericAvailable || false}
          genericSince={medicationData.genericSince}
        />
      );
      
    case 'dosing':
      return (
        <DosingTab 
          dosing={medicationData.dosing || {
            initialDose: "Not available",
            maintenanceDose: "Not available",
            maxDose: "Not available",
            frequencyPerDay: 1
          }}
          specialPopulations={medicationData.specialPopulations || []}
          administrationGuidelines={medicationData.administrationGuidelines || []}
        />
      );
      
    case 'efficacy':
      return (
        <EfficacyTab 
          indications={medicationData.indications || []}
          efficacyRatings={medicationData.efficacyRatings || []}
          keyStudies={medicationData.keyStudies || []}
        />
      );
      
    case 'sideEffects':
      return (
        <SideEffectsTab 
          sideEffects={medicationData.sideEffects || []}
          blackBoxWarnings={medicationData.blackBoxWarnings || []}
        />
      );
      
    case 'interactions':
      return (
        <InteractionsTab 
          drugInteractions={medicationData.drugInteractions || []}
          pharmacokinetics={medicationData.pharmacokinetics || []}
          cyp450={medicationData.cyp450 || {}}
          foodInteractions={medicationData.foodInteractions || []}
        />
      );
      
    case 'monitoring':
      return (
        <MonitoringTab 
          monitoringParameters={medicationData.monitoringParameters || []}
          assessmentTools={medicationData.assessmentTools || []}
          followUpRecommendations={medicationData.followUpRecommendations || []}
        />
      );
      
    case 'comparison':
      return (
        <ComparisonTab 
          currentMedicationId={medicationId}
          medications={medicationData.comparisonMedications || []}
          properties={medicationData.comparisonProperties || []}
          strengthsWeaknesses={medicationData.strengthsWeaknesses || {
            strengths: [],
            weaknesses: []
          }}
        />
      );
      
    default:
      return <div>Invalid tab selected</div>;
  }
};

export default MedicationTabContent;