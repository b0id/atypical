export interface SideEffect {
    name: string;
    severity: 'mild' | 'moderate' | 'severe';
    frequency: 'common' | 'uncommon' | 'rare';
    description: string;
  }
  
  export interface DosingInfo {
    initialDose: string;
    maintenanceDose: string;
    maxDose: string;
    frequencyPerDay: number;
    notes?: string;
  }
  
  export interface SpecialPopulation {
    title: string;
    recommendation: string;
    warning?: string;
  }
  
  export interface DrugInteraction {
    drug: string;
    effect: string;
    severity: 'major' | 'moderate' | 'minor';
    mechanism?: string;
    recommendation: string;
  }
  
  export interface PharmacokineticInfo {
    property: string;
    value: string;
    notes?: string;
  }
  
  export interface MonitoringParameter {
    parameter: string;
    baseline: boolean;
    frequency: string;
    threshold?: string;
    rationale: string;
  }
  
  export interface AssessmentTool {
    name: string;
    description: string;
    link?: string;
  }
  
  export interface StudyResult {
    condition: string;
    studyType: string;
    outcome: string;
    effectSize?: string;
    comparedTo?: string;
    reference?: string;
  }
  
  export interface EfficacyRating {
    condition: string;
    rating: 'high' | 'moderate' | 'low' | 'uncertain';
    description: string;
  }
  
  export interface BlackBoxWarning {
    title: string;
    description: string;
  }
  
  export interface ComparisonProperty {
    id: string;
    name: string;
  }
  
  export interface ComparisonRating {
    propertyId: string;
    value: number; // 1-5 scale
    notes?: string;
  }
  
  export interface ComparisonMedication {
    id: string;
    name: string;
    ratings: ComparisonRating[];
  }
  
  export interface StrengthsWeaknesses {
    strengths: string[];
    weaknesses: string[];
  }
  
  export interface Medication {
    id: string;
    genericName: string;
    brandNames: string[];
    brandName?: string; // Simplified for UI display
    drugClass: string;
    mechanismOfAction: string;
    indications: string[];
    sideEffects: SideEffect[];
    blackBoxWarnings?: BlackBoxWarning[];
    dosing: DosingInfo;
    specialPopulations?: SpecialPopulation[];
    administrationGuidelines?: string[];
    drugInteractions?: DrugInteraction[];
    pharmacokinetics?: PharmacokineticInfo[];
    cyp450?: {
      substrate?: string[];
      inhibitor?: string[];
      inducer?: string[];
    };
    foodInteractions?: string[];
    monitoringParameters?: MonitoringParameter[];
    assessmentTools?: AssessmentTool[];
    followUpRecommendations?: string[];
    efficacyRatings?: EfficacyRating[];
    keyStudies?: StudyResult[];
    halfLife?: string;
    activeMetabolite?: string;
    availableForms?: string[];
    costCategory: 'low' | 'medium' | 'high';
    genericAvailable?: boolean;
    genericSince?: number;
    comparisonMedications?: ComparisonMedication[];
    comparisonProperties?: ComparisonProperty[];
    strengthsWeaknesses?: StrengthsWeaknesses;
    yearApproved: number;
  }