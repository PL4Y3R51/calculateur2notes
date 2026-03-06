/* ============================================================
   STATS PAGE — Chart building
   Depends on: curriculum.js, state.js, calculations.js
   Depends on: Chart.js (CDN)
   ============================================================ */

const COLORS = [
  '#4361ee', '#f72585', '#7209b7', '#3a0ca3',
  '#4cc9f0', '#4895ef', '#560bad', '#480ca8',
  '#b5179e', '#f77f00', '#06d6a0', '#118ab2',
  '#073b4c', '#ef476f', '#ffd166', '#06d6a0',
  '#264653', '#2a9d8f', '#e9c46a', '#e76f51',
];

const PASS_LINE = {
  type: 'line',
  borderColor: 'rgba(220,38,38,.35)',
  borderWidth: 2,
  borderDash: [6, 4],
  label: { display: true, content: 'Seuil 4.0', position: 'start', font: { size: 11 } },
  scaleID: 'y',
  value: 4
};

function buildPage() {
  const container = document.getElementById('content');

  /* --- Gather data ----------------------------------------- */
  const branchData = [];
  for (const mod of CURRICULUM) {
    for (const br of mod.branches) {
      const avg = calcBranchAvg(br.name);
      if (avg != null) branchData.push({ name: br.name, avg, coef: br.coef, sem: br.sem, module: mod.module });
    }
  }
  const moduleData = [];
  for (const mod of CURRICULUM) {
    const avg = calcModuleAvg(mod, null);
    if (avg != null) moduleData.push({ name: mod.module, avg, coef: mod.branches.reduce((s, b) => s + b.coef, 0) });
  }

  if (branchData.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>Aucune note enregistrée.</p><p>Retournez sur la page <a href="index.html">Notes</a> pour saisir vos résultats.</p></div>';
    return;
  }

  container.innerHTML = `
    <div class="charts-grid">
      <div class="chart-card"><h2>Moyennes par module</h2><canvas id="chartModules"></canvas></div>
      <div class="chart-card"><h2>Moyennes par branche</h2><canvas id="chartBranches"></canvas></div>
      <div class="chart-card"><h2>Radar — Modules</h2><canvas id="chartRadar"></canvas></div>
      <div class="chart-card"><h2>Distribution des notes</h2><canvas id="chartDistrib"></canvas></div>
      <div class="chart-card full-width"><h2>Évolution des notes — par branche</h2><canvas id="chartEvolution"></canvas></div>
    </div>
  `;

  const tooltipCb = { label: ctx => ' ' + ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2) };

  /* --- 1. Module bar chart --------------------------------- */
  new Chart(document.getElementById('chartModules'), {
    type: 'bar',
    data: {
      labels: moduleData.map(m => m.name),
      datasets: [{
        label: 'Moyenne module',
        data: moduleData.map(m => m.avg),
        backgroundColor: moduleData.map((_, i) => COLORS[i % COLORS.length]),
        borderRadius: 6,
        maxBarThickness: 60,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        annotation: { annotations: { passLine: PASS_LINE } },
        tooltip: { callbacks: tooltipCb },
      },
      scales: {
        y: { min: 1, max: 6, ticks: { stepSize: 0.5 } },
        x: { ticks: { font: { size: 11 } } }
      }
    }
  });

  /* --- 2. Branch bar chart --------------------------------- */
  new Chart(document.getElementById('chartBranches'), {
    type: 'bar',
    data: {
      labels: branchData.map(b => b.name.length > 22 ? b.name.slice(0, 20) + '…' : b.name),
      datasets: [{
        label: 'Moyenne branche',
        data: branchData.map(b => b.avg),
        backgroundColor: branchData.map(b => b.avg >= 4 ? '#16a34a' : '#dc2626'),
        borderRadius: 5,
        maxBarThickness: 40,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ' ' + ctx.dataset.label + ': ' + ctx.parsed.x.toFixed(2) } },
      },
      scales: {
        x: { min: 1, max: 6, ticks: { stepSize: 0.5 } },
        y: { ticks: { font: { size: 11 } } }
      }
    }
  });

  /* --- 3. Radar chart -------------------------------------- */
  if (moduleData.length >= 3) {
    new Chart(document.getElementById('chartRadar'), {
      type: 'radar',
      data: {
        labels: moduleData.map(m => m.name),
        datasets: [{
          label: 'Modules',
          data: moduleData.map(m => m.avg),
          backgroundColor: 'rgba(67,97,238,.15)',
          borderColor: '#4361ee',
          pointBackgroundColor: '#4361ee',
          borderWidth: 2,
          pointRadius: 4,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          r: { min: 1, max: 6, ticks: { stepSize: 1, backdropColor: 'transparent' }, pointLabels: { font: { size: 11 } } }
        }
      }
    });
  } else {
    document.getElementById('chartRadar').parentElement.innerHTML = '<h2>Radar — Modules</h2><p style="color:var(--text-muted);text-align:center;padding:2rem 0;">Minimum 3 modules avec des notes requis.</p>';
  }

  /* --- 4. Grade distribution histogram --------------------- */
  const allGrades = [];
  for (const mod of CURRICULUM) {
    for (const br of mod.branches) {
      const b = getBranch(br.name);
      for (const g of b.grades) {
        if (g.note != null) allGrades.push(g.note);
      }
    }
  }
  if (allGrades.length > 0) {
    const bins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const binLabels = ['1–1.5', '1.5–2', '2–2.5', '2.5–3', '3–3.5', '3.5–4', '4–4.5', '4.5–5', '5–5.5', '5.5–6'];
    for (const g of allGrades) {
      let idx = Math.floor((g - 1) / 0.5);
      if (idx < 0) idx = 0;
      if (idx > 9) idx = 9;
      bins[idx]++;
    }
    new Chart(document.getElementById('chartDistrib'), {
      type: 'bar',
      data: {
        labels: binLabels,
        datasets: [{
          label: 'Nb de notes',
          data: bins,
          backgroundColor: bins.map((_, i) => i < 6 ? 'rgba(220,38,38,.6)' : 'rgba(22,163,74,.6)'),
          borderRadius: 4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => ' ' + ctx.parsed.y + ' note(s)' } }
        },
        scales: {
          y: { ticks: { stepSize: 1 }, title: { display: true, text: 'Nombre de notes' } },
          x: { title: { display: true, text: 'Plage de notes' } }
        }
      }
    });
  }

  /* --- 5. Grade evolution per branch ----------------------- */
  const datasets = [];
  let colorIdx = 0;
  let maxLen = 0;
  for (const mod of CURRICULUM) {
    for (const br of mod.branches) {
      const b = getBranch(br.name);
      const notes = b.grades.filter(g => g.note != null).map(g => g.note);
      if (notes.length < 2) continue;
      maxLen = Math.max(maxLen, notes.length);
      const color = COLORS[colorIdx % COLORS.length];
      datasets.push({
        label: br.name,
        data: notes,
        borderColor: color,
        backgroundColor: color,
        tension: .3,
        pointRadius: 4,
        borderWidth: 2,
        fill: false,
      });
      colorIdx++;
    }
  }
  if (datasets.length > 0) {
    const labels = Array.from({ length: maxLen }, (_, i) => 'Note ' + (i + 1));
    new Chart(document.getElementById('chartEvolution'), {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 11 }, boxWidth: 14, padding: 12 } },
          tooltip: { callbacks: tooltipCb },
        },
        scales: {
          y: { min: 1, max: 7, ticks: { stepSize: 0.5 }, title: { display: true, text: 'Note' } },
          x: { title: { display: true, text: 'Évaluation n°' } }
        }
      }
    });
  } else {
    document.getElementById('chartEvolution').parentElement.innerHTML = '<h2>Évolution des notes — par branche</h2><p style="color:var(--text-muted);text-align:center;padding:2rem 0;">Minimum 2 notes dans une branche requis pour afficher l\'évolution.</p>';
  }
}

/* --- Init -------------------------------------------------- */
buildPage();
