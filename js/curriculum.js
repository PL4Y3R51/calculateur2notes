/* ============================================================
   CURRICULUM DEFINITIONS — All study programs
   ============================================================ */
const CURRICULA = {
  "ISC1": {
    label: "ISC 1ère année",
    modules: [
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
    ],
    excelMap: [
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
    ],
  },

  "ISC2-ID": {
    label: "ISC 2 — Ingénierie des Données",
    modules: [
      {
        module: "Conception logicielle",
        branches: [
          { name: "Bases de données 1", coef: 3.5, sem: "P" },
          { name: "Génie logiciel 1", coef: 3.5, sem: "P" },
        ]
      },
      {
        module: "Projet 1",
        branches: [
          { name: "Projet de semestre 4", coef: 3, sem: "P" },
        ]
      },
      {
        module: "Analyse des données",
        branches: [
          { name: "Machine learning", coef: 5, sem: "P" },
          { name: "Mathématiques pour l'analyse des données", coef: 2, sem: "P" },
        ]
      },
      {
        module: "Application des données",
        branches: [
          { name: "Développement back-end", coef: 3, sem: "A" },
          { name: "Développement front-end", coef: 3, sem: "A" },
        ]
      },
      {
        module: "Mathématique IT",
        branches: [
          { name: "Mathématiques spécifiques 1", coef: 3, sem: "A" },
          { name: "Physique", coef: 3, sem: "A" },
          { name: "Statistiques", coef: 2, sem: "A" },
        ]
      },
      {
        module: "Acquisition et traitement de données",
        branches: [
          { name: "Internet des objets", coef: 4, sem: "P" },
          { name: "Traitement des données", coef: 2, sem: "P" },
        ]
      },
      {
        module: "Programmation système",
        branches: [
          { name: "Architecture des ordinateurs", coef: 4, sem: "A" },
          { name: "Gestion de projets TIC", coef: 2, sem: "A" },
          { name: "Systèmes concurrents", coef: 4, sem: "A" },
        ]
      },
      {
        module: "Infrastructure pour ingénierie des données",
        branches: [
          { name: "Infrastructure cloud", coef: 4, sem: "A" },
          { name: "Infrastructure distribuée", coef: 2, sem: "A" },
        ]
      },
      {
        module: "Simulation IT",
        branches: [
          { name: "Mathématiques spécifiques 2", coef: 4, sem: "P" },
          { name: "Physique et simulation", coef: 3, sem: "P" },
        ]
      },
    ],
    excelMap: [
      { name: "Bases de données 1",                          noteRow: 2,  coefRow: 3  },
      { name: "Génie logiciel 1",                            noteRow: 4,  coefRow: 5  },
      { name: "Projet de semestre 4",                        noteRow: 6,  coefRow: 7  },
      { name: "Machine learning",                            noteRow: 8,  coefRow: 9  },
      { name: "Mathématiques pour l'analyse des données",    noteRow: 10, coefRow: 11 },
      { name: "Développement back-end",                      noteRow: 12, coefRow: 13 },
      { name: "Développement front-end",                     noteRow: 14, coefRow: 15 },
      { name: "Mathématiques spécifiques 1",                 noteRow: 16, coefRow: 17 },
      { name: "Physique",                                    noteRow: 18, coefRow: 19 },
      { name: "Statistiques",                                noteRow: 20, coefRow: 21 },
      { name: "Internet des objets",                         noteRow: 22, coefRow: 23 },
      { name: "Traitement des données",                      noteRow: 24, coefRow: 25 },
      { name: "Architecture des ordinateurs",                noteRow: 26, coefRow: 27 },
      { name: "Gestion de projets TIC",                      noteRow: 28, coefRow: 29 },
      { name: "Systèmes concurrents",                        noteRow: 30, coefRow: 31 },
      { name: "Infrastructure cloud",                        noteRow: 32, coefRow: 33 },
      { name: "Infrastructure distribuée",                   noteRow: 34, coefRow: 35 },
      { name: "Mathématiques spécifiques 2",                 noteRow: 36, coefRow: 37 },
      { name: "Physique et simulation",                      noteRow: 38, coefRow: 39 },
    ],
  },

  "ISC2-IL": {
    label: "ISC 2 — Ingénierie Logicielle",
    modules: [
      {
        module: "Conception logicielle",
        branches: [
          { name: "Bases de données 1", coef: 3.5, sem: "P" },
          { name: "Génie logiciel 1", coef: 3.5, sem: "P" },
        ]
      },
      {
        module: "Projet 1",
        branches: [
          { name: "Projet de semestre 4", coef: 3, sem: "P" },
        ]
      },
      {
        module: "Paradigmes de programmation 1",
        branches: [
          { name: "Algorythmique 2", coef: 3.5, sem: "A" },
          { name: "DevOps et code robuste", coef: 2.5, sem: "A" },
        ]
      },
      {
        module: "Informatique technique",
        branches: [
          { name: "Informatique embarquée", coef: 4, sem: "P" },
          { name: "Programmation concurrente", coef: 2, sem: "P" },
        ]
      },
      {
        module: "Mathématique IT",
        branches: [
          { name: "Mathématiques spécifiques 1", coef: 3, sem: "A" },
          { name: "Physique", coef: 3, sem: "A" },
          { name: "Statistiques", coef: 2, sem: "A" },
        ]
      },
      {
        module: "Paradigmes de programmation 2",
        branches: [
          { name: "Algorythmique 3", coef: 4, sem: "P" },
          { name: "Programmation C/C++", coef: 3, sem: "P" },
        ]
      },
      {
        module: "Programmation système",
        branches: [
          { name: "Architecture des ordinateurs", coef: 4, sem: "A" },
          { name: "Gestion de projets TIC", coef: 2, sem: "A" },
          { name: "Systèmes concurrents", coef: 4, sem: "A" },
        ]
      },
      {
        module: "Applications logicielles",
        branches: [
          { name: "Applications Mobiles 1", coef: 4, sem: "A" },
          { name: "Systèmes d'information 1", coef: 2, sem: "A" },
        ]
      },
      {
        module: "Simulation IT",
        branches: [
          { name: "Mathématiques spécifiques 2", coef: 4, sem: "P" },
          { name: "Physique et simulation", coef: 3, sem: "P" },
        ]
      },
    ],
    excelMap: [
      { name: "Bases de données 1",            noteRow: 2,  coefRow: 3  },
      { name: "Génie logiciel 1",              noteRow: 4,  coefRow: 5  },
      { name: "Projet de semestre 4",          noteRow: 6,  coefRow: 7  },
      { name: "Algorythmique 2",               noteRow: 8,  coefRow: 9  },
      { name: "DevOps et code robuste",        noteRow: 10, coefRow: 11 },
      { name: "Informatique embarquée",        noteRow: 12, coefRow: 13 },
      { name: "Programmation concurrente",     noteRow: 14, coefRow: 15 },
      { name: "Mathématiques spécifiques 1",   noteRow: 16, coefRow: 17 },
      { name: "Physique",                      noteRow: 18, coefRow: 19 },
      { name: "Statistiques",                  noteRow: 20, coefRow: 21 },
      { name: "Algorythmique 3",               noteRow: 22, coefRow: 23 },
      { name: "Programmation C/C++",           noteRow: 24, coefRow: 25 },
      { name: "Architecture des ordinateurs",  noteRow: 26, coefRow: 27 },
      { name: "Gestion de projets TIC",        noteRow: 28, coefRow: 29 },
      { name: "Systèmes concurrents",          noteRow: 30, coefRow: 31 },
      { name: "Applications Mobiles 1",        noteRow: 32, coefRow: 33 },
      { name: "Systèmes d'information 1",      noteRow: 34, coefRow: 35 },
      { name: "Mathématiques spécifiques 2",   noteRow: 36, coefRow: 37 },
      { name: "Physique et simulation",        noteRow: 38, coefRow: 39 },
    ],
  },

  "ISC2-RS": {
    label: "ISC 2 — Réseaux et Systèmes",
    modules: [
      {
        module: "Conception logicielle",
        branches: [
          { name: "Bases de données 1", coef: 3.5, sem: "P" },
          { name: "Génie logiciel 1", coef: 3.5, sem: "P" },
        ]
      },
      {
        module: "Projet 1",
        branches: [
          { name: "Projet de semestre 4", coef: 3, sem: "P" },
        ]
      },
      {
        module: "Réseaux et administration",
        branches: [
          { name: "Administration et supervision de réseaux", coef: 1.5, sem: "P" },
          { name: "Réseaux IP 2", coef: 2.5, sem: "P" },
          { name: "Travaux pratiques réseaux et administration", coef: 1, sem: "P" },
        ]
      },
      {
        module: "Réseaux IP",
        branches: [
          { name: "Réseaux IP 1", coef: 5, sem: "A" },
        ]
      },
      {
        module: "Mathématique IT",
        branches: [
          { name: "Mathématiques spécifiques 1", coef: 3, sem: "A" },
          { name: "Physique", coef: 3, sem: "A" },
          { name: "Statistiques", coef: 2, sem: "A" },
        ]
      },
      {
        module: "Systèmes numériques avancés",
        branches: [
          { name: "Systèmes embarqués 1", coef: 4, sem: "P" },
          { name: "Systèmes numériques 2", coef: 4, sem: "P" },
        ]
      },
      {
        module: "Programmation système",
        branches: [
          { name: "Architecture des ordinateurs", coef: 4, sem: "A" },
          { name: "Gestion de projets TIC", coef: 2, sem: "A" },
          { name: "Systèmes concurrents", coef: 4, sem: "A" },
        ]
      },
      {
        module: "Signaux et systèmes numériques",
        branches: [
          { name: "Signaux", coef: 3, sem: "A" },
          { name: "Systèmes numériques 1", coef: 4, sem: "A" },
        ]
      },
      {
        module: "Simulation IT",
        branches: [
          { name: "Mathématiques spécifiques 2", coef: 4, sem: "P" },
          { name: "Physique et simulation", coef: 3, sem: "P" },
        ]
      },
    ],
    excelMap: [
      { name: "Bases de données 1",                                noteRow: 2,  coefRow: 3  },
      { name: "Génie logiciel 1",                                  noteRow: 4,  coefRow: 5  },
      { name: "Projet de semestre 4",                              noteRow: 6,  coefRow: 7  },
      { name: "Administration et supervision de réseaux",          noteRow: 8,  coefRow: 9  },
      { name: "Réseaux IP 2",                                      noteRow: 10, coefRow: 11 },
      { name: "Travaux pratiques réseaux et administration",       noteRow: 12, coefRow: 13 },
      { name: "Réseaux IP 1",                                      noteRow: 14, coefRow: 15 },
      { name: "Mathématiques spécifiques 1",                       noteRow: 16, coefRow: 17 },
      { name: "Physique",                                          noteRow: 18, coefRow: 19 },
      { name: "Statistiques",                                      noteRow: 20, coefRow: 21 },
      { name: "Systèmes embarqués 1",                              noteRow: 22, coefRow: 23 },
      { name: "Systèmes numériques 2",                             noteRow: 24, coefRow: 25 },
      { name: "Architecture des ordinateurs",                      noteRow: 26, coefRow: 27 },
      { name: "Gestion de projets TIC",                            noteRow: 28, coefRow: 29 },
      { name: "Systèmes concurrents",                              noteRow: 30, coefRow: 31 },
      { name: "Signaux",                                           noteRow: 32, coefRow: 33 },
      { name: "Systèmes numériques 1",                             noteRow: 34, coefRow: 35 },
      { name: "Mathématiques spécifiques 2",                       noteRow: 36, coefRow: 37 },
      { name: "Physique et simulation",                            noteRow: 38, coefRow: 39 },
    ],
  },

  "ISC3-RS": {
    label: "ISC 3 — Réseaux et Systèmes",
    modules: [
      {
        module: "Réseaux avancés",
        branches: [
          { name: "Architectures de réseaux", coef: 3, sem: "A" },
          { name: "Conception et exploitation de réseaux fixes et mobiles", coef: 4, sem: "A" },
        ]
      },
      {
        module: "Travail de bachelor",
        branches: [
          { name: "Travail de bachelor", coef: 12, sem: "P" },
        ]
      },
      {
        module: "Infrastructure, applications et sécurité",
        branches: [
          { name: "Infrastructures et systèmes virtualisés", coef: 3, sem: "P" },
          { name: "Sécurité des applications Web", coef: 3, sem: "P" },
          { name: "Sécurité IT III", coef: 3, sem: "P" },
        ]
      },
      {
        module: "Projet 2",
        branches: [
          { name: "Projet de semestre 5", coef: 4, sem: "A" },
        ]
      },
      {
        module: "Projet 3",
        branches: [
          { name: "Projet de semestre 6", coef: 5, sem: "P" },
        ]
      },
      {
        module: "Services et sécurité",
        branches: [
          { name: "Sécurité IT II", coef: 3.5, sem: "A" },
          { name: "Services et applications IT", coef: 3.5, sem: "A" },
        ]
      },
      {
        module: "Systèmes avancés",
        branches: [
          { name: "Systèmes d'information", coef: 3, sem: "A" },
          { name: "Systèmes de communication", coef: 2, sem: "A" },
          { name: "Systèmes embarqués 2", coef: 3, sem: "A" },
        ]
      },
      {
        module: "Cours à Option RS 1",
        branches: [
          { name: "Programmation élégante en GO", coef: 2, sem: "A" },
          { name: "Introduction au Traitement d'Images et à la vision", coef: 2, sem: "A" },
        ]
      },
      {
        module: "Cours à Option RS 2",
        branches: [
          { name: "Advanced Network Architecture", coef: 2, sem: "P" },
          { name: "Game Design and Development", coef: 2, sem: "P" },
        ]
      },
    ],
    excelMap: [
      { name: "Architectures de réseaux",                                       noteRow: 2,  coefRow: 3  },
      { name: "Conception et exploitation de réseaux fixes et mobiles",             noteRow: 4,  coefRow: 5  },
      { name: "Travail de bachelor",                                            noteRow: 6,  coefRow: 7  },
      { name: "Infrastructures et systèmes virtualisés",                        noteRow: 8,  coefRow: 9  },
      { name: "Sécurité des applications Web",                                  noteRow: 10, coefRow: 11 },
      { name: "Sécurité IT III",                                                noteRow: 12, coefRow: 13 },
      { name: "Projet de semestre 5",                                           noteRow: 14, coefRow: 15 },
      { name: "Projet de semestre 6",                                           noteRow: 16, coefRow: 17 },
      { name: "Sécurité IT II",                                                 noteRow: 18, coefRow: 19 },
      { name: "Services et applications IT",                                    noteRow: 20, coefRow: 21 },
      { name: "Systèmes d'information",                                         noteRow: 22, coefRow: 23 },
      { name: "Systèmes de communication",                                      noteRow: 24, coefRow: 25 },
      { name: "Systèmes embarqués 2",                                           noteRow: 26, coefRow: 27 },
      { name: "Programmation élégante en GO",                                   noteRow: 28, coefRow: 29 },
      { name: "Introduction au Traitement d'Images et à la vision",             noteRow: 30, coefRow: 31 },
      { name: "Advanced Network Architecture",                                  noteRow: 32, coefRow: 33 },
      { name: "Game Design and Development",                                    noteRow: 34, coefRow: 35 },
    ],
  },
};

/* ============================================================
   ACTIVE CURRICULUM — set by curriculum switcher
   ============================================================ */
const CURRICULUM_KEY = "isc_curriculum";
let currentCurriculumId = localStorage.getItem(CURRICULUM_KEY) || "ISC1";
let CURRICULUM = CURRICULA[currentCurriculumId].modules;
let EXCEL_BRANCH_MAP = CURRICULA[currentCurriculumId].excelMap;

function switchCurriculum(id) {
  if (!CURRICULA[id]) return;
  currentCurriculumId = id;
  localStorage.setItem(CURRICULUM_KEY, id);
  CURRICULUM = CURRICULA[id].modules;
  EXCEL_BRANCH_MAP = CURRICULA[id].excelMap;
  // Reload state for this curriculum
  state = loadState();
  // Update page title & selector
  updateCurriculumUI();
  // Re-render current page
  if (typeof render === "function") render();
  if (typeof buildPage === "function") buildPage();
}

function updateCurriculumUI() {
  const cur = CURRICULA[currentCurriculumId];
  document.querySelectorAll(".page-title").forEach(el => {
    el.textContent = "🎓 " + cur.label + " — " + (el.dataset.suffix || "Calculateur de Notes");
  });
  const sel = document.getElementById("curriculum-select");
  if (sel) sel.value = currentCurriculumId;
}

function initCurriculumSelector() {
  const sel = document.getElementById("curriculum-select");
  if (!sel) return;
  sel.innerHTML = "";
  for (const [id, cur] of Object.entries(CURRICULA)) {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = cur.label;
    sel.appendChild(opt);
  }
  sel.value = currentCurriculumId;
  updateCurriculumUI();
}
