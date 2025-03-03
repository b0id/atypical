import React, { createContext, useContext, useState, useEffect } from 'react';
import { medicationService, MedicationListItem } from '../services/MedicationService';
import { Medication } from '../types/MedicationTypes';

interface MedicationContextType {
  // Medication list and filtering
  medicationList: MedicationListItem[];
  allIndications: string[];
  currentMedication: Medication | null;
  // Actions
  setCurrentMedicationId: (id: string) => void;
  searchMedications: (searchTerm: string) => void;
  filterByIndication: (indication: string) => void;
}

const MedicationContext = createContext<MedicationContextType | undefined>(undefined);

export const MedicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State
  const [medicationList, setMedicationList] = useState<MedicationListItem[]>([]);
  const [allIndications, setAllIndications] = useState<string[]>([]);
  const [currentMedication, setCurrentMedication] = useState<Medication | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndication, setSelectedIndication] = useState<string>('');

  // Initialize data on component mount
  useEffect(() => {
    // Get all medications and indications
    setMedicationList(medicationService.getAllMedicationsList());
    setAllIndications(medicationService.getAllIndications());
    
    // Set default medication (can be changed when navigating)
    const defaultMedication = medicationService.getMedicationById('risperidone');
    if (defaultMedication) {
      setCurrentMedication(defaultMedication);
    }
  }, []);

  // Set current medication by ID
  const setCurrentMedicationId = (id: string) => {
    const medication = medicationService.getMedicationById(id);
    if (medication) {
      setCurrentMedication(medication);
    }
  };

  // Search medications
  const searchMedications = (term: string) => {
    setSearchTerm(term);
    // If we have both search term and indication, we need to filter by both
    if (selectedIndication) {
      const byIndication = medicationService.filterMedicationsByIndication(selectedIndication);
      const filtered = byIndication.filter(med => 
        med.genericName.toLowerCase().includes(term.toLowerCase()) || 
        med.brandName.toLowerCase().includes(term.toLowerCase())
      );
      setMedicationList(filtered);
    } else {
      // Otherwise just search
      setMedicationList(medicationService.searchMedications(term));
    }
  };

  // Filter by indication
  const filterByIndication = (indication: string) => {
    setSelectedIndication(indication);
    // If we have both search term and indication, we need to filter by both
    if (searchTerm) {
      const bySearch = medicationService.searchMedications(searchTerm);
      const filtered = bySearch.filter(med => {
        const fullMed = medicationService.getMedicationById(med.id);
        return fullMed?.indications.some(ind => 
          ind.toLowerCase().includes(indication.toLowerCase())
        );
      });
      setMedicationList(filtered);
    } else {
      // Otherwise just filter by indication
      setMedicationList(medicationService.filterMedicationsByIndication(indication));
    }
  };

  const value = {
    medicationList,
    allIndications,
    currentMedication,
    setCurrentMedicationId,
    searchMedications,
    filterByIndication
  };

  return (
    <MedicationContext.Provider value={value}>
      {children}
    </MedicationContext.Provider>
  );
};

// Custom hook for using the medication context
export const useMedication = () => {
  const context = useContext(MedicationContext);
  if (context === undefined) {
    throw new Error('useMedication must be used within a MedicationProvider');
  }
  return context;
};