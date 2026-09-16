/**
 * script.js
 * ระบบควบคุมหลักของ BioHub:
 * - ระบบจัดการ Light / Dark Theme พร้อมบันทึกลง localStorage
 * - ระบบสลับโหมด [สรุปเนื้อหา / แบบทดสอบ]
 * - ระบบแสดงผลเนื้อหาสรุปแยกตามบท (Study Mode)
 * - ระบบคลังข้อสอบ สุ่มโจทย์ ตรวจคำตอบ แถบ Progress และแสดงผลวิเคราะห์ (Quiz Mode)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. THEME TOGGLE (LIGHT / DARK THEME)
  // ==========================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlRoot = document.documentElement;

  // โหลดค่าธีมจาก localStorage หรือใช้ค่าเริ่มต้น 'light'
  const savedTheme = localStorage.getItem('biohub-theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('biohub-theme', newTheme);
  });

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun';
      themeToggleBtn.title = 'เปลี่ยนเป็นโหมดสว่าง (Light Mode)';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      themeToggleBtn.title = 'เปลี่ยนเป็นโหมดมืด (Dark Mode)';
    }
  }

  // ==========================================
  // 2. NAVIGATION & MODE SWITCHING
  // ==========================================
  const btnStudyMode = document.getElementById('btnStudyMode');
  const btnQuizMode = document.getElementById('btnQuizMode');
  const studySection = document.getElementById('studySection');
  const quizSection = document.getElementById('quizSection');
  const brandLogo = document.getElementById('brandLogo');

  const heroTagText = document.getElementById('heroTagText');
  const heroTitle = document.getElementById('heroTitle');
  const heroDesc = document.getElementById('heroDesc');

  function switchMode(mode) {
    if (mode === 'study') {
      btnStudyMode.classList.add('active');
      btnQuizMode.classList.remove('active');
      studySection.style.display = 'block';
      quizSection.style.display = 'none';

      heroTagText.textContent = 'คลังความรู้ชีววิทยา ม.ปลาย & สอบปลายภาค';
      heroTitle.textContent = 'สรุปบทเรียนชีววิทยาเข้มข้น';
      heroDesc.textContent = 'ทบทวนเนื้อหาสำคัญ 3 บทเรียน: ระบบภูมิคุ้มกัน, พันธุศาสตร์ ตอนที่ 1 และ 2 จัดหมวดหมู่ชัดเจน พร้อมตารางและกล่องช่วยจำ';
    } else {
      btnQuizMode.classList.add('active');
      btnStudyMode.classList.remove('active');
      studySection.style.display = 'none';
      quizSection.style.display = 'block';

      heroTagText.textContent = 'คลังข้อสอบวัดระดับ 100+ ข้อ';
      heroTitle.textContent = 'แบบทดสอบชีววิทยาแบบอินเทอร์แอคทีฟ';
      heroDesc.textContent = 'สุ่มโจทย์ฝึกทำชุดละ 10-15 ข้อ ตรวจคำตอบทันทีพร้อมคำอธิบายเฉลยอย่างละเอียดทุกข้อ!';
    }
  }

  btnStudyMode.addEventListener('click', () => switchMode('study'));
  btnQuizMode.addEventListener('click', () => switchMode('quiz'));
  brandLogo.addEventListener('click', () => switchMode('study'));

  // ==========================================
  // 3. STUDY MODE CONTROLLER
  // ==========================================
  const studyTabBtns = document.querySelectorAll('.study-tab-btn');
  const summaryCardsContainer = document.getElementById('summaryCardsContainer');
  let currentStudyChapter = 'immune';

  studyTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      studyTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStudyChapter = btn.dataset.chapter;
      renderStudyContent(currentStudyChapter);
    });
  });

  function renderStudyContent(chapterKey) {
    let dataObj = null;
    if (chapterKey === 'immune') dataObj = window.immuneData;
    else if (chapterKey === 'genetic') dataObj = window.geneticData;
    else if (chapterKey === 'genetic2') dataObj = window.genetic2Data;

    if (!dataObj || !dataObj.summaryContent) {
      summaryCardsContainer.innerHTML = '<p class="error-text">ไม่พบข้อมูลบทเรียน</p>';
      return;
    }

    summaryCardsContainer.innerHTML = '';
    dataObj.summaryContent.forEach(item => {
      const card = document.createElement('article');
      card.className = 'summary-card';
      card.innerHTML = `
        <div class="summary-header">
          <h3>${item.title}</h3>
          ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
        </div>
        <div class="summary-body">
          ${item.content}
        </div>
      `;
      summaryCardsContainer.appendChild(card);
    });
  }

  // Render ข้อมูลบทแรกเริ่มต้น
  renderStudyContent(currentStudyChapter);

  // ==========================================
  // 4. QUIZ MODE CONTROLLER
  // ==========================================
  const quizSetupScreen = document.getElementById('quizSetupScreen');
  const quizActiveScreen = document.getElementById('quizActiveScreen');
  const quizResultScreen = document.getElementById('quizResultScreen');

  const topicSelectBtns = document.querySelectorAll('.topic-select-btn');
  const countBtns = document.querySelectorAll('.count-btn');
  const startQuizBtn = document.getElementById('startQuizBtn');

  const activeTopicBadge = document.getElementById('activeTopicBadge');
  const activeTopicName = document.getElementById('activeTopicName');
  const currentQuestionNum = document.getElementById('currentQuestionNum');
  const totalQuestionsNum = document.getElementById('totalQuestionsNum');
  const quizProgressBar = document.getElementById('quizProgressBar');

  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const explanationContainer = document.getElementById('explanationContainer');
  const expHeader = document.getElementById('expHeader');
  const expTitle = document.getElementById('expTitle');
  const expContent = document.getElementById('expContent');
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');

  // Result Elements
  const resultTrophy = document.getElementById('resultTrophy');
  const resultTitle = document.getElementById('resultTitle');
  const resultSubtitle = document.getElementById('resultSubtitle');
  const finalScoreNum = document.getElementById('finalScoreNum');
  const finalScoreMax = document.getElementById('finalScoreMax');
  const scoreBadge = document.getElementById('scoreBadge');
  const restartQuizBtn = document.getElementById('restartQuizBtn');
  const backToSetupBtn = document.getElementById('backToSetupBtn');
  const reviewItemsList = document.getElementById('reviewItemsList');

  // Quiz State
  let selectedTopic = 'all';
  let selectedCount = 15;
  let activeQuestions = [];
  let currentQuestionIndex = 0;
  let userScore = 0;
  let userAnswersLog = [];
  let isAnswerSubmitted = false;

  // Setup topic selection
  topicSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      topicSelectBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedTopic = btn.dataset.topic;
    });
  });

  // Setup count selection
  countBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      countBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedCount = parseInt(btn.dataset.count, 10);
    });
  });

  // Start Quiz Button
  startQuizBtn.addEventListener('click', startQuiz);
  restartQuizBtn.addEventListener('click', startQuiz);
  backToSetupBtn.addEventListener('click', () => {
    quizResultScreen.style.display = 'none';
    quizActiveScreen.style.display = 'none';
    quizSetupScreen.style.display = 'block';
  });

  function getCombinedQuestionPool(topic) {
    let pool = [];
    if (topic === 'immune') {
      pool = (window.immuneData && window.immuneData.questionBank) ? [...window.immuneData.questionBank] : [];
    } else if (topic === 'genetic') {
      pool = (window.geneticData && window.geneticData.questionBank) ? [...window.geneticData.questionBank] : [];
    } else if (topic === 'genetic2') {
      pool = (window.genetic2Data && window.genetic2Data.questionBank) ? [...window.genetic2Data.questionBank] : [];
    } else {
      // 'all' - รวมทุกบทเข้าด้วยกัน
      const q1 = (window.immuneData && window.immuneData.questionBank) || [];
      const q2 = (window.geneticData && window.geneticData.questionBank) || [];
      const q3 = (window.genetic2Data && window.genetic2Data.questionBank) || [];
      pool = [...q1, ...q2, ...q3];
    }
    return pool;
  }

  // Fisher-Yates Shuffle
  function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startQuiz() {
    const fullPool = getCombinedQuestionPool(selectedTopic);
    if (!fullPool || fullPool.length === 0) {
      alert('ไม่พบข้อสอบในหมวดที่เลือก กรุณาลองใหม่อีกครั้ง');
      return;
    }

    // สุ่มข้อสอบตามจำนวนที่กำหนด
    const shuffledPool = shuffleArray(fullPool);
    const count = Math.min(selectedCount, shuffledPool.length);
    activeQuestions = shuffledPool.slice(0, count);

    // Reset State
    currentQuestionIndex = 0;
    userScore = 0;
    userAnswersLog = [];

    // Setup Topic Badge Text
    const topicLabels = {
      'all': '🌐 รวมทุกบท (Mixed All)',
      'immune': '🛡️ ระบบภูมิคุ้มกัน',
      'genetic': '🧬 พันธุศาสตร์ ตอนที่ 1',
      'genetic2': '🔬 พันธุศาสตร์ ตอนที่ 2'
    };
    activeTopicName.textContent = topicLabels[selectedTopic] || 'แบบทดสอบ';
    totalQuestionsNum.textContent = activeQuestions.length;

    // Show Active Screen, Hide Setup & Result
    quizSetupScreen.style.display = 'none';
    quizResultScreen.style.display = 'none';
    quizActiveScreen.style.display = 'block';

    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    isAnswerSubmitted = false;
    explanationContainer.style.display = 'none';
    nextQuestionBtn.style.display = 'none';

    const q = activeQuestions[currentQuestionIndex];
    currentQuestionNum.textContent = currentQuestionIndex + 1;

    // อัปเดต Progress Bar
    const progressPercent = ((currentQuestionIndex) / activeQuestions.length) * 100;
    quizProgressBar.style.width = `${progressPercent}%`;

    // Render ข้อความคำถาม
    questionText.textContent = `${currentQuestionIndex + 1}. ${q.question}`;

    // Render ตัวเลือก ก, ข, ค, ง
    optionsContainer.innerHTML = '';
    const choiceLabels = ['ก', 'ข', 'ค', 'ง'];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="choice-label">${choiceLabels[idx] || (idx + 1)}</span>
        <span class="choice-text">${optText}</span>
      `;

      btn.addEventListener('click', () => handleOptionClick(idx, btn));
      optionsContainer.appendChild(btn);
    });
  }

  function handleOptionClick(selectedIndex, clickedBtn) {
    if (isAnswerSubmitted) return;
    isAnswerSubmitted = true;

    const q = activeQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.answer;
    const allOptionBtns = optionsContainer.querySelectorAll('.option-btn');

    // บันทึก Log สำหรับหน้าสรุปผล
    userAnswersLog.push({
      question: q.question,
      options: q.options,
      selectedIndex: selectedIndex,
      correctIndex: q.answer,
      isCorrect: isCorrect,
      explanation: q.explanation
    });

    // ปิดปุ่มทั้งหมด
    allOptionBtns.forEach(b => b.classList.add('disabled'));

    if (isCorrect) {
      userScore++;
      clickedBtn.classList.add('correct');
      clickedBtn.querySelector('.choice-label').innerHTML = '<i class="fa-solid fa-check"></i>';
      
      // แสดงกล่องเฉลย
      explanationContainer.className = 'explanation-box correct-exp';
      expHeader.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>ถูกต้องยอดเยี่ยม!</span>';
    } else {
      clickedBtn.classList.add('incorrect');
      clickedBtn.querySelector('.choice-label').innerHTML = '<i class="fa-solid fa-xmark"></i>';
      
      // ไฮไลท์ข้อที่ถูก
      const correctBtn = allOptionBtns[q.answer];
      if (correctBtn) {
        correctBtn.classList.add('correct');
        correctBtn.querySelector('.choice-label').innerHTML = '<i class="fa-solid fa-check"></i>';
      }

      // แสดงกล่องเฉลย
      explanationContainer.className = 'explanation-box incorrect-exp';
      expHeader.innerHTML = '<i class="fa-solid fa-circle-xmark"></i><span>ยังไม่ถูกต้อง</span>';
    }

    expContent.innerHTML = `<strong>คำอธิบาย:</strong> ${q.explanation}`;
    explanationContainer.style.display = 'block';

    // อัปเดตปุ่มถัดไป
    if (currentQuestionIndex === activeQuestions.length - 1) {
      nextQuestionBtn.innerHTML = '<span>ดูผลคะแนนรวม</span> <i class="fa-solid fa-award"></i>';
    } else {
      nextQuestionBtn.innerHTML = '<span>ข้อถัดไป</span> <i class="fa-solid fa-arrow-right"></i>';
    }
    nextQuestionBtn.style.display = 'inline-flex';
  }

  // Next Question Button Click
  nextQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      showQuizResult();
    }
  });

  function showQuizResult() {
    quizProgressBar.style.width = '100%';
    quizActiveScreen.style.display = 'none';
    quizResultScreen.style.display = 'block';

    finalScoreNum.textContent = userScore;
    finalScoreMax.textContent = activeQuestions.length;

    const percentage = Math.round((userScore / activeQuestions.length) * 100);

    // ประเมินผลและมอบ Badge
    if (percentage === 100) {
      resultTrophy.textContent = '👑';
      resultTitle.textContent = 'สมบูรณ์แบบ! ไร้ที่ติ!';
      resultSubtitle.textContent = `คุณทำคะแนนได้ ${userScore} จาก ${activeQuestions.length} ข้อ (${percentage}%)`;
      scoreBadge.textContent = '🌟 Bio Master - อัจฉริยะชีววิทยา';
      scoreBadge.style.backgroundColor = 'var(--primary-light)';
      scoreBadge.style.color = 'var(--primary)';
    } else if (percentage >= 80) {
      resultTrophy.textContent = '🏆';
      resultTitle.textContent = 'ยอดเยี่ยมมาก!';
      resultSubtitle.textContent = `คุณทำคะแนนได้ ${userScore} จาก ${activeQuestions.length} ข้อ (${percentage}%)`;
      scoreBadge.textContent = '🧬 ผ่านเกณฑ์ระดับดีเยี่ยม (เกียรตินิยม)';
      scoreBadge.style.backgroundColor = 'var(--success-bg)';
      scoreBadge.style.color = 'var(--success)';
    } else if (percentage >= 50) {
      resultTrophy.textContent = '👍';
      resultTitle.textContent = 'ผ่านการทดสอบ!';
      resultSubtitle.textContent = `คุณทำคะแนนได้ ${userScore} จาก ${activeQuestions.length} ข้อ (${percentage}%)`;
      scoreBadge.textContent = '📚 ผ่านเกณฑ์มาตรฐาน - ฝึกฝนเพิ่มเพื่อความแม่นยำ';
      scoreBadge.style.backgroundColor = 'var(--warning-bg)';
      scoreBadge.style.color = 'var(--warning-text)';
    } else {
      resultTrophy.textContent = '💪';
      resultTitle.textContent = 'พยายามอีกนิดนะ!';
      resultSubtitle.textContent = `คุณทำคะแนนได้ ${userScore} จาก ${activeQuestions.length} ข้อ (${percentage}%)`;
      scoreBadge.textContent = '📖 แนะนำให้กลับไปอ่านทบทวนในโหมดสรุปเนื้อหา';
      scoreBadge.style.backgroundColor = 'var(--danger-bg)';
      scoreBadge.style.color = 'var(--danger-text)';
    }

    // Render รายการทบทวนข้อสอบ (Review Items)
    reviewItemsList.innerHTML = '';
    const choiceLabels = ['ก', 'ข', 'ค', 'ง'];

    userAnswersLog.forEach((item, idx) => {
      const revDiv = document.createElement('div');
      revDiv.className = `review-item ${item.isCorrect ? 'rev-correct' : 'rev-incorrect'}`;
      
      const yourChoiceText = `${choiceLabels[item.selectedIndex]}. ${item.options[item.selectedIndex] || 'ไม่ได้เลือก'}`;
      const correctChoiceText = `${choiceLabels[item.correctIndex]}. ${item.options[item.correctIndex]}`;

      revDiv.innerHTML = `
        <div class="review-q-title">
          <span>ข้อที่ ${idx + 1}: ${item.question}</span>
        </div>
        <div class="review-answer-line">
          <strong>คำตอบของคุณ:</strong> 
          <span style="color: ${item.isCorrect ? 'var(--success)' : 'var(--danger)'}; font-weight: 600;">
            ${item.isCorrect ? '<i class="fa-solid fa-check"></i> ' : '<i class="fa-solid fa-xmark"></i> '} ${yourChoiceText}
          </span>
        </div>
        ${!item.isCorrect ? `
          <div class="review-answer-line">
            <strong>คำตอบที่ถูกต้อง:</strong> 
            <span style="color: var(--success); font-weight: 600;">
              <i class="fa-solid fa-check"></i> ${correctChoiceText}
            </span>
          </div>
        ` : ''}
        <div class="review-exp">
          <strong>💡 คำอธิบายเฉลย:</strong> ${item.explanation}
        </div>
      `;

      reviewItemsList.appendChild(revDiv);
    });

    // เลื่อนหน้าจอขึ้นบนสุดอย่างนุ่มนวล
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

});
