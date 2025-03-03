import { medications } from '../data/medications';
import { Medication } from '../types/MedicationTypes';

export interface MedicationListItem {
  id: string;
  genericName: string;
  brandName: string;
}

class MedicationService {
  /**
   * Get all medications as a simplified list format
   */
  getAllMedicationsList(): MedicationListItem[] {
    return medications.map(med => ({
      id: med.id,
      genericName: med.genericName,
      brandName: med.brandName || med.brandNames[0]
    }));
  }

  /**
   * Get a medication by ID
   */
  getMedicationById(id: string): Medication | undefined {
    return medications.find(med => med.id === id);
  }

  /**
   * Search medications by generic name or brand name
   */
  searchMedications(searchTerm: string): MedicationListItem[] {
    if (!searchTerm) {
      return this.getAllMedicationsList();
    }

    const normalizedSearchTerm = searchTerm.toLowerCase();
    
    return medications
      .filter(med => 
        med.genericName.toLowerCase().includes(normalizedSearchTerm) || 
        med.brandNames.some(brand => brand.toLowerCase().includes(normalizedSearchTerm))
      )
      .map(med => ({
        id: med.id,
        genericName: med.genericName,
        brandName: med.brandName || med.brandNames[0]
      }));
  }

  /**
   * Filter medications by indication
   */
  filterMedicationsByIndication(indication: string): MedicationListItem[] {
    if (!indication) {
      return this.getAllMedicationsList();
    }

    const normalizedIndication = indication.toLowerCase();
    
    return medications
      .filter(med => 
        med.indications.some(ind => ind.toLowerCase().includes(normalizedIndication))
      )
      .map(med => ({
        id: med.id,
        genericName: med.genericName,
        brandName: med.brandName || med.brandNames[0]
      }));
  }

  /**
   * Get all unique indications from all medications
   */
  getAllIndications(): string[] {
    const allIndications = medications.flatMap(med => med.indications);
    return [...new Set(allIndications)].sort();
  }

  /**
   * Get all medications for comparison
   */
  getMedicationsForComparison(currentMedicationId: string): {
    currentMedication: Medication | undefined,
    otherMedications: MedicationListItem[]
  } {
    const currentMedication = this.getMedicationById(currentMedicationId);
    const otherMedications = medications
      .filter(med => med.id !== currentMedicationId)
      .map(med => ({
        id: med.id,
        genericName: med.genericName,
        brandName: med.brandName || med.brandNames[0]
      }));
      
    return {
      currentMedication,
      otherMedications
    };
  }
}

// Create and export a singleton instance
export const medicationService = new MedicationService();