/* ============================================================
   NOTES PAGE — Rendering, Event Handlers, Import/Export
   Depends on: curriculum.js, state.js, calculations.js
   ============================================================ */

/* --- Rendering --------------------------------------------- */

function renderSummary() {
  const o = calcOverall();
  document.getElementById("summary").innerHTML = `
    <div class="summary-card">
      <div class="label">Moyenne modules</div>
      <div class="value ${avgClass(o.moduleAll)}">${fmtAvg(o.moduleAll)}</div>
    </div>
    <div class="summary-card">
      <div class="label">Moyenne cours</div>
      <div class="value ${avgClass(o.branchAll)}">${fmtAvg(o.branchAll)}</div>
    </div>
    <div class="summary-card">
      <div class="label">Automne (mod.)</div>
      <div class="value ${avgClass(o.moduleA)}">${fmtAvg(o.moduleA)}</div>
    </div>
    <div class="summary-card">
      <div class="label">Printemps (mod.)</div>
      <div class="value ${avgClass(o.moduleP)}">${fmtAvg(o.moduleP)}</div>
    </div>
    <div class="summary-card">
      <div class="label">Automne (cours)</div>
      <div class="value ${avgClass(o.branchA)}">${fmtAvg(o.branchA)}</div>
    </div>
    <div class="summary-card">
      <div class="label">Printemps (cours)</div>
      <div class="value ${avgClass(o.branchP)}">${fmtAvg(o.branchP)}</div>
    </div>
  `;
}

function renderModules() {
  const container = document.getElementById("modules");
  container.innerHTML = "";
  for (let mi = 0; mi < CURRICULUM.length; mi++) {
    const mod = CURRICULUM[mi];
    const modCoef = mod.branches.reduce((s, b) => s + b.coef, 0);
    const modAvgAll = calcModuleAvg(mod, null);
    const modAvgA = calcModuleAvg(mod, "A");
    const modAvgP = calcModuleAvg(mod, "P");

    const div = document.createElement("div");
    div.className = "module open";

    const rows = mod.branches.map((br) => renderBranchRow(br)).join("");

    div.innerHTML = `
      <div class="module-header" onclick="this.parentElement.classList.toggle('open')">
        <span class="name">${mod.module}</span>
        <div class="stats">
          <span><span class="stat-label">Coef:</span> ${modCoef}</span>
          <span><span class="stat-label">Moy:</span> <span class="badge ${avgClass(modAvgAll)}">${fmtAvg(modAvgAll, 1)}</span></span>
          <span><span class="stat-label">A:</span> <span class="badge ${avgClass(modAvgA)}">${fmtAvg(modAvgA, 1)}</span></span>
          <span><span class="stat-label">P:</span> <span class="badge ${avgClass(modAvgP)}">${fmtAvg(modAvgP, 1)}</span></span>
        </div>
        <span class="chevron">▶</span>
      </div>
      <div class="module-body">
        <table class="branch-table">
          <thead>
            <tr>
              <th>Sem</th>
              <th>Branche</th>
              <th class="center">Coef</th>
              <th>Notes (note / coef)</th>
              <th class="center">Examen</th>
              <th class="center">Bonus</th>
              <th class="center">Moyenne</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
    container.appendChild(div);
  }
}

function renderBranchRow(br) {
  const b = getBranch(br.name);
  const avg = calcBranchAvg(br.name);

  let gradeChips = "";
  for (let gi = 0; gi < b.grades.length; gi++) {
    const g = b.grades[gi];
    gradeChips += `
      <div class="grade-chip">
        <button class="remove-grade" onclick="removeGrade('${esc(br.name)}', ${gi})" title="Supprimer">×</button>
        <input type="number" step="0.01" min="1" max="6" placeholder="Note"
               value="${g.note != null ? g.note : ''}"
               onchange="updateGrade('${esc(br.name)}', ${gi}, 'note', this.value)">
        <input type="number" step="0.1" min="0" max="10" class="coef-input" placeholder="×coef"
               value="${g.coef != null ? g.coef : ''}"
               onchange="updateGrade('${esc(br.name)}', ${gi}, 'coef', this.value)">
      </div>`;
  }

  return `
    <tr>
      <td class="center"><span class="sem-tag ${br.sem}">${br.sem}</span></td>
      <td class="branch-name-cell">${br.name}</td>
      <td class="coef-cell">${br.coef}</td>
      <td class="grades-cell">
        <div class="grades-inner">
          ${gradeChips}
          <button class="add-grade-btn" onclick="addGrade('${esc(br.name)}')">+ Note</button>
        </div>
      </td>
      <td class="extras-cell center">
        <input type="number" step="0.01" min="1" max="6" placeholder="—"
          value="${b.exam != null && b.exam > 0 ? b.exam : ''}"
          onchange="updateExtra('${esc(br.name)}', 'exam', this.value)">
      </td>
      <td class="extras-cell center">
        <input type="number" step="0.01" min="0" max="2" placeholder="0"
          value="${b.bonus ? b.bonus : ''}"
          onchange="updateExtra('${esc(br.name)}', 'bonus', this.value)">
      </td>
      <td class="center"><span class="branch-avg-cell ${avgClass(avg)}">${fmtAvg(avg)}</span></td>
    </tr>`;
}

function esc(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

function render() {
  renderSummary();
  renderModules();
}

/* --- Event handlers ---------------------------------------- */

function addGrade(branchName) {
  const b = getBranch(branchName);
  b.grades.push({ note: null, coef: 1 });
  saveState();
  render();
  setTimeout(() => {
    const pills = document.querySelectorAll(".grade-chip input[type='number']");
    if (pills.length > 0) {
      const last = pills[pills.length - 2];
      if (last) last.focus();
    }
  }, 50);
}

function removeGrade(branchName, index) {
  const b = getBranch(branchName);
  b.grades.splice(index, 1);
  if (b.grades.length === 0 && !b.exam && !b.bonus) {
    delete state[branchName];
  }
  saveState();
  render();
}

function updateGrade(branchName, index, field, value) {
  const b = getBranch(branchName);
  const num = value === "" ? null : parseFloat(value);
  b.grades[index][field] = num;
  saveState();
  render();
}

function updateExtra(branchName, field, value) {
  const b = getBranch(branchName);
  const num = value === "" ? null : parseFloat(value);
  b[field] = num;
  saveState();
  render();
}

/* --- JSON Export / Import ---------------------------------- */

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "notes_isc1_backup.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (typeof data !== "object" || Array.isArray(data)) {
        alert("Fichier invalide.");
        return;
      }
      state = data;
      saveState();
      render();
    } catch (_) {
      alert("Erreur lors de la lecture du fichier.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetData() {
  if (!confirm("Voulez-vous vraiment supprimer toutes vos notes ?")) return;
  state = {};
  saveState();
  render();
}

/* --- Excel Import ------------------------------------------ */

function importExcel(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: 'array' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      if (!ws) { alert("Aucune feuille trouvée dans le fichier."); return; }

      const gradeColStart = 14; // column O
      const gradeColEnd = 32;   // column AG
      const colL = 11;          // exam
      const colM = 12;          // bonus

      const newState = {};
      for (const br of EXCEL_BRANCH_MAP) {
        const grades = [];
        for (let c = gradeColStart; c <= gradeColEnd; c++) {
          const noteAddr = XLSX.utils.encode_cell({ r: br.noteRow - 1, c });
          const coefAddr = XLSX.utils.encode_cell({ r: br.coefRow - 1, c });
          const noteCell = ws[noteAddr];
          const coefCell = ws[coefAddr];
          if (noteCell && noteCell.v != null && coefCell && coefCell.v != null && coefCell.v > 0) {
            grades.push({ note: parseFloat(noteCell.v), coef: parseFloat(coefCell.v) });
          }
        }

        const examAddr = XLSX.utils.encode_cell({ r: br.noteRow - 1, c: colL });
        const bonusAddr = XLSX.utils.encode_cell({ r: br.noteRow - 1, c: colM });
        const examCell = ws[examAddr];
        const bonusCell = ws[bonusAddr];
        const exam = (examCell && examCell.v != null && examCell.v > 0) ? parseFloat(examCell.v) : null;
        const bonus = (bonusCell && bonusCell.v != null) ? parseFloat(bonusCell.v) : 0;

        newState[br.name] = { grades, exam, bonus };
      }

      state = newState;
      saveState();
      render();
      alert("Import Excel réussi ! " + Object.values(newState).filter(b => b.grades.length > 0).length + " branche(s) avec des notes importées.");
    } catch (err) {
      alert("Erreur lors de la lecture du fichier Excel: " + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
  event.target.value = "";
}

/* --- Init -------------------------------------------------- */
render();
