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
        recommendation: 'Approved for irritability associated with autism (5-16 years) and schizophrenia/bipolar (13-17 years).'
      },
      {
        title: 'Renal Impairment',
        recommendation: 'Start with 0.5 mg twice daily and titrate slowly; maximum dose 1.5 mg twice daily.'
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
      'Treatment-resistant depression (with fluoxetine)'
    ],
    sideEffects: [
      {
        name: 'Weight gain',
        severity: 'severe',
        frequency: 'common',
        description: 'Significant weight gain of 5-10 kg or more over several months.'
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
        description: 'Marked drowsiness, especially during initial treatment.'
      },
      {
        name: 'Anticholinergic effects',
        severity: 'mild',
        frequency: 'common',
        description: 'Dry mouth, blurred vision, constipation, and urinary retention.'
      }
    ],
    blackBoxWarnings: [
      {
        title: 'Increased mortality in elderly patients with dementia-related psychosis',
        description: 'Similar to other antipsychotics, olanzapine carries an increased risk of death in elderly dementia patients.'
      }
    ],
    dosing: {
      initialDose: '5-10 mg/day',
      maintenanceDose: '10-20 mg/day',
      maxDose: '20 mg/day',
      frequencyPerDay: 1,
      notes: 'Taking on an empty stomach may increase absorption rate.'
    },
    specialPopulations: [
      {
        title: 'Elderly',
        recommendation: 'Start with lower doses (around 5 mg/day) due to sensitivity.',
        warning: 'Increased risk of sedation and falls.'
      },
      {
        title: 'Pediatric',
        recommendation: 'Limited approval; use with caution in adolescents.'
      }
    ],
    administrationGuidelines: [
      'Can be taken with or without food',
      'Do not crush or chew tablets',
      'For orally disintegrating tablets, allow tablet to dissolve on the tongue'
    ],
    drugInteractions: [
      {
        drug: 'Carbamazepine',
        effect: 'May decrease olanzapine levels',
        severity: 'moderate',
        mechanism: 'Enzyme induction (CYP1A2)',
        recommendation: 'Monitor clinical response and adjust dose if necessary'
      },
      {
        drug: 'Fluvoxamine',
        effect: 'May increase olanzapine levels',
        severity: 'moderate',
        mechanism: 'CYP1A2 inhibition',
        recommendation: 'Watch for increased sedation and metabolic effects'
      }
    ],
    pharmacokinetics: [
      {
        property: 'Absorption',
        value: 'Rapidly absorbed with high bioavailability',
        notes: 'Peak plasma levels reached in 5-8 hours'
      },
      {
        property: 'Distribution',
        value: 'Widely distributed; high lipid solubility',
        notes: 'Highly protein-bound'
      },
      {
        property: 'Metabolism',
        value: 'Extensively metabolized in the liver, mainly via CYP1A2',
        notes: 'Active metabolites are not considered clinically significant'
      },
      {
        property: 'Elimination',
        value: 'Primarily hepatic',
        notes: 'Excretion is mainly via urine (metabolites)'
      }
    ],
    cyp450: {
      substrate: ['CYP1A2'],
      inhibitor: [],
      inducer: []
    },
    foodInteractions: [
      'No significant interactions noted',
      'Avoid grapefruit juice due to potential CYP1A2 interactions'
    ],
    monitoringParameters: [
      {
        parameter: 'Weight/BMI',
        baseline: true,
        frequency: 'At baseline, 4 weeks, 8 weeks, then quarterly',
        threshold: '≥7% increase from baseline',
        rationale: 'Monitor for significant weight gain'
      },
      {
        parameter: 'Fasting glucose and lipid panel',
        baseline: true,
        frequency: 'At baseline, 12 weeks, then annually',
        rationale: 'Monitor for metabolic syndrome'
      }
    ],
    assessmentTools: [
      {
        name: 'Metabolic monitoring checklist',
        description: 'Tool to monitor weight, glucose, and lipids over time',
        link: 'https://example.com/metabolic'
      }
    ],
    followUpRecommendations: [
      'Assess weight and metabolic parameters monthly for the first 3 months',
      'Regular follow-ups every 3 months after stabilization'
    ],
    efficacyRatings: [
      {
        condition: 'Positive symptoms of schizophrenia',
        rating: 'high',
        description: 'Robust improvement in hallucinations and delusions'
      },
      {
        condition: 'Negative symptoms of schizophrenia',
        rating: 'moderate',
        description: 'Moderate improvement in social withdrawal'
      },
      {
        condition: 'Bipolar mania',
        rating: 'high',
        description: 'Effective for managing acute manic episodes'
      }
    ],
    keyStudies: [
      {
        condition: 'Schizophrenia',
        studyType: 'Controlled clinical trial',
        outcome: 'Significant symptom reduction compared to placebo',
        effectSize: 'Effect size 0.65',
        comparedTo: 'Placebo',
        reference: 'Study X et al., 2000'
      }
    ],
    halfLife: '30-60 hours',
    activeMetabolite: 'None significant',
    availableForms: [
      'Tablets: 2.5, 5, 7.5, 10, 15, 20 mg',
      'Orally disintegrating tablets: 5, 10, 15, 20 mg',
      'Long-acting injection (Relprevv): 210, 300, 405 mg'
    ],
    costCategory: 'medium',
    genericAvailable: true,
    genericSince: 2011,
    yearApproved: 1996,
    strengthsWeaknesses: {
      strengths: [
        'Highly effective in acute mania and psychosis',
        'Multiple formulations available for patient preference',
        'Strong evidence base in clinical trials'
      ],
      weaknesses: [
        'High risk of weight gain and metabolic syndrome',
        'Sedation may impair daily functioning',
        'Requires monitoring of metabolic parameters'
      ]
    },
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
      // Comparison ratings similar to risperidone, updated appropriately
      {
        id: 'risperidone',
        name: 'Risperidone',
        ratings: [
          { propertyId: 'efficacy_positive', value: 4, notes: 'Highly effective' },
          { propertyId: 'efficacy_negative', value: 3, notes: 'Moderate effect' },
          { propertyId: 'weight_gain', value: 3, notes: 'Moderate risk' },
          { propertyId: 'sedation', value: 2, notes: 'Low to moderate' },
          { propertyId: 'eps', value: 4, notes: 'Dose-dependent risk' },
          { propertyId: 'prolactin', value: 5, notes: 'Significant elevation' },
          { propertyId: 'qt_prolongation', value: 2, notes: 'Minimal' },
          { propertyId: 'metabolic', value: 3, notes: 'Moderate risk' },
          { propertyId: 'anticholinergic', value: 1, notes: 'Low' },
          { propertyId: 'cost', value: 1, notes: 'Generic available' }
        ]
      },
      // Additional comparisons can mirror data from other agents
      {
        id: 'quetiapine',
        name: 'Quetiapine',
        ratings: [
          { propertyId: 'efficacy_positive', value: 3, notes: 'Moderate efficacy' },
          { propertyId: 'efficacy_negative', value: 3, notes: 'Moderate efficacy' },
          { propertyId: 'weight_gain', value: 3, notes: 'Moderate risk' },
          { propertyId: 'sedation', value: 5, notes: 'High sedation' },
          { propertyId: 'eps', value: 1, notes: 'Low risk' },
          { propertyId: 'prolactin', value: 1, notes: 'Minimal' },
          { propertyId: 'qt_prolongation', value: 3, notes: 'Moderate risk' },
          { propertyId: 'metabolic', value: 3, notes: 'Moderate risk' },
          { propertyId: 'anticholinergic', value: 2, notes: 'Low to moderate' },
          { propertyId: 'cost', value: 1, notes: 'Generic available' }
        ]
      }
    ]
  },
  {
    id: 'quetiapine',
    genericName: 'Quetiapine',
    brandNames: ['Seroquel', 'Seroquel XR'],
    brandName: 'Seroquel',
    drugClass: 'Atypical Antipsychotic',
    mechanismOfAction: 'Antagonizes dopamine D1-2, serotonin 5-HT1A/2A, histamine H1, and α1-adrenergic receptors.',
    indications: [
      'Schizophrenia',
      'Bipolar Disorder (manic, depressive, and maintenance phases)',
      'Major Depressive Disorder (adjunct therapy)',
      'Generalized Anxiety Disorder (off-label use)'
    ],
    sideEffects: [
      {
        name: 'Sedation',
        severity: 'moderate',
        frequency: 'common',
        description: 'Often causes drowsiness, especially with the immediate-release formulation.'
      },
      {
        name: 'Weight gain',
        severity: 'moderate',
        frequency: 'common',
        description: 'Average gain of 2-3 kg over several months.'
      },
      {
        name: 'Metabolic effects',
        severity: 'moderate',
        frequency: 'common',
        description: 'May cause hyperglycemia, dyslipidemia, and increased risk of diabetes.'
      },
      {
        name: 'Orthostatic hypotension',
        severity: 'moderate',
        frequency: 'common',
        description: 'Can cause dizziness when standing due to a drop in blood pressure.'
      }
    ],
    blackBoxWarnings: [
      {
        title: 'Increased mortality in elderly patients with dementia-related psychosis',
        description: 'Elderly patients with dementia are at an increased risk of death when treated with antipsychotics.'
      }
    ],
    dosing: {
      initialDose: '25-50 mg twice daily',
      maintenanceDose: '150-750 mg/day',
      maxDose: '800 mg/day',
      frequencyPerDay: 2,
      notes: 'Extended-release (XR) formulation may allow for once-daily dosing.'
    },
    specialPopulations: [
      {
        title: 'Elderly',
        recommendation: 'Start at the lower end of the dosing range due to increased sensitivity.',
        warning: 'Monitor for excessive sedation and orthostatic hypotension.'
      },
      {
        title: 'Pediatric',
        recommendation: 'Limited approval; use cautiously in adolescents.'
      }
    ],
    administrationGuidelines: [
      'Can be taken with or without food',
      'Swallow tablets whole; do not crush unless using the XR formulation as directed'
    ],
    drugInteractions: [
      {
        drug: 'CYP3A4 inhibitors (e.g., ketoconazole)',
        effect: 'May increase quetiapine levels',
        severity: 'moderate',
        mechanism: 'Inhibition of metabolism',
        recommendation: 'Consider dose reduction'
      },
      {
        drug: 'CYP3A4 inducers (e.g., phenytoin)',
        effect: 'May decrease quetiapine levels',
        severity: 'moderate',
        mechanism: 'Increased metabolic clearance',
        recommendation: 'Monitor for reduced efficacy'
      }
    ],
    pharmacokinetics: [
      {
        property: 'Absorption',
        value: 'Well absorbed with peak levels in 1-2 hours',
        notes: ''
      },
      {
        property: 'Distribution',
        value: 'Large volume of distribution with high plasma protein binding',
        notes: ''
      },
      {
        property: 'Metabolism',
        value: 'Primarily metabolized by CYP3A4 in the liver',
        notes: ''
      },
      {
        property: 'Elimination',
        value: 'Eliminated mainly via hepatic metabolism',
        notes: ''
      }
    ],
    cyp450: {
      substrate: ['CYP3A4'],
      inhibitor: [],
      inducer: []
    },
    foodInteractions: [
      'No significant interactions',
      'Consistent absorption with or without food'
    ],
    monitoringParameters: [
      {
        parameter: 'Weight/BMI',
        baseline: true,
        frequency: 'At baseline, then monthly for 3 months, and quarterly',
        threshold: '≥5% increase from baseline',
        rationale: 'Monitor for metabolic side effects'
      },
      {
        parameter: 'Fasting glucose and lipid panel',
        baseline: true,
        frequency: 'At baseline and every 3-6 months',
        rationale: 'Monitor for dyslipidemia and diabetes'
      }
    ],
    assessmentTools: [
      {
        name: 'Metabolic panel checklist',
        description: 'Tool to track metabolic changes over time',
        link: 'https://example.com/metabolic-check'
      }
    ],
    followUpRecommendations: [
      'Initial follow-up within 2 weeks of starting treatment',
      'Monthly monitoring during dose titration, then quarterly'
    ],
    efficacyRatings: [
      {
        condition: 'Positive symptoms of schizophrenia',
        rating: 'moderate',
        description: 'Provides moderate improvement in psychotic symptoms'
      },
      {
        condition: 'Negative symptoms of schizophrenia',
        rating: 'moderate',
        description: 'May offer modest benefits'
      },
      {
        condition: 'Bipolar disorder',
        rating: 'moderate',
        description: 'Helps stabilize mood, particularly in depressive phases'
      }
    ],
    keyStudies: [
      {
        condition: 'Schizophrenia',
        studyType: 'Controlled trial',
        outcome: 'Demonstrated moderate efficacy in symptom reduction',
        effectSize: 'Effect size ~0.5',
        comparedTo: 'Placebo',
        reference: 'Study Y et al., 2002'
      }
    ],
    halfLife: '6-7 hours',
    activeMetabolite: 'Not clinically significant',
    availableForms: [
      'Tablets: 25, 50, 100, 200, 300, 400 mg',
      'Extended-release tablets (XR): 50, 150, 200, 300, 400 mg'
    ],
    costCategory: 'low',
    genericAvailable: true,
    genericSince: 2012,
    yearApproved: 1997,
    strengthsWeaknesses: {
      strengths: [
        'Rapid onset of action',
        'Multiple formulations for dosing flexibility',
        'Generally well-tolerated with a favorable side effect profile regarding EPS'
      ],
      weaknesses: [
        'High sedation, particularly with the immediate-release formulation',
        'Risk for orthostatic hypotension',
        'Metabolic monitoring required due to potential weight gain'
      ]
    },
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
          { propertyId: 'efficacy_negative', value: 3, notes: 'Moderate effect' },
          { propertyId: 'weight_gain', value: 3, notes: 'Moderate risk' },
          { propertyId: 'sedation', value: 2, notes: 'Low to moderate' },
          { propertyId: 'eps', value: 4, notes: 'Dose-dependent risk' },
          { propertyId: 'prolactin', value: 5, notes: 'Significant elevation' },
          { propertyId: 'qt_prolongation', value: 2, notes: 'Minimal' },
          { propertyId: 'metabolic', value: 3, notes: 'Moderate risk' },
          { propertyId: 'anticholinergic', value: 1, notes: 'Low' },
          { propertyId: 'cost', value: 1, notes: 'Generic available' }
        ]
      }
    ]
  },
  {
    id: 'aripiprazole',
    genericName: 'Aripiprazole',
    brandNames: ['Abilify', 'Abilify Maintena', 'Aristada'],
    brandName: 'Abilify',
    drugClass: 'Atypical Antipsychotic (Partial Dopamine Agonist)',
    mechanismOfAction: 'Partial agonist at dopamine D2 and serotonin 5-HT1A receptors and antagonist at 5-HT2A receptors, offering a “dopamine stabilizing” effect.',
    indications: [
      'Schizophrenia',
      'Bipolar I Disorder (manic or mixed episodes)',
      'Major Depressive Disorder (adjunct therapy)',
      'Irritability associated with Autism',
      'Tourette’s Disorder'
    ],
    sideEffects: [
      {
        name: 'Akathisia',
        severity: 'moderate',
        frequency: 'common',
        description: 'A feeling of inner restlessness with an urge to move.'
      },
      {
        name: 'Nausea',
        severity: 'mild',
        frequency: 'common',
        description: 'Transient nausea that often improves with continued use.'
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
        description: 'Generally less than other antipsychotics, but still possible.'
      }
    ],
    blackBoxWarnings: [
      {
        title: 'Risk of impulse control problems',
        description: 'Some patients may develop impulse control issues (e.g., compulsive gambling, hypersexuality) during treatment.'
      }
    ],
    dosing: {
      initialDose: '10-15 mg/day',
      maintenanceDose: '15-30 mg/day',
      maxDose: '30 mg/day',
      frequencyPerDay: 1,
      notes: 'May be taken with or without food; dosage adjustments may be required when used with CYP inhibitors.'
    },
    specialPopulations: [
      {
        title: 'Elderly',
        recommendation: 'Start at lower doses (e.g., 5-10 mg/day) due to altered pharmacodynamics.',
        warning: 'Monitor for sedation and hypotension.'
      },
      {
        title: 'Pediatric',
        recommendation: 'Approved for use in adolescents for certain indications; use with caution.'
      }
    ],
    administrationGuidelines: [
      'Can be taken with or without food',
      'Swallow tablets whole; do not crush'
    ],
    drugInteractions: [
      {
        drug: 'Ketoconazole',
        effect: 'Increased aripiprazole levels',
        severity: 'moderate',
        mechanism: 'CYP3A4 inhibition',
        recommendation: 'Monitor for side effects and consider dose reduction'
      },
      {
        drug: 'Ritonavir',
        effect: 'Decreased aripiprazole levels',
        severity: 'moderate',
        mechanism: 'CYP2D6 induction',
        recommendation: 'Monitor for reduced efficacy'
      }
    ],
    pharmacokinetics: [
      {
        property: 'Absorption',
        value: 'Well absorbed',
        notes: 'Peak plasma levels occur within 3-5 hours'
      },
      {
        property: 'Distribution',
        value: 'Widely distributed with high plasma protein binding',
        notes: ''
      },
      {
        property: 'Metabolism',
        value: 'Primarily metabolized by CYP2D6 and CYP3A4',
        notes: 'Produces an active metabolite, dehydro-aripiprazole'
      },
      {
        property: 'Elimination',
        value: 'Long half-life; excreted mainly in feces and urine',
        notes: ''
      }
    ],
    cyp450: {
      substrate: ['CYP2D6', 'CYP3A4'],
      inhibitor: ['Weak CYP2D6 inhibitor'],
      inducer: []
    },
    foodInteractions: [
      'No significant food interactions',
      'Can be taken with or without food'
    ],
    monitoringParameters: [
      {
        parameter: 'Weight/BMI',
        baseline: true,
        frequency: 'At baseline, 4 weeks, then quarterly',
        threshold: '≥5% increase from baseline',
        rationale: 'Monitor for metabolic changes'
      },
      {
        parameter: 'Fasting glucose/HbA1c',
        baseline: true,
        frequency: 'At baseline and every 6 months',
        rationale: 'Monitor for metabolic syndrome'
      }
    ],
    assessmentTools: [
      {
        name: 'AIMS (Abnormal Involuntary Movement Scale)',
        description: 'Assesses movement disorders potentially related to therapy',
        link: 'https://example.com/aims'
      }
    ],
    followUpRecommendations: [
      'Follow up within 2 weeks of initiation to assess tolerability',
      'Regular visits every 3 months after stabilization'
    ],
    efficacyRatings: [
      {
        condition: 'Positive symptoms of schizophrenia',
        rating: 'moderate',
        description: 'Provides moderate improvement in psychotic symptoms'
      },
      {
        condition: 'Negative symptoms of schizophrenia',
        rating: 'moderate',
        description: 'Similar moderate improvement as for positive symptoms'
      },
      {
        condition: 'Bipolar mania',
        rating: 'moderate',
        description: 'Effective in managing acute manic episodes'
      }
    ],
    keyStudies: [
      {
        condition: 'Schizophrenia',
        studyType: 'Randomized controlled trial',
        outcome: 'Showed significant symptom reduction compared to placebo',
        effectSize: 'Effect size ~0.55',
        comparedTo: 'Placebo',
        reference: 'Study Z et al., 2003'
      }
    ],
    halfLife: '75-146 hours',
    activeMetabolite: 'Dehydro-aripiprazole (active)',
    availableForms: [
      'Tablets: 2, 5, 10, 15, 20, 30 mg',
      'Orally disintegrating tablets: 10, 15 mg',
      'Oral solution: 1 mg/mL',
      'Long-acting injection: 300, 400 mg'
    ],
    costCategory: 'high',
    genericAvailable: true,
    genericSince: 2015,
    yearApproved: 2002,
    strengthsWeaknesses: {
      strengths: [
        'Unique mechanism as a dopamine system stabilizer',
        'Lower risk of weight gain compared to other antipsychotics',
        'Once-daily dosing with long half-life'
      ],
      weaknesses: [
        'Risk of akathisia and insomnia',
        'Potential for drug interactions due to CYP metabolism',
        'High cost relative to some alternatives'
      ]
    },
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
          { propertyId: 'eps', value: 4, notes: 'Dose-dependent risk' },
          { propertyId: 'prolactin', value: 5, notes: 'Significant elevation' },
          { propertyId: 'qt_prolongation', value: 2, notes: 'Minimal' },
          { propertyId: 'metabolic', value: 3, notes: 'Moderate risk' },
          { propertyId: 'anticholinergic', value: 1, notes: 'Low' },
          { propertyId: 'cost', value: 1, notes: 'Generic available' }
        ]
      }
    ]
  },
  {
    id: 'ziprasidone',
    genericName: 'Ziprasidone',
    brandNames: ['Geodon'],
    brandName: 'Geodon',
    drugClass: 'Atypical Antipsychotic',
    mechanismOfAction: 'Blocks dopamine D2 and serotonin 5-HT2A receptors, with additional activity at 5-HT1A, 5-HT2C, and α1-adrenergic receptors.',
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
        description: 'May increase the risk of arrhythmias; contraindicated in patients with known QT prolongation.'
      },
      {
        name: 'Extrapyramidal symptoms',
        severity: 'moderate',
        frequency: 'uncommon',
        description: 'Less common than typical antipsychotics but may occur.'
      },
      {
        name: 'Sedation',
        severity: 'moderate',
        frequency: 'common',
        description: 'Often seen during the initial phase of treatment.'
      },
      {
        name: 'Metabolic effects',
        severity: 'mild',
        frequency: 'uncommon',
        description: 'Generally associated with minimal weight gain and metabolic disturbance.'
      }
    ],
    blackBoxWarnings: [
      {
        title: 'Risk of Serious Cardiac Arrhythmias',
        description: 'Due to QT prolongation, ziprasidone must be used with caution in patients with cardiac conditions.'
      }
    ],
    dosing: {
      initialDose: '20 mg twice daily',
      maintenanceDose: '40-80 mg twice daily',
      maxDose: '100 mg twice daily',
      frequencyPerDay: 2,
      notes: 'Must be taken with a meal containing at least 500 calories to ensure adequate absorption.'
    },
    specialPopulations: [
      {
        title: 'Elderly',
        recommendation: 'Use lower doses due to increased risk of cardiac side effects.',
        warning: 'Monitor ECG before and during treatment.'
      },
      {
        title: 'Pediatric',
        recommendation: 'Limited data; use only when benefits outweigh risks.'
      }
    ],
    administrationGuidelines: [
      'Administer with a meal to improve absorption',
      'Do not crush or chew capsules'
    ],
    drugInteractions: [
      {
        drug: 'Drugs that prolong the QT interval',
        effect: 'Additive risk of arrhythmias',
        severity: 'severe',
        mechanism: 'QT prolongation',
        recommendation: 'Avoid co-administration when possible'
      }
    ],
    pharmacokinetics: [
      {
        property: 'Absorption',
        value: 'Variable absorption; improved with food',
        notes: 'Requires at least 500 calories per meal'
      },
      {
        property: 'Distribution',
        value: 'Moderate volume of distribution',
        notes: 'Approximately 90% protein bound'
      },
      {
        property: 'Metabolism',
        value: 'Limited hepatic metabolism',
        notes: 'Minimal CYP450 involvement'
      },
      {
        property: 'Elimination',
        value: 'Primarily renal and fecal excretion',
        notes: ''
      }
    ],
    cyp450: {
      substrate: [],
      inhibitor: [],
      inducer: []
    },
    foodInteractions: [
      'Must be taken with food containing at least 500 calories to enhance absorption'
    ],
    monitoringParameters: [
      {
        parameter: 'ECG',
        baseline: true,
        frequency: 'At baseline and periodically during treatment',
        rationale: 'Monitor for QT prolongation and arrhythmia risk'
      },
      {
        parameter: 'Weight/BMI',
        baseline: true,
        frequency: 'At baseline, then every 3 months',
        rationale: 'Although risk is low, monitor metabolic status'
      }
    ],
    assessmentTools: [
      {
        name: 'ECG monitoring',
        description: 'Routine ECG assessments to monitor QT interval',
        link: 'https://example.com/ecg'
      }
    ],
    followUpRecommendations: [
      'Follow up after 1-2 weeks to assess ECG changes',
      'Regular follow-up visits every 3 months'
    ],
    efficacyRatings: [
      {
        condition: 'Positive symptoms of schizophrenia',
        rating: 'moderate',
        description: 'Provides moderate symptom control'
      },
      {
        condition: 'Bipolar mania',
        rating: 'moderate',
        description: 'Effective for acute manic episodes'
      }
    ],
    keyStudies: [
      {
        condition: 'Schizophrenia',
        studyType: 'Randomized controlled trial',
        outcome: 'Showed moderate efficacy with a notable risk for QT prolongation',
        effectSize: 'Effect size ~0.5',
        comparedTo: 'Placebo',
        reference: 'Study W et al., 2001'
      }
    ],
    halfLife: '7 hours',
    activeMetabolite: 'None significant',
    availableForms: [
      'Capsules: 20, 40, 60, 80 mg',
      'Injection (IM): 20 mg/mL'
    ],
    costCategory: 'medium',
    genericAvailable: true,
    genericSince: 2014,
    yearApproved: 2001,
    strengthsWeaknesses: {
      strengths: [
        'Lower risk of weight gain and metabolic effects compared to other atypicals',
        'Effective in acute management of agitation',
        'Multiple formulations available'
      ],
      weaknesses: [
        'Significant risk of QT prolongation',
        'Requires food for adequate absorption',
        'ECG monitoring is necessary'
      ]
    },
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
          { propertyId: 'efficacy_negative', value: 3, notes: 'Moderate effect' },
          { propertyId: 'weight_gain', value: 3, notes: 'Moderate risk' },
          { propertyId: 'sedation', value: 2, notes: 'Low to moderate' },
          { propertyId: 'eps', value: 4, notes: 'Dose-dependent risk' },
          { propertyId: 'prolactin', value: 5, notes: 'Significant elevation' },
          { propertyId: 'qt_prolongation', value: 2, notes: 'Minimal' },
          { propertyId: 'metabolic', value: 3, notes: 'Moderate risk' },
          { propertyId: 'anticholinergic', value: 1, notes: 'Low' },
          { propertyId: 'cost', value: 2, notes: 'Moderate' }
        ]
      }
    ]
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