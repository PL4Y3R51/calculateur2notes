/* ============================================================
   STATE MANAGEMENT
   Handles localStorage persistence for grade data.
   Depends on: (nothing)
   ============================================================ */
const STORAGE_KEY = "isc1_grades";

function emptyBranch() {
  return { grades: [], exam: null, bonus: 0 };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) { /* ignore corrupt data */ }
  return {};
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getBranch(name) {
  if (!state[name]) state[name] = emptyBranch();
  return state[name];
}

// Global mutable state — loaded once, mutated by UI actions.
let state = loadState();
