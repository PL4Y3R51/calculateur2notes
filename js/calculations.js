/* ============================================================
   CALCULATION ENGINE
   Matches Excel formulas exactly.
   Depends on: curriculum.js, state.js
   ============================================================ */

/** Weighted average of a branch's grades + bonus, capped at 6, averaged with exam if present. */
function calcBranchAvg(branchName) {
  const b = getBranch(branchName);
  const validGrades = b.grades.filter(g => g.note != null && g.coef > 0);
  if (validGrades.length === 0) return null;

  const sumCoef = validGrades.reduce((s, g) => s + g.coef, 0);
  if (sumCoef === 0) return null;

  const weightedSum = validGrades.reduce((s, g) => s + g.note * g.coef, 0);
  let avg = weightedSum / sumCoef;

  const bonus = b.bonus || 0;
  avg = Math.min(avg + bonus, 6);

  const exam = b.exam;
  if (exam != null && exam > 0) {
    avg = (avg + exam) / 2;
  }

  return avg;
}

/** Module average: weighted avg of rounded branch averages, then MROUND to 0.5. */
function calcModuleAvg(mod, semFilter) {
  let sumWeighted = 0;
  let sumCoef = 0;
  for (const br of mod.branches) {
    if (semFilter && br.sem !== semFilter) continue;
    const avg = calcBranchAvg(br.name);
    if (avg == null) continue;
    const rounded = Math.round(avg * 10) / 10;
    sumWeighted += rounded * br.coef;
    sumCoef += br.coef;
  }
  if (sumCoef === 0) return null;
  const raw = sumWeighted / sumCoef;
  return Math.round(raw * 2) / 2;
}

/** Overall averages across all modules and branches. */
function calcOverall() {
  const modAvg = { all: { sw: 0, sc: 0 }, A: { sw: 0, sc: 0 }, P: { sw: 0, sc: 0 } };
  for (const mod of CURRICULUM) {
    const coef = mod.branches.reduce((s, b) => s + b.coef, 0);
    for (const key of ["all", "A", "P"]) {
      const filter = key === "all" ? null : key;
      const avg = calcModuleAvg(mod, filter);
      if (avg != null) {
        modAvg[key].sw += avg * (filter ? mod.branches.filter(b => b.sem === filter).reduce((s, b) => s + b.coef, 0) : coef);
        modAvg[key].sc += (filter ? mod.branches.filter(b => b.sem === filter).reduce((s, b) => s + b.coef, 0) : coef);
      }
    }
  }

  const brAvg = { all: { sw: 0, sc: 0 }, A: { sw: 0, sc: 0 }, P: { sw: 0, sc: 0 } };
  for (const mod of CURRICULUM) {
    for (const br of mod.branches) {
      const avg = calcBranchAvg(br.name);
      if (avg == null) continue;
      brAvg.all.sw += avg * br.coef; brAvg.all.sc += br.coef;
      brAvg[br.sem].sw += avg * br.coef; brAvg[br.sem].sc += br.coef;
    }
  }

  const safe = o => o.sc > 0 ? o.sw / o.sc : null;
  return {
    moduleAll: safe(modAvg.all),
    moduleA: safe(modAvg.A),
    moduleP: safe(modAvg.P),
    branchAll: safe(brAvg.all),
    branchA: safe(brAvg.A),
    branchP: safe(brAvg.P),
  };
}

/* --- Formatting helpers ------------------------------------ */
function fmtAvg(val, decimals) {
  if (val == null) return "—";
  return val.toFixed(decimals !== undefined ? decimals : 2);
}

function avgClass(val) {
  if (val == null) return "avg-none";
  return val >= 4 ? "avg-pass" : "avg-fail";
}
