
const phrases = [...]; // المحتوى الكامل تم تضمينه مسبقًا كما في المحادثة السابقة

let index = -1;
const phraseDiv = document.getElementById('phrase');
const counterDiv = document.getElementById('counter');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const repeatBtn = document.getElementById('repeatBtn');

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  speechSynthesis.speak(utterance);
}

function showPhrase(i) {
  const { jp, rom, ar } = phrases[i];
  phraseDiv.innerHTML = `<div><span style="font-size:2rem;">${jp}</span><br/><em>${rom}</em><br/><strong>${ar}</strong></div>`;
  counterDiv.textContent = `الجملة ${i + 1} من ${phrases.length}`;
  speak(jp);
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % phrases.length;
  showPhrase(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + phrases.length) % phrases.length;
  showPhrase(index);
});

repeatBtn.addEventListener('click', () => {
  if (index >= 0) showPhrase(index);
});
