// ============ App state ============
const STORAGE_KEY = "oposicionesInfantilStatsV1";
const main = document.getElementById("app-main");
const DIFFICULTY_LABELS = { facil: "Fácil", media: "Media", dificil: "Difícil", moidificil: "Moi difícil" };

let state = {
  selectedBlocks: new Set(QUESTION_BANK.map(b => b.id)),
  selectedDifficulty: new Set(["facil","media","dificil","moidificil"]),
  numQuestions: 20,
  quiz: null // {questions:[...], index, answers:[], startedAt}
};

function loadStats(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveStats(stats){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }catch(e){}
}
function totalAvailable(){
  return QUESTION_BANK
    .filter(b => state.selectedBlocks.has(b.id))
    .reduce((sum,b) => sum + b.questions.filter(q => state.selectedDifficulty.has(q.d)).length, 0);
}
function blockAvailable(b){
  return b.questions.filter(q => state.selectedDifficulty.has(q.d)).length;
}

// ============ Setup screen ============
function renderSetup(){
  const stats = loadStats();
  const max = totalAvailable();
  if(state.numQuestions > max) state.numQuestions = max;
  if(state.numQuestions < 1) state.numQuestions = Math.min(10, max);

  const rows = QUESTION_BANK.map(b => {
    const checked = state.selectedBlocks.has(b.id) ? "checked" : "";
    const s = stats[b.id];
    let statHtml = `<span class="block-stat no-data">— sen datos</span>`;
    if(s && s.total > 0){
      const pct = Math.round((s.correct / s.total) * 100);
      statHtml = `<span class="block-stat has-data">${pct}%</span>`;
    }
    return `
      <label class="block-row">
        <input type="checkbox" data-block="${b.id}" ${checked}>
        <span class="block-name">${b.title}</span>
        <span class="block-count">${blockAvailable(b)} preg.</span>
        ${statHtml}
      </label>`;
  }).join("");

  const facilChecked = state.selectedDifficulty.has("facil") ? "checked" : "";
  const mediaChecked = state.selectedDifficulty.has("media") ? "checked" : "";
  const dificilChecked = state.selectedDifficulty.has("dificil") ? "checked" : "";
  const moiDificilChecked = state.selectedDifficulty.has("moidificil") ? "checked" : "";

  main.innerHTML = `
    <section class="panel">
      <h2>Configura o teu test</h2>
      <p class="panel-sub">Elixe os bloques do temario, a dificultade e cantas preguntas queres responder. As preguntas e as opcións escóllense ao chou en cada intento.</p>

      <div class="difficulty-row">
        <span class="difficulty-label">Dificultade</span>
        <label class="diff-chip">
          <input type="checkbox" id="diffFacil" ${facilChecked}>
          <span class="diff-chip-text diff-facil">Fácil</span>
        </label>
        <label class="diff-chip">
          <input type="checkbox" id="diffMedia" ${mediaChecked}>
          <span class="diff-chip-text diff-media">Media</span>
        </label>
        <label class="diff-chip">
          <input type="checkbox" id="diffDificil" ${dificilChecked}>
          <span class="diff-chip-text diff-dificil">Difícil</span>
        </label>
        <label class="diff-chip">
          <input type="checkbox" id="diffMoiDificil" ${moiDificilChecked}>
          <span class="diff-chip-text diff-moidificil">Moi difícil</span>
        </label>
      </div>

      <div class="select-actions">
        <button class="link-btn" id="selectAll">Marcar todos</button>
        <button class="link-btn" id="selectNone">Desmarcar todos</button>
        <button class="link-btn" id="selectLegislacion">Só Lexislación BOE</button>
      </div>

      <div class="block-list">${rows}</div>

      <div class="count-row">
        <label for="numQ">Nº de preguntas</label>
        <input type="range" id="numQ" min="1" max="${Math.max(max,1)}" value="${state.numQuestions}">
        <span class="count-value" id="numQVal">${state.numQuestions}</span>
        <span class="count-max">de ${max} dispoñibles</span>
      </div>

      <button class="primary-btn" id="startBtn" ${max===0?"disabled":""}>Comezar test</button>
    </section>
  `;

  main.querySelectorAll('input[type="checkbox"][data-block]').forEach(cb => {
    cb.addEventListener("change", () => {
      const id = cb.dataset.block;
      if(cb.checked) state.selectedBlocks.add(id); else state.selectedBlocks.delete(id);
      renderSetup();
    });
  });
  document.getElementById("selectAll").addEventListener("click", () => {
    state.selectedBlocks = new Set(QUESTION_BANK.map(b=>b.id));
    renderSetup();
  });
  document.getElementById("selectNone").addEventListener("click", () => {
    state.selectedBlocks = new Set();
    renderSetup();
  });
  document.getElementById("selectLegislacion").addEventListener("click", () => {
    state.selectedBlocks = new Set(["b26"]);
    renderSetup();
  });
  document.getElementById("diffFacil").addEventListener("change", (e) => {
    if(e.target.checked) state.selectedDifficulty.add("facil"); else state.selectedDifficulty.delete("facil");
    if(state.selectedDifficulty.size === 0) state.selectedDifficulty.add("facil");
    renderSetup();
  });
  document.getElementById("diffMedia").addEventListener("change", (e) => {
    if(e.target.checked) state.selectedDifficulty.add("media"); else state.selectedDifficulty.delete("media");
    if(state.selectedDifficulty.size === 0) state.selectedDifficulty.add("media");
    renderSetup();
  });
  document.getElementById("diffDificil").addEventListener("change", (e) => {
    if(e.target.checked) state.selectedDifficulty.add("dificil"); else state.selectedDifficulty.delete("dificil");
    if(state.selectedDifficulty.size === 0) state.selectedDifficulty.add("dificil");
    renderSetup();
  });
  document.getElementById("diffMoiDificil").addEventListener("change", (e) => {
    if(e.target.checked) state.selectedDifficulty.add("moidificil"); else state.selectedDifficulty.delete("moidificil");
    if(state.selectedDifficulty.size === 0) state.selectedDifficulty.add("moidificil");
    renderSetup();
  });
  const range = document.getElementById("numQ");
  range.addEventListener("input", () => {
    state.numQuestions = parseInt(range.value, 10);
    document.getElementById("numQVal").textContent = state.numQuestions;
  });
  document.getElementById("startBtn").addEventListener("click", startQuiz);
}

// ============ Quiz building ============
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function startQuiz(){
  const pool = [];
  QUESTION_BANK.forEach(b => {
    if(!state.selectedBlocks.has(b.id)) return;
    b.questions.forEach(q => {
      if(!state.selectedDifficulty.has(q.d)) return;
      pool.push({blockId:b.id, blockTitle:b.title, ...q});
    });
  });
  const chosen = shuffle(pool).slice(0, state.numQuestions);

  const prepared = chosen.map(q => {
    const optionIdxs = shuffle(q.o.map((_,i)=>i));
    const newOptions = optionIdxs.map(i => q.o[i]);
    const newCorrect = optionIdxs.indexOf(q.c);
    return {
      blockId:q.blockId, blockTitle:q.blockTitle, difficulty:q.d,
      question:q.q, options:newOptions, correct:newCorrect,
      explanation:q.e, userAnswer:null, corrected:false
    };
  });

  state.quiz = { questions: prepared };
  renderQuiz();
}

// ============ Quiz screen (todas as preguntas xuntas, corrección total ou individual) ============
const LETTERS = ["A","B","C","D","E","F"];

function questionCardHtml(q, i){
  const answered = q.userAnswer !== null;

  const optionsHtml = q.options.map((opt,idx) => {
    let cls = "option-row";
    if(q.corrected){
      cls += " locked";
      if(idx === q.correct) cls += " correct";
      else if(idx === q.userAnswer) cls += " incorrect";
    } else if(idx === q.userAnswer){
      cls += " selected";
    }
    return `<button class="${cls}" data-qi="${i}" data-idx="${idx}" ${q.corrected?"disabled":""}>
      <span class="option-bubble">${LETTERS[idx]}</span>
      <span>${opt}</span>
    </button>`;
  }).join("");

  let feedbackHtml = "";
  if(q.corrected){
    const isCorrect = q.userAnswer === q.correct;
    const noAnswer = q.userAnswer === null;
    feedbackHtml = `
      <div class="feedback-box ${isCorrect?"is-correct":"is-incorrect"}">
        <span class="feedback-title ${isCorrect?"is-correct":"is-incorrect"}">${noAnswer ? "Sen responder" : (isCorrect ? "Correcto" : "Incorrecto")}</span>
        ${q.explanation}
      </div>`;
  }

  const checkBtn = !q.corrected
    ? `<button class="check-btn" data-qi="${i}" ${answered?"":"disabled"}>Comprobar esta pregunta</button>`
    : "";

  return `
    <div class="question-card ${q.corrected ? "is-corrected":""}" id="qcard-${i}">
      <div class="question-head">
        <span class="question-block-tag">${q.blockTitle}</span>
        <span class="diff-badge diff-badge-${q.difficulty}">${DIFFICULTY_LABELS[q.difficulty] || q.difficulty}</span>
        <span class="question-index">Pregunta ${i+1}</span>
      </div>
      <p class="question-text">${q.question}</p>
      <div class="options">${optionsHtml}</div>
      ${feedbackHtml}
      ${checkBtn}
    </div>`;
}

function renderQuiz(){
  const quiz = state.quiz;
  const total = quiz.questions.length;
  const correctedCount = quiz.questions.filter(q=>q.corrected).length;

  const cardsHtml = quiz.questions.map((q,i) => questionCardHtml(q,i)).join("");

  main.innerHTML = `
    <div class="quiz-toolbar">
      <div class="quiz-toolbar-info">
        <strong>${correctedCount}</strong> de ${total} correxidas
      </div>
      <div class="quiz-toolbar-actions">
        <button class="secondary-btn" id="correctAllBtn">Corrixir todo o test</button>
        <button class="primary-btn" id="seeResultsBtn">Ver resultados</button>
      </div>
    </div>
    <p class="toolbar-hint">Podes corrixir pregunta a pregunta co botón de cada tarxeta, ou corrixilas todas dun golpe.</p>

    <div class="question-list">${cardsHtml}</div>

    <div class="quiz-toolbar quiz-toolbar-bottom">
      <button class="secondary-btn" id="correctAllBtn2">Corrixir todo o test</button>
      <button class="primary-btn" id="seeResultsBtn2">Ver resultados</button>
    </div>
  `;

  main.querySelectorAll(".option-row").forEach(btn => {
    btn.addEventListener("click", () => {
      const qi = parseInt(btn.dataset.qi,10);
      const idx = parseInt(btn.dataset.idx,10);
      quiz.questions[qi].userAnswer = idx;
      renderQuiz();
      document.getElementById(`qcard-${qi}`)?.scrollIntoView({block:"nearest"});
    });
  });

  main.querySelectorAll(".check-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const qi = parseInt(btn.dataset.qi,10);
      quiz.questions[qi].corrected = true;
      renderQuiz();
      document.getElementById(`qcard-${qi}`)?.scrollIntoView({block:"start", behavior:"smooth"});
    });
  });

  function correctAll(){
    quiz.questions.forEach(q => { q.corrected = true; });
    renderQuiz();
  }
  document.getElementById("correctAllBtn").addEventListener("click", correctAll);
  document.getElementById("correctAllBtn2").addEventListener("click", correctAll);

  function goResults(){
    quiz.questions.forEach(q => { q.corrected = true; });
    finishQuiz();
  }
  document.getElementById("seeResultsBtn").addEventListener("click", goResults);
  document.getElementById("seeResultsBtn2").addEventListener("click", goResults);
}

// ============ Results ============
function finishQuiz(){
  const quiz = state.quiz;
  const stats = loadStats();

  quiz.questions.forEach(q => {
    if(!stats[q.blockId]) stats[q.blockId] = {correct:0, total:0};
    stats[q.blockId].total++;
    if(q.userAnswer === q.correct) stats[q.blockId].correct++;
  });
  saveStats(stats);

  renderResults();
}

function barClass(pct){
  if(pct < 50) return "low";
  if(pct < 75) return "mid";
  return "";
}

function renderResults(){
  const quiz = state.quiz;
  const total = quiz.questions.length;
  const correctCount = quiz.questions.filter(q=>q.userAnswer===q.correct).length;
  const overallPct = Math.round((correctCount/total)*100);

  // per-block breakdown for THIS test
  const byBlock = {};
  quiz.questions.forEach(q => {
    if(!byBlock[q.blockId]) byBlock[q.blockId] = {title:q.blockTitle, correct:0, total:0};
    byBlock[q.blockId].total++;
    if(q.userAnswer===q.correct) byBlock[q.blockId].correct++;
  });

  const rows = Object.values(byBlock).map(b => {
    const pct = Math.round((b.correct/b.total)*100);
    return `<tr>
      <td>${b.title}</td>
      <td>${b.correct}/${b.total}</td>
      <td class="bar-cell"><div class="bar-track"><div class="bar-fill ${barClass(pct)}" style="width:${pct}%"></div></div></td>
      <td class="pct-cell">${pct}%</td>
    </tr>`;
  }).join("");

  const reviewHtml = quiz.questions.map((q,i) => {
    const letters = ["A","B","C","D","E","F"];
    const isRight = q.userAnswer===q.correct;
    return `
      <div class="review-item ${isRight?"right":"wrong"}">
        <div class="review-block-tag">${q.blockTitle} · Pregunta ${i+1}</div>
        <div class="review-q">${q.question}</div>
        ${!isRight ? `<div class="review-line your-wrong"><span class="label">A túa resposta:</span> ${letters[q.userAnswer]}. ${q.options[q.userAnswer]}</div>` : ""}
        <div class="review-line correct-answer"><span class="label">Resposta correcta:</span> ${letters[q.correct]}. ${q.options[q.correct]}</div>
        <div class="review-explain">${q.explanation}</div>
      </div>`;
  }).join("");

  main.innerHTML = `
    <section class="panel">
      <div class="score-hero">
        <span class="score-big">${overallPct}%</span>
        <span class="score-sub">${correctCount} de ${total} respostas correctas</span>
      </div>

      <h3 class="section-title">Resultado por bloque (neste test)</h3>
      <div class="table-scroll">
        <table class="stats-table">
          <thead><tr><th>Bloque</th><th>Acertos</th><th></th><th>%</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>

      <div class="result-actions">
        <button class="primary-btn" id="pdfBtn">Descargar PDF</button>
        <button class="secondary-btn" id="retryBtn">Repetir con estes bloques</button>
        <button class="secondary-btn" id="homeBtn">Novo test</button>
      </div>
    </section>

    <h3 class="section-title">Repaso completo</h3>
    ${reviewHtml}
  `;

  document.getElementById("pdfBtn").addEventListener("click", () => downloadPdf(quiz, overallPct, correctCount, total, byBlock));
  document.getElementById("retryBtn").addEventListener("click", startQuiz);
  document.getElementById("homeBtn").addEventListener("click", () => {
    state.quiz = null;
    renderSetup();
  });
}

// ============ PDF export ============
function downloadPdf(quiz, overallPct, correctCount, total, byBlock){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:"pt", format:"a4"});
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 56;
  const maxW = pageW - margin*2;

  function ensureSpace(h){
    if(y + h > doc.internal.pageSize.getHeight() - 40){
      doc.addPage();
      y = 56;
    }
  }
  function addWrapped(text, x, size, weight, color, lineGap){
    doc.setFont("helvetica", weight);
    doc.setFontSize(size);
    doc.setTextColor(color[0],color[1],color[2]);
    const lines = doc.splitTextToSize(text, maxW - (x-margin));
    lines.forEach(line => {
      ensureSpace(size + lineGap);
      doc.text(line, x, y);
      y += size + lineGap;
    });
  }

  doc.setFont("helvetica","bold");
  doc.setFontSize(18);
  doc.setTextColor(30,52,40);
  doc.text("Test de oposicions - Educacion Infantil (Galicia)", margin, y);
  y += 24;

  const date = new Date().toLocaleDateString("gl-ES");
  addWrapped(`Data: ${date}`, margin, 10.5, "normal", [90,90,80], 4);
  addWrapped(`Resultado: ${correctCount} de ${total} correctas (${overallPct}%)`, margin, 12, "bold", [30,52,40], 6);
  y += 6;

  addWrapped("Resultado por bloque", margin, 13, "bold", [30,52,40], 6);
  Object.values(byBlock).forEach(b => {
    const pct = Math.round((b.correct/b.total)*100);
    addWrapped(`- ${b.title}: ${b.correct}/${b.total} (${pct}%)`, margin, 10.5, "normal", [40,40,35], 4);
  });
  y += 10;

  addWrapped("Preguntas y respuestas", margin, 13, "bold", [30,52,40], 6);
  const letters = ["A","B","C","D","E","F"];
  quiz.questions.forEach((q,i) => {
    ensureSpace(20);
    y += 6;
    addWrapped(`${i+1}. [${q.blockTitle}] ${q.question}`, margin, 11, "bold", [20,20,15], 4);
    q.options.forEach((opt, idx) => {
      const isCorrect = idx===q.correct;
      const isUser = idx===q.userAnswer;
      let prefix = `${letters[idx]}) `;
      let color = [60,60,55];
      if(isCorrect) color = [50,110,80];
      else if(isUser && !isCorrect) color = [160,70,55];
      let suffix = "";
      if(isCorrect) suffix = "  <- correcta";
      if(isUser && !isCorrect) suffix += "  <- tu respuesta";
      addWrapped(prefix + opt + suffix, margin+10, 10, "normal", color, 3);
    });
    addWrapped(`Explicacion: ${stripAccentsSafe(q.explanation)}`, margin+10, 9.5, "normal", [90,90,80], 3);
    y += 4;
  });

  doc.save("test-educacion-infantil-resultado.pdf");
}

// jsPDF's base helvetica font has limited character support; keep text readable if odd glyphs appear.
function stripAccentsSafe(text){
  return text;
}

// ============ Init ============
renderSetup();
