const phrases = [
  { jp: "こんにちは", rom: "Konnichiwa", ar: "مرحباً" },
  { jp: "ありがとう", rom: "Arigatou", ar: "شكراً" },
  { jp: "おはようございます", rom: "Ohayou gozaimasu", ar: "صباح الخير" },
  { jp: "こんばんは", rom: "Konbanwa", ar: "مساء الخير" },
  { jp: "さようなら", rom: "Sayounara", ar: "إلى اللقاء" },
  { jp: "おやすみなさい", rom: "Oyasuminasai", ar: "تصبح على خير" },
  { jp: "すみません", rom: "Sumimasen", ar: "عذراً / لو سمحت" },
  { jp: "はい", rom: "Hai", ar: "نعم" },
  { jp: "いいえ", rom: "Iie", ar: "لا" },
  { jp: "わかります", rom: "Wakarimasu", ar: "أفهم" },
  { jp: "わかりません", rom: "Wakarimasen", ar: "لا أفهم" },
  { jp: "日本語が少し話せます", rom: "Nihongo ga sukoshi hanasemasu", ar: "أستطيع التحدث باليابانية قليلاً" },
  { jp: "これはいくらですか？", rom: "Kore wa ikura desu ka?", ar: "كم سعر هذا؟" },
  { jp: "トイレはどこですか？", rom: "Toire wa doko desu ka?", ar: "أين دورة المياه؟" },
  { jp: "助けてください！", rom: "Tasukete kudasai!", ar: "النجدة!" },
  { jp: "お願いします", rom: "Onegaishimasu", ar: "من فضلك" },
  { jp: "初めまして", rom: "Hajimemashite", ar: "تشرفت بلقائك" },
  { jp: "どういたしまして", rom: "Dou itashimashite", ar: "على الرحب والسعة" },
  { jp: "元気ですか？", rom: "Genki desu ka?", ar: "هل أنت بخير؟" },
  { jp: "元気です", rom: "Genki desu", ar: "أنا بخير" },
  { jp: "こんにちは", rom: "Konnichiwa", ar: "مرحباً" },
  { jp: "ありがとう", rom: "Arigatou", ar: "شكراً" },
  { jp: "おはようございます", rom: "Ohayou gozaimasu", ar: "صباح الخير" },
  { jp: "こんばんは", rom: "Konbanwa", ar: "مساء الخير" },
  { jp: "さようなら", rom: "Sayounara", ar: "إلى اللقاء" },
  { jp: "おやすみなさい", rom: "Oyasuminasai", ar: "تصبح على خير" },
  { jp: "すみません", rom: "Sumimasen", ar: "عذراً / لو سمحت" },
  { jp: "はい", rom: "Hai", ar: "نعم" },
  { jp: "いいえ", rom: "Iie", ar: "لا" },
  { jp: "わかります", rom: "Wakarimasu", ar: "أفهم" },
  { jp: "わかりません", rom: "Wakarimasen", ar: "لا أفهم" },
  { jp: "日本語が少し話せます", rom: "Nihongo ga sukoshi hanasemasu", ar: "أستطيع التحدث باليابانية قليلاً" },
  { jp: "これはいくらですか？", rom: "Kore wa ikura desu ka?", ar: "كم سعر هذا؟" },
  { jp: "トイレはどこですか？", rom: "Toire wa doko desu ka?", ar: "أين دورة المياه؟" },
  { jp: "助けてください！", rom: "Tasukete kudasai!", ar: "النجدة!" },
  { jp: "お願いします", rom: "Onegaishimasu", ar: "من فضلك" },
  { jp: "初めまして", rom: "Hajimemashite", ar: "تشرفت بلقائك" },
  { jp: "どういたしまして", rom: "Dou itashimashite", ar: "على الرحب والسعة" },
  { jp: "元気ですか？", rom: "Genki desu ka?", ar: "هل أنت بخير؟" },
  { jp: "元気です", rom: "Genki desu", ar: "أنا بخير" },
  { jp: "こんにちは", rom: "Konnichiwa", ar: "مرحباً" },
  { jp: "ありがとう", rom: "Arigatou", ar: "شكراً" },
  { jp: "おはようございます", rom: "Ohayou gozaimasu", ar: "صباح الخير" },
  { jp: "こんばんは", rom: "Konbanwa", ar: "مساء الخير" },
  { jp: "さようなら", rom: "Sayounara", ar: "إلى اللقاء" },
  { jp: "おやすみなさい", rom: "Oyasuminasai", ar: "تصبح على خير" },
  { jp: "すみません", rom: "Sumimasen", ar: "عذراً / لو سمحت" },
  { jp: "はい", rom: "Hai", ar: "نعم" },
  { jp: "いいえ", rom: "Iie", ar: "لا" },
  { jp: "わかります", rom: "Wakarimasu", ar: "أفهم" },
  { jp: "わかりません", rom: "Wakarimasen", ar: "لا أفهم" },
  { jp: "日本語が少し話せます", rom: "Nihongo ga sukoshi hanasemasu", ar: "أستطيع التحدث باليابانية قليلاً" },
  { jp: "これはいくらですか？", rom: "Kore wa ikura desu ka?", ar: "كم سعر هذا؟" },
  { jp: "トイレはどこですか？", rom: "Toire wa doko desu ka?", ar: "أين دورة المياه؟" },
  { jp: "助けてください！", rom: "Tasukete kudasai!", ar: "النجدة!" },
  { jp: "お願いします", rom: "Onegaishimasu", ar: "من فضلك" },
  { jp: "初めまして", rom: "Hajimemashite", ar: "تشرفت بلقائك" },
  { jp: "どういたしまして", rom: "Dou itashimashite", ar: "على الرحب والسعة" },
  { jp: "元気ですか？", rom: "Genki desu ka?", ar: "هل أنت بخير؟" },
  { jp: "元気です", rom: "Genki desu", ar: "أنا بخير" },
  { jp: "こんにちは", rom: "Konnichiwa", ar: "مرحباً" },
  { jp: "ありがとう", rom: "Arigatou", ar: "شكراً" },
  { jp: "おはようございます", rom: "Ohayou gozaimasu", ar: "صباح الخير" },
  { jp: "こんばんは", rom: "Konbanwa", ar: "مساء الخير" },
  { jp: "さようなら", rom: "Sayounara", ar: "إلى اللقاء" },
  { jp: "おやすみなさい", rom: "Oyasuminasai", ar: "تصبح على خير" },
  { jp: "すみません", rom: "Sumimasen", ar: "عذراً / لو سمحت" },
  { jp: "はい", rom: "Hai", ar: "نعم" },
  { jp: "いいえ", rom: "Iie", ar: "لا" },
  { jp: "わかります", rom: "Wakarimasu", ar: "أفهم" },
  { jp: "わかりません", rom: "Wakarimasen", ar: "لا أفهم" },
  { jp: "日本語が少し話せます", rom: "Nihongo ga sukoshi hanasemasu", ar: "أستطيع التحدث باليابانية قليلاً" },
  { jp: "これはいくらですか？", rom: "Kore wa ikura desu ka?", ar: "كم سعر هذا؟" },
  { jp: "トイレはどこですか？", rom: "Toire wa doko desu ka?", ar: "أين دورة المياه؟" },
  { jp: "助けてください！", rom: "Tasukete kudasai!", ar: "النجدة!" },
  { jp: "お願いします", rom: "Onegaishimasu", ar: "من فضلك" },
  { jp: "初めまして", rom: "Hajimemashite", ar: "تشرفت بلقائك" },
  { jp: "どういたしまして", rom: "Dou itashimashite", ar: "على الرحب والسعة" },
  { jp: "元気ですか？", rom: "Genki desu ka?", ar: "هل أنت بخير؟" },
  { jp: "元気です", rom: "Genki desu", ar: "أنا بخير" },
  { jp: "こんにちは", rom: "Konnichiwa", ar: "مرحباً" },
  { jp: "ありがとう", rom: "Arigatou", ar: "شكراً" },
  { jp: "おはようございます", rom: "Ohayou gozaimasu", ar: "صباح الخير" },
  { jp: "こんばんは", rom: "Konbanwa", ar: "مساء الخير" },
  { jp: "さようなら", rom: "Sayounara", ar: "إلى اللقاء" },
  { jp: "おやすみなさい", rom: "Oyasuminasai", ar: "تصبح على خير" },
  { jp: "すみません", rom: "Sumimasen", ar: "عذراً / لو سمحت" },
  { jp: "はい", rom: "Hai", ar: "نعم" },
  { jp: "いいえ", rom: "Iie", ar: "لا" },
  { jp: "わかります", rom: "Wakarimasu", ar: "أفهم" },
  { jp: "わかりません", rom: "Wakarimasen", ar: "لا أفهم" },
  { jp: "日本語が少し話せます", rom: "Nihongo ga sukoshi hanasemasu", ar: "أستطيع التحدث باليابانية قليلاً" },
  { jp: "これはいくらですか？", rom: "Kore wa ikura desu ka?", ar: "كم سعر هذا؟" },
  { jp: "トイレはどこですか？", rom: "Toire wa doko desu ka?", ar: "أين دورة المياه؟" },
  { jp: "助けてください！", rom: "Tasukete kudasai!", ar: "النجدة!" },
  { jp: "お願いします", rom: "Onegaishimasu", ar: "من فضلك" },
  { jp: "初めまして", rom: "Hajimemashite", ar: "تشرفت بلقائك" },
  { jp: "どういたしまして", rom: "Dou itashimashite", ar: "على الرحب والسعة" },
  { jp: "元気ですか？", rom: "Genki desu ka?", ar: "هل أنت بخير؟" },
  { jp: "元気です", rom: "Genki desu", ar: "أنا بخير" },
  { jp: "お名前は何ですか？", rom: "Onamae wa nan desu ka?", ar: "ما اسمك؟" },
  { jp: "私はアリです", rom: "Watashi wa Ali desu", ar: "أنا اسمي علي" },
  { jp: "どこから来ましたか？", rom: "Doko kara kimashita ka?", ar: "من أين أتيت؟" },
  { jp: "サウジアラビアから来ました", rom: "Saujiarabia kara kimashita", ar: "أتيت من السعودية" },
  { jp: "趣味は何ですか？", rom: "Shumi wa nan desu ka?", ar: "ما هوايتك؟" },
  { jp: "私の趣味は読書です", rom: "Watashi no shumi wa dokusho desu", ar: "هوايتي هي القراءة" },
  { jp: "これは日本語で何と言いますか？", rom: "Kore wa Nihongo de nan to iimasu ka?", ar: "كيف يُقال هذا باليابانية؟" },
  { jp: "写真を撮ってもいいですか？", rom: "Shashin wo totte mo ii desu ka?", ar: "هل يمكنني التقاط صورة؟" },
  { jp: "ゆっくり話してください", rom: "Yukkuri hanashite kudasai", ar: "رجاءً تحدث ببطء" },
  { jp: "もう一度言ってください", rom: "Mou ichido itte kudasai", ar: "قلها مرة أخرى من فضلك" },
  { jp: "英語を話せますか？", rom: "Eigo wo hanasemasu ka?", ar: "هل تتحدث الإنجليزية؟" },
  { jp: "ちょっと待ってください", rom: "Chotto matte kudasai", ar: "انتظر قليلاً من فضلك" },
  { jp: "分かりました", rom: "Wakarimashita", ar: "فهمت" },
  { jp: "お誕生日おめでとうございます", rom: "Otanjoubi omedetou gozaimasu", ar: "عيد ميلاد سعيد" },
  { jp: "これはとてもおいしいです", rom: "Kore wa totemo oishii desu", ar: "هذا لذيذ جداً" },
  { jp: "水をください", rom: "Mizu wo kudasai", ar: "من فضلك ماء" },
  { jp: "電車はどこですか？", rom: "Densha wa doko desu ka?", ar: "أين القطار؟" },
  { jp: "病院へ行きたいです", rom: "Byouin e ikitai desu", ar: "أريد الذهاب إلى المستشفى" },
  { jp: "気をつけてください", rom: "Ki wo tsukete kudasai", ar: "انتبه لنفسك" },
  { jp: "ごめんなさい", rom: "Gomen nasai", ar: "أنا آسف" },
  { jp: "問題ありません", rom: "Mondai arimasen", ar: "لا توجد مشكلة" },
  { jp: "私たちは友達です", rom: "Watashitachi wa tomodachi desu", ar: "نحن أصدقاء" },
  { jp: "一緒に行きましょう", rom: "Issho ni ikimashou", ar: "لنذهب معاً" },
  { jp: "いい考えですね", rom: "Ii kangae desu ne", ar: "فكرة جيدة" },
  { jp: "気にしないでください", rom: "Ki ni shinaide kudasai", ar: "لا تقلق" },
  { jp: "静かにしてください", rom: "Shizuka ni shite kudasai", ar: "من فضلك كن هادئاً" },
  { jp: "始めましょう", rom: "Hajimemashou", ar: "هيا نبدأ" },
  { jp: "終わりました", rom: "Owarimashita", ar: "انتهيت" },
  { jp: "お疲れ様です", rom: "Otsukaresama desu", ar: "عمل رائع / شكراً على مجهودك" },
  { jp: "今何時ですか？", rom: "Ima nanji desu ka?", ar: "كم الساعة الآن؟" },
  { jp: "今日は何日ですか？", rom: "Kyou wa nannichi desu ka?", ar: "ما تاريخ اليوم؟" },
  { jp: "いい天気ですね", rom: "Ii tenki desu ne", ar: "الجو جميل، أليس كذلك؟" },
  { jp: "寒いですね", rom: "Samui desu ne", ar: "إنه بارد، أليس كذلك؟" },
  { jp: "暑いですね", rom: "Atsui desu ne", ar: "إنه حار، أليس كذلك؟" },
  { jp: "どうしましたか？", rom: "Dou shimashita ka?", ar: "ما الأمر؟" },
  { jp: "大丈夫ですか？", rom: "Daijoubu desu ka?", ar: "هل أنت بخير؟" },
  { jp: "お腹がすきました", rom: "Onaka ga sukimashita", ar: "أنا جائع" },
  { jp: "眠いです", rom: "Nemui desu", ar: "أشعر بالنعاس" },
  { jp: "疲れました", rom: "Tsukaremashita", ar: "أنا متعب" },
  { jp: "勉強しましょう", rom: "Benkyou shimashou", ar: "لنذاكر" },
  { jp: "頑張ってください", rom: "Ganbatte kudasai", ar: "بالتوفيق / ابذل جهدك" },
  { jp: "気分が悪いです", rom: "Kibun ga warui desu", ar: "أشعر أنني لست بخير" },
  { jp: "先生、質問があります", rom: "Sensei, shitsumon ga arimasu", ar: "يا أستاذ، لدي سؤال" },
  { jp: "ここに座ってもいいですか？", rom: "Koko ni suwatte mo ii desu ka?", ar: "هل يمكنني الجلوس هنا؟" },
  { jp: "静かにしていただけますか？", rom: "Shizuka ni shite itadakemasu ka?", ar: "هل يمكنك أن تكون هادئاً؟" },
  { jp: "何をしていますか？", rom: "Nani wo shiteimasu ka?", ar: "ماذا تفعل؟" },
  { jp: "旅行が好きです", rom: "Ryokou ga suki desu", ar: "أحب السفر" },
  { jp: "音楽を聞くのが好きです", rom: "Ongaku wo kiku no ga suki desu", ar: "أحب الاستماع للموسيقى" },
  { jp: "映画を見るのが好きです", rom: "Eiga wo miru no ga suki desu", ar: "أحب مشاهدة الأفلام" }
];

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
