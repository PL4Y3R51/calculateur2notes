/* ============================================================
   STATE MANAGEMENT
   Handles localStorage persistence for grade data.
   Depends on: curriculum.js (for currentCurriculumId)
   ============================================================ */
function storageKey() {
  return "grades_" + currentCurriculumId;
}

/* Migrate legacy storage key from before multi-curriculum support */
(function migrateOldStorage() {
  const OLD_KEY = "isc1_grades";
  const old = localStorage.getItem(OLD_KEY);
  if (old && !localStorage.getItem("grades_ISC1")) {
    localStorage.setItem("grades_ISC1", old);
    localStorage.removeItem(OLD_KEY);
  }
})();

function emptyBranch() {
  return { grades: [], exam: null, bonus: 0 };
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey());
    if (raw) return JSON.parse(raw);
  } catch (_) { /* ignore corrupt data */ }
  return {};
}

function saveState() {
  localStorage.setItem(storageKey(), JSON.stringify(state));
}

function getBranch(name) {
  if (!state[name]) state[name] = emptyBranch();
  return state[name];
}

// Global mutable state — loaded once, mutated by UI actions.
let state = loadState();
