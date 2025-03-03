import { Medication } from '../types/MedicationTypes';

export const medications: Medication[] = [
  {
    id: 'risperidone',
    genericName: 'Risperidone',
    brandNames: ['Risperdal', 'Risperdal Consta'],
    brandName: 'Risperdal', // For easier UI display
    drugClass: 'Atypical Antipsychotic',
    mechanismOfAction: 'Blocks dopamine D2 and serotonin 5-HT2A receptors, with higher affinity for 5-HT2A than D2.',
    indications: [
      'Schizophrenia',
      'Bipolar I Disorder (acute manic or mixed episodes)',
      'Irritability associated with Autism',
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
      },
      {
        name: 'Hyperprolactinemia',
        severity: 'moderate',
        frequency: 'common',
        description: 'Can lead to galactorrhea, gynecomastia, menstrual irregularities, and sexual dysfunction.'
      },
      {
        name: 'Sedation',
        severity: 'mild',
        frequency: 'common',
        description: 'Drowsiness, especially during initial treatment.'
      }
    ],
    blackBoxWarnings: [
      {
        title: 'Increased mortality in elderly patients with dementia-related psychosis',
        description: 'Elderly patients with dementia-related psychosis treated with antipsychotics are at an increased risk of death.'
      }
    ],
    dosing: {
      initialDose: '0.5-1 mg/day',
      maintenanceDose: '2-6 mg/day',
      maxDose: '16 mg/day',
      frequencyPerDay: 1,
      notes: 'Doses above 6 mg/day typically increase side effects without added efficacy.'
    },
    specialPopulations: [
      {
        title: 'Elderly',
        recommendation: 'Start at lower doses (0.25-0.5 mg twice daily).',
        warning: 'Increased risk of stroke in elderly patients with dementia.'
      },
      {
        title: 'Pediatric',
        recommendation: 'Approved for irritability associated with autism (5-16 years) and schizophrenia/bipolar (13-17 years).',
      },
      {
        title: 'Renal Impairment',
        recommendation: 'Start with 0.5 mg twice daily and titrate slowly; maximum dose 1.5 mg twice daily.',
      }
    ],
    administrationGuidelines: [
      'Can be taken with or without food',
      'Oral solution can be mixed with water, coffee, orange juice, or low-fat milk',
      'Do not mix with cola or tea'
    ],
    drugInteractions: [
      {
        drug: 'Carbamazepine',
        effect: 'Decreased risperidone levels',
        severity: 'moderate',
        mechanism: 'CYP3A4 induction',
        recommendation: 'Monitor for decreased efficacy; may need dose adjustment'
      },
      {
        drug: 'Fluoxetine',
        effect: 'Increased risperidone levels',
        severity: 'moderate',
        mechanism: 'CYP2D6 inhibition',
        recommendation: 'Monitor for increased side effects; consider dose reduction'
      }
    ],
    pharmacokinetics: [
      {
        property: 'Absorption',
        value: 'Well absorbed (70-94% bioavailability)',
        notes: 'Food does not affect absorption rate'
      },
      {
        property: 'Distribution',
        value: 'Volume of distribution 1-2 L/kg',
        notes: '90% protein bound in plasma'
      },
      {
        property: 'Metabolism',
        value: 'Hepatic via CYP2D6 and CYP3A4',
        notes: '9-hydroxyrisperidone is the active metabolite'
      },
      {
        property: 'Elimination',
        value: 'Renal (70%) and fecal (14%)',
        notes: 'Clearance reduced in elderly and renal impairment'
      }
    ],
    cyp450: {
      substrate: ['CYP2D6', 'CYP3A4'],
      inhibitor: ['Weak CYP2D6 inhibitor'],
      inducer: []
    },
    foodInteractions: [
      'No significant food interactions',
      'Grapefruit juice may increase drug levels (avoid)'
    ],
    monitoringParameters: [
      {
        parameter: 'Weight/BMI',
        baseline: true,
        frequency: 'At baseline, 4 weeks, 8 weeks, 12 weeks, then quarterly',
        threshold: '≥5% increase from baseline',
        rationale: 'Monitor for weight gain, a common side effect'
      },
      {
        parameter: 'Fasting glucose/HbA1c',
        baseline: true,
        frequency: 'At baseline, 12 weeks, then annually',
        threshold: 'Fasting glucose >126 mg/dL or HbA1c >6.5%',
        rationale: 'Monitor for new-onset diabetes'
      },
      {
        parameter: 'AIMS assessment',
        baseline: true,
        frequency: 'At baseline, then every 6 months',
        rationale: 'Monitor for tardive dyskinesia'
      }
    ],
    assessmentTools: [
      {
        name: 'AIMS (Abnormal Involuntary Movement Scale)',
        description: 'Standardized tool to assess tardive dyskinesia and other abnormal movements',
        link: 'https://example.com/aims'
      },
      {
        name: 'SAS (Simpson-Angus Scale)',
        description: 'Used to measure drug-induced parkinsonism',
        link: 'https://example.com/sas'
      }
    ],
    followUpRecommendations: [
      'Clinical assessment at 2 weeks after initiation to evaluate initial response',
      'Monthly visits until stable dose established',
      'After stabilization, visits every 3 months',
      'More frequent monitoring for patients with comorbidities'
    ],
    efficacyRatings: [
      {
        condition: 'Positive symptoms of schizophrenia',
        rating: 'high',
        description: 'Effective for hallucinations, delusions, and thought disorders'
      },
      {
        condition: 'Negative symptoms of schizophrenia',
        rating: 'moderate',
        description: 'Moderate improvement in social withdrawal, flat affect, and anhedonia'
      },
      {
        condition: 'Bipolar mania',
        rating: 'high',
        description: 'Effective for acute manic episodes'
      }
    ],
    keyStudies: [
      {
        condition: 'Schizophrenia',
        studyType: 'Randomized controlled trial',
        outcome: 'Significant improvement in PANSS scores',
        effectSize: 'Effect size 0.6 vs placebo',
        comparedTo: 'Placebo',
        reference: 'Marder et al., 1997'
      },
      {
        condition: 'Bipolar Disorder',
        studyType: 'Randomized controlled trial',
        outcome: 'Significant reduction in YMRS scores',
        effectSize: 'Effect size 0.7 vs placebo',
        comparedTo: 'Placebo',
        reference: 'Hirschfeld et al., 2004'
      }
    ],
    halfLife: '20-24 hours',
    activeMetabolite: '9-hydroxyrisperidone, 21-30 hours',
    availableForms: [
      'Tablets: 0.25, 0.5, 1, 2, 3, 4 mg',
      'Oral solution: 1 mg/mL',
      'Long-acting injection (Risperdal Consta): 12.5, 25, 37.5, 50 mg'
    ],
    costCategory: 'low',
    genericAvailable: true,
    genericSince: 2008,
    yearApproved: 1993,
    strengthsWeaknesses: {
      strengths: [
        'Effective for positive and negative symptoms',
        'Once-daily dosing for oral formulation',
        'Available in multiple formulations (oral, liquid, long-acting injectable)',
        'Generally well-tolerated at low to moderate doses',
        'Extensive evidence base with long-term data'
      ],
      weaknesses: [
        'Significant risk of EPS at higher doses',
        'Marked prolactin elevation compared to other atypicals',
        'Moderate weight gain and metabolic effects',
        'QT interval prolongation at higher doses',
        'Sedation can be problematic for some patients'
      ]
    },
    // Comparison data
    comparisonProperties: [
      { id: 'efficacy_positive', name: 'Efficacy for Positive Symptoms' },
      { id: 'efficacy_negative', name: 'Efficacy for Negative Symptoms' },
      { id: 'weight_gain', name: 'Weight Gain Risk' },
      { id: 'sedation', name: 'Sedation' },
      { id: 'eps', name: 'Extrapyramidal Symptoms' },
      { id: 'prolactin', name: 'Prolactin Elevation' },
      { id: 'qt_prolongation', name: 'QT Prolongation' },
      { id: 'metabolic', name: 'Metabolic Effects' },
      { id: 'anticholinergic', name: 'Anticholinergic Effects' },
      { id: 'cost', name: 'Cost' }
    ],
    comparisonMedications: [
      {
        id: 'risperidone',
        name: 'Risperidone',
        ratings: [
          { propertyId: 'efficacy_positive', value: 4, notes: 'Highly effective' },
          { propertyId: 'efficacy_negative', value: 3, notes: 'Moderately effective' },
          { propertyId: 'weight_gain', value: 3, notes: 'Moderate risk' },
          { propertyId: 'sedation', value: 2, notes: 'Low to moderate' },
          { propertyId: 'eps', value: 4, notes: 'Higher risk at doses >6mg' },
          { propertyId: 'prolactin', value: 5, notes: 'Significant elevation' },
          { propertyId: 'qt_prolongation', value: 2, notes: 'Minimal' },
          { propertyId: 'metabolic', value: 3, notes: 'Moderate risk' },
          { propertyId: 'anticholinergic', value: 1, notes: 'Low' },
          { propertyId: 'cost', value: 1, notes: 'Generic available' }
        ]
      },
      {
        id: 'olanzapine',
        name: 'Olanzapine',
        ratings: [
          { propertyId: 'efficacy_positive', value: 5, notes: 'Highly effective' },
          { propertyId: 'efficacy_negative', value: 4, notes: 'Good efficacy' },
          { propertyId: 'weight_gain', value: 5, notes: 'High risk' },
          { propertyId: 'sedation', value: 4, notes: 'Significant' },
          { propertyId: 'eps', value: 2, notes: 'Lower risk' },
          { propertyId: 'prolactin', value: 2, notes: 'Minimal elevation' },
          { propertyId: 'qt_prolongation', value: 1, notes: 'Minimal' },
          { propertyId: 'metabolic', value: 5, notes: 'High risk' },
          { propertyId: 'anticholinergic', value: 4, notes: 'Significant' },
          { propertyId: 'cost', value: 2, notes: 'Generic available' }
        ]
      },
      {
        id: 'quetiapine',
        name: 'Quetiapine',
        ratings: [
          { propertyId: 'efficacy_positive', value: 3, notes: 'Moderate efficacy' },
          { propertyId: 'efficacy_negative', value: 3, notes: 'Moderate efficacy' },
          { propertyId: 'weight_gain', value: 3, notes: 'Moderate risk' },
          { propertyId: 'sedation', value: 5, notes: 'High' },
          { propertyId: 'eps', value: 1, notes: 'Low risk' },
          { propertyId: 'prolactin', value: 1, notes: 'Minimal elevation' },
          { propertyId: 'qt_prolongation', value: 3, notes: 'Moderate risk' },
          { propertyId: 'metabolic', value: 3, notes: 'Moderate risk' },
          { propertyId: 'anticholinergic', value: 2, notes: 'Low to moderate' },
          { propertyId: 'cost', value: 1, notes: 'Generic available' }
        ]
      },
      {
        id: 'aripiprazole',
        name: 'Aripiprazole',
        ratings: [
          { propertyId: 'efficacy_positive', value: 3, notes: 'Moderate efficacy' },
          { propertyId: 'efficacy_negative', value: 3, notes: 'Moderate efficacy' },
          { propertyId: 'weight_gain', value: 1, notes: 'Low risk' },
          { propertyId: 'sedation', value: 2, notes: 'Low' },
          { propertyId: 'eps', value: 3, notes: 'Moderate risk (akathisia)' },
          { propertyId: 'prolactin', value: 1, notes: 'May decrease levels' },
          { propertyId: 'qt_prolongation', value: 1, notes: 'Minimal' },
          { propertyId: 'metabolic', value: 1, notes: 'Low risk' },
          { propertyId: 'anticholinergic', value: 1, notes: 'Very low' },
          { propertyId: 'cost', value: 3, notes: 'Higher cost' }
        ]
      },
      {
        id: 'ziprasidone',
        name: 'Ziprasidone',
        ratings: [
          { propertyId: 'efficacy_positive', value: 3, notes: 'Moderate efficacy' },
          { propertyId: 'efficacy_negative', value: 2, notes: 'Low to moderate' },
          { propertyId: 'weight_gain', value: 1, notes: 'Low risk' },
          { propertyId: 'sedation', value: 2, notes: 'Low to moderate' },
          { propertyId: 'eps', value: 3, notes: 'Moderate risk' },
          { propertyId: 'prolactin', value: 2, notes: 'Minimal elevation' },
          { propertyId: 'qt_prolongation', value: 4, notes: 'Higher risk' },
          { propertyId: 'metabolic', value: 1, notes: 'Low risk' },
          { propertyId: 'anticholinergic', value: 1, notes: 'Very low' },
          { propertyId: 'cost', value: 2, notes: 'Moderate' }
        ]
      }
    ]
  },
  {
    id: 'olanzapine',
    genericName: 'Olanzapine',
    brandNames: ['Zyprexa', 'Zyprexa Zydis', 'Zyprexa Relprevv'],
    brandName: 'Zyprexa',
    drugClass: 'Atypical Antipsychotic',
    mechanismOfAction: 'Antagonizes multiple receptors including dopamine D1-4, serotonin 5-HT2A/2C, histamine H1, muscarinic M1-5, and α1-adrenergic receptors.',
    indications: [
      'Schizophrenia',
      'Bipolar I Disorder (manic or mixed episodes)',
      'Treatment-resistant depression (with fluoxetine)',
    ],
    sideEffects: [
      {
        name: 'Weight gain',
        severity: 'severe',
        frequency: 'common',
        description: 'Significant weight gain of 5-10 kg or more over several months of treatment.'
      },
      {
        name: 'Metabolic syndrome',
        severity: 'severe',
        frequency: 'common',
        description: 'Hyperglycemia, insulin resistance, dyslipidemia, and increased risk of type 2 diabetes.'
      },
      {
        name: 'Sedation',
        severity: 'moderate',
        frequency: 'common',
        description: 'Significant drowsiness, especially during initial treatment.'
      },
      {
        name: 'Anticholinergic effects',
        severity: 'mild',
        frequency: 'common',
        description: 'Dry mouth, constipation, blurred vision, urinary retention.'
      }
    ],
    dosing: {
      initialDose: '5-10 mg/day',
      maintenanceDose: '10-20 mg/day',
      maxDose: '20 mg/day',
      frequencyPerDay: 1,
      notes: 'Take on an empty stomach for faster absorption.'
    },
    specialPopulations: [
      {
        title: 'Elderly',
        recommendation: 'Start with 5 mg/day.',
        warning: 'Increased mortality in elderly patients with dementia-related psychosis.'
      },
      {
        title: 'Pediatric',
        recommendation: 'Approved for schizophrenia and bipolar I disorder (13-17 years).',
      }
    ],
    halfLife: '30-60 hours',
    availableForms: [
      'Tablets: 2.5, 5, 7.5, 10, 15, 20 mg',
      'Orally disintegrating tablets (Zydis): 5, 10, 15, 20 mg',
      'Long-acting injection (Relprevv): 210, 300, 405 mg'
    ],
    costCategory: 'medium',
    genericAvailable: true,
    genericSince: 2011,
    yearApproved: 1996
  },
  {
    id: 'quetiapine',
    genericName: 'Quetiapine',
    brandNames: ['Seroquel', 'Seroquel XR'],
    brandName: 'Seroquel',
    drugClass: 'Atypical Antipsychotic',
    mechanismOfAction: 'Antagonizes multiple receptors including dopamine D1-2, serotonin 5-HT1A/2A, histamine H1, and α1-adrenergic receptors.',
    indications: [
      'Schizophrenia',
      'Bipolar Disorder (manic, depressive, and maintenance)',
      'Major Depressive Disorder (adjunct)',
      'Generalized Anxiety Disorder (off-label)',
    ],
    sideEffects: [
      {
        name: 'Sedation',
        severity: 'moderate',
        frequency: 'common',
        description: 'Significant drowsiness, especially during initial treatment.'
      },
      {
        name: 'Weight gain',
        severity: 'moderate',
        frequency: 'common',
        description: 'Average weight gain of 2-3 kg over several months of treatment.'
      },
      {
        name: 'Metabolic effects',
        severity: 'moderate',
        frequency: 'common',
        description: 'Hyperglycemia, increased risk of diabetes, and dyslipidemia.'
      },
      {
        name: 'Orthostatic hypotension',
        severity: 'moderate',
        frequency: 'common',
        description: 'Drop in blood pressure when standing up, causing dizziness or lightheadedness.'
      }
    ],
    dosing: {
      initialDose: '25-50 mg twice daily',
      maintenanceDose: '150-750 mg/day',
      maxDose: '800 mg/day',
      frequencyPerDay: 2,
      notes: 'XR formulation allows for once-daily dosing.'
    },
    halfLife: '6-7 hours',
    availableForms: [
      'Tablets: 25, 50, 100, 200, 300, 400 mg',
      'Extended-release tablets (XR): 50, 150, 200, 300, 400 mg'
    ],
    costCategory: 'low',
    genericAvailable: true,
    genericSince: 2012,
    yearApproved: 1997
  },
  {
    id: 'aripiprazole',
    genericName: 'Aripiprazole',
    brandNames: ['Abilify', 'Abilify Maintena', 'Aristada'],
    brandName: 'Abilify',
    drugClass: 'Atypical Antipsychotic (Partial Dopamine Agonist)',
    mechanismOfAction: 'Partial agonist at dopamine D2 and serotonin 5-HT1A receptors, and antagonist at 5-HT2A receptors. This unique "dopamine system stabilizer" profile differentiates it from other antipsychotics.',
    indications: [
      'Schizophrenia',
      'Bipolar I Disorder (manic or mixed episodes)',
      'Major Depressive Disorder (adjunct)',
      'Irritability associated with Autism',
      'Tourette\'s Disorder'
    ],
    sideEffects: [
      {
        name: 'Akathisia',
        severity: 'moderate',
        frequency: 'common',
        description: 'Uncomfortable feeling of inner restlessness and need to be in constant motion.'
      },
      {
        name: 'Nausea',
        severity: 'mild',
        frequency: 'common',
        description: 'Usually transient and improves with continued treatment.'
      },
      {
        name: 'Insomnia',
        severity: 'mild',
        frequency: 'common',
        description: 'Difficulty falling or staying asleep.'
      },
      {
        name: 'Weight gain',
        severity: 'mild',
        frequency: 'uncommon',
        description: 'Generally less weight gain than other atypical antipsychotics.'
      }
    ],
    dosing: {
      initialDose: '10-15 mg/day',
      maintenanceDose: '15-30 mg/day',
      maxDose: '30 mg/day',
      frequencyPerDay: 1,
      notes: 'Can be taken with or without food.'
    },
    halfLife: '75-146 hours',
    availableForms: [
      'Tablets: 2, 5, 10, 15, 20, 30 mg',
      'Orally disintegrating tablets: 10, 15 mg',
      'Oral solution: 1 mg/mL',
      'Long-acting injection (monthly): 300, 400 mg',
      'Long-acting injection (Aristada): 441, 662, 882, 1064 mg'
    ],
    costCategory: 'high',
    genericAvailable: true,
    genericSince: 2015,
    yearApproved: 2002
  },
  {
    id: 'ziprasidone',
    genericName: 'Ziprasidone',
    brandNames: ['Geodon'],
    brandName: 'Geodon',
    drugClass: 'Atypical Antipsychotic',
    mechanismOfAction: 'Antagonizes dopamine D2 and serotonin 5-HT2A receptors, with additional activity at 5-HT1A, 5-HT2C, and α1-adrenergic receptors.',
    indications: [
      'Schizophrenia',
      'Bipolar I Disorder (acute manic or mixed episodes)',
      'Acute agitation in schizophrenia (IM formulation)'
    ],
    sideEffects: [
      {
        name: 'QT prolongation',
        severity: 'severe',
        frequency: 'uncommon',
        description: 'Can increase risk of potentially fatal arrhythmias. Contraindicated in patients with known QT prolongation.'
      },
      {
        name: 'Extrapyramidal symptoms',
        severity: 'moderate',
        frequency: 'uncommon',
        description: 'Less common than with typical antipsychotics but can still occur.'
      },
      {
        name: 'Sedation',
        severity: 'moderate',
        frequency: 'common',
        description: 'Usually more pronounced during initial treatment.'
      },
      {
        name: 'Metabolic effects',
        severity: 'mild',
        frequency: 'uncommon',
        description: 'Relatively minimal weight gain and metabolic disturbances compared to other atypicals.'
      }
    ],
    dosing: {
      initialDose: '20 mg twice daily',
      maintenanceDose: '40-80 mg twice daily',
      maxDose: '100 mg twice daily',
      frequencyPerDay: 2,
      notes: 'Must be taken with a meal containing at least 500 calories to ensure adequate absorption.'
    },
    halfLife: '7 hours',
    availableForms: [
      'Capsules: 20, 40, 60, 80 mg',
      'Injection (IM): 20 mg/mL'
    ],
    costCategory: 'medium',
    genericAvailable: true,
    genericSince: 2014,
    yearApproved: 2001
  }
];

export const getMedicationById = (id: string) => {
  return medications.find(med => med.id === id);
};

export const getAllMedications = () => {
  return medications.map(med => ({
    id: med.id,
    genericName: med.genericName,
    brandName: med.brandName || med.brandNames[0]
  }));
};

export default medications;