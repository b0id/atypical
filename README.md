# Atypical Antipsychotics Reference App

A comprehensive application for comparing and analyzing atypical antipsychotic medications, designed for healthcare professionals, students, and educators in psychiatric medicine.

## Overview

This application provides an intuitive interface for exploring detailed information about atypical antipsychotic medications. It allows users to easily compare important clinical variables across different medications, helping to inform medication decisions and enhance understanding of this important drug class.

## Features

- **Comprehensive Medication Database**: Detailed profiles of common atypical antipsychotics including Risperidone, Olanzapine, Quetiapine, Aripiprazole, and others
- **Interactive UI**: Modern, responsive interface with easy navigation between medications
- **Detailed Variable Comparison**: 
  - Receptor binding profiles (D2, 5-HT2A, H1, muscarinic, alpha-adrenergic)
  - Metabolic effects (weight gain, diabetes risk, lipid changes)
  - Neurological side effects (EPS, tardive dyskinesia, sedation)
  - Hormonal impacts (prolactin elevation, sexual dysfunction)
  - Cardiovascular considerations (QTc prolongation, orthostatic hypotension)
  - Pharmacokinetic properties (half-life, metabolism pathways)
  - Efficacy metrics for different symptom domains
- **Clinical Context**: FDA-approved indications, off-label uses, black box warnings, and evidence levels
- **Practical Information**: Available formulations, dosing guidelines, cost comparisons, and monitoring requirements

## Technology Stack

- React for the UI components
- TypeScript for type safety
- Vite for development and building
- Tailwind CSS for styling
- Lucide React for iconography

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/atypical-antipsychotics-app.git
   cd atypical-antipsychotics-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
atypical-antipsychotics-app/
├─ src/
│  ├─ components/
│  │  ├─ Sidebar.tsx            # Medication selection sidebar
│  │  ├─ MedicationDetails.tsx  # Detailed medication view
│  ├─ data/
│  │  ├─ medications.ts         # Medication data
│  ├─ services/
│  │  ├─ medicationService.ts   # Data access layer
│  ├─ types/
│  │  ├─ index.ts               # TypeScript interfaces
│  ├─ App.css
│  ├─ App.tsx                   # Main application component
│  ├─ index.css
│  ├─ main.tsx
├─ package.json
├─ tailwind.config.js
├─ tsconfig.json
├─ vite.config.ts
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Educational Use

This application was developed to support education in psychiatric pharmacology, particularly for nursing and pharmacy students. The interface is designed to facilitate learning about key medication properties and comparison points that inform clinical decisions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data compiled from clinical pharmacology resources and medication monographs
- Developed as part of an educational initiative to improve understanding of psychiatric medications
- Special thanks to contributors from nursing, pharmacy, and psychiatry backgrounds who provided expert review of medication data

## Contact

For questions or feedback, please open an issue on this repository or contact the maintainers directly.
