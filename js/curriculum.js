/* ============================================================
   CURRICULUM STRUCTURE — ISC1
   Modify this array to adapt to a different study program.
   ============================================================ */
const CURRICULUM = [
  {
    module: "Gestion IT",
    branches: [
      { name: "Economie et droit IT", coef: 2, sem: "A" },
      { name: "Méthodologie et sécurité IT", coef: 3, sem: "A" },
    ]
  },
  {
    module: "Informatique de base",
    branches: [
      { name: "Programmation", coef: 6.5, sem: "A" },
      { name: "Algorythmique et structure de données", coef: 6.5, sem: "P" },
      { name: "Interface Homme-Machine", coef: 3, sem: "P" },
    ]
  },
  {
    module: "Expression",
    branches: [
      { name: "Communication 1", coef: 1.5, sem: "A" },
      { name: "Communication 2", coef: 1.5, sem: "P" },
      { name: "Allemand 1", coef: 1.5, sem: "A" },
      { name: "Allemand 2", coef: 1.5, sem: "P" },
      { name: "Anglais 1", coef: 1.5, sem: "A" },
      { name: "Anglais 2", coef: 1.5, sem: "P" },
    ]
  },
  {
    module: "Mathématiques",
    branches: [
      { name: "Algèbre linéaire 1", coef: 3.5, sem: "A" },
      { name: "Algèbre linéaire 2", coef: 3.5, sem: "P" },
      { name: "Analyse 1", coef: 3.5, sem: "A" },
      { name: "Analyse 2", coef: 3.5, sem: "P" },
    ]
  },
  {
    module: "Technique numérique",
    branches: [
      { name: "Technique numérique 1", coef: 4, sem: "A" },
      { name: "Technique numérique 2", coef: 5, sem: "P" },
    ]
  },
  {
    module: "Téléinformatique",
    branches: [
      { name: "Téléinformatique 1", coef: 3, sem: "A" },
      { name: "Téléinformatique 2", coef: 4, sem: "P" },
    ]
  },
];

/* ============================================================
   EXCEL BRANCH MAP
   Maps Excel rows to branch names for .xlsx import.
   Each branch occupies 2 rows: notes row then coefs row.
   Grades in columns O..AG, exam in col L, bonus in col M.
   ============================================================ */
const EXCEL_BRANCH_MAP = [
  { name: "Economie et droit IT",                 noteRow: 2,  coefRow: 3  },
  { name: "Méthodologie et sécurité IT",           noteRow: 4,  coefRow: 5  },
  { name: "Programmation",                         noteRow: 6,  coefRow: 7  },
  { name: "Algorythmique et structure de données", noteRow: 8,  coefRow: 9  },
  { name: "Interface Homme-Machine",               noteRow: 10, coefRow: 11 },
  { name: "Communication 1",                       noteRow: 12, coefRow: 13 },
  { name: "Communication 2",                       noteRow: 14, coefRow: 15 },
  { name: "Allemand 1",                            noteRow: 16, coefRow: 17 },
  { name: "Allemand 2",                            noteRow: 18, coefRow: 19 },
  { name: "Anglais 1",                             noteRow: 20, coefRow: 21 },
  { name: "Anglais 2",                             noteRow: 22, coefRow: 23 },
  { name: "Algèbre linéaire 1",                    noteRow: 24, coefRow: 25 },
  { name: "Algèbre linéaire 2",                    noteRow: 26, coefRow: 27 },
  { name: "Analyse 1",                             noteRow: 28, coefRow: 29 },
  { name: "Analyse 2",                             noteRow: 30, coefRow: 31 },
  { name: "Technique numérique 1",                 noteRow: 32, coefRow: 33 },
  { name: "Technique numérique 2",                 noteRow: 34, coefRow: 35 },
  { name: "Téléinformatique 1",                    noteRow: 36, coefRow: 37 },
  { name: "Téléinformatique 2",                    noteRow: 38, coefRow: 39 },
];
