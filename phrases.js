
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
{jp:"わかりません",rom:"Wakarimasen",ar:"لا أفهم"},
{jp:"少しだけ",rom:"Sukoshi dake",ar:"فقط قليلاً"},
{jp:"大丈夫です",rom:"Daijōbu desu",ar:"لا بأس"},
{jp:"どういたしまして",rom:"Dō itashimashite",ar:"على الرحب والسعة"},
{jp:"今何時ですか？",rom:"Ima nanji desu ka?",ar:"كم الساعة الآن؟"},
{jp:"すごい！",rom:"Sugoi!",ar:"رائع!"},
{jp:"信じられない",rom:"Shinjirarenai",ar:"لا أصدق"},
{jp:"気をつけて",rom:"Ki o tsukete",ar:"انتبه لنفسك"},
{jp:"お久しぶりです",rom:"Ohisashiburi desu",ar:"طال غيابك"},
{jp:"がんばって！",rom:"Ganbatte!",ar:"بالتوفيق!"},
{jp:"静かにしてください",rom:"Shizuka ni shite kudasai",ar:"من فضلك، كن هادئاً"},
{jp:"写真を撮ってもいいですか？",rom:"Shashin o totte mo ii desu ka?",ar:"هل يمكنني التقاط صورة؟"},
{jp:"はい、どうぞ",rom:"Hai, dōzo",ar:"نعم، تفضل"},
{jp:"いいえ、だめです",rom:"Iie, dame desu",ar:"لا، لا يمكن"},
{jp:"いくらですか？",rom:"Ikura desu ka?",ar:"كم السعر؟"},
{jp:"高いですね",rom:"Takai desu ne",ar:"إنه غالٍ"},
{jp:"安いですね",rom:"Yasui desu ne",ar:"إنه رخيص"},
{jp:"お腹がすきました",rom:"Onaka ga sukimashita",ar:"أنا جائع"},
{jp:"のどが渇きました",rom:"Nodo ga kawakimashita",ar:"أنا عطشان"},
{jp:"トイレはどこですか？",rom:"Toire wa doko desu ka?",ar:"أين دورة المياه؟"},
{jp:"気分が悪いです",rom:"Kibun ga warui desu",ar:"أشعر بالتعب"},
{jp:"お医者さんを呼んでください",rom:"Oishasan o yonde kudasai",ar:"من فضلك، نادِ الطبيب"},
{jp:"日本語を話せますか？",rom:"Nihongo o hanasemasu ka?",ar:"هل تتحدث اليابانية؟"},
{jp:"英語を話せますか？",rom:"Eigo o hanasemasu ka?",ar:"هل تتحدث الإنجليزية؟"},
{jp:"私はアラビア語を話します",rom:"Watashi wa Arabia-go o hanashimasu",ar:"أنا أتكلم العربية"},
{jp:"電車はどこですか？",rom:"Densha wa doko desu ka?",ar:"أين القطار؟"},
{jp:"この道はどこへ行きますか？",rom:"Kono michi wa doko e ikimasu ka?",ar:"إلى أين يؤدي هذا الطريق؟"},
{jp:"道に迷いました",rom:"Michi ni mayoimashita",ar:"لقد ضللت الطريق"},
{jp:"警察を呼んでください",rom:"Keisatsu o yonde kudasai",ar:"من فضلك، اتصل بالشرطة"},
{jp:"火事です！",rom:"Kaji desu!",ar:"إنه حريق!"},
{jp:"泥棒！",rom:"Dorobō!",ar:"لص!"},
{jp:"財布をなくしました",rom:"Saifu o nakushimashita",ar:"فقدت محفظتي"},
{jp:"パスポートをなくしました",rom:"Pasupōto o nakushimashita",ar:"فقدت جواز سفري"},
{jp:"ゆっくり話してください",rom:"Yukkuri hanashite kudasai",ar:"من فضلك، تحدث ببطء"},
{jp:"もう一度お願いします",rom:"Mō ichido onegaishimasu",ar:"من فضلك، مرة أخرى"},
{jp:"ちょっと待ってください",rom:"Chotto matte kudasai",ar:"انتظر قليلاً"},
{jp:"今行きます",rom:"Ima ikimasu",ar:"أنا قادم الآن"},
{jp:"また明日",rom:"Mata ashita",ar:"أراك غداً"},
{jp:"気にしないで",rom:"Ki ni shinaide",ar:"لا تهتم"},
{jp:"行ってきます",rom:"Ittekimasu",ar:"سأذهب الآن"},
{jp:"行ってらっしゃい",rom:"Itterasshai",ar:"في أمان الله"},
{jp:"ただいま",rom:"Tadaima",ar:"لقد عدت"},
{jp:"おかえりなさい",rom:"Okaerinasai",ar:"مرحباً بعودتك"},
{jp:"何時に帰りますか？",rom:"Nanji ni kaerimasu ka?",ar:"متى ستعود؟"},
{jp:"電気を消してください",rom:"Denki o keshite kudasai",ar:"من فضلك، أطفئ النور"},
{jp:"窓を開けてください",rom:"Mado o akete kudasai",ar:"افتح النافذة من فضلك"},
{jp:"いい天気ですね",rom:"Ii tenki desu ne",ar:"الجو جميل أليس كذلك؟"},
{jp:"雨が降っています",rom:"Ame ga futteimasu",ar:"إنها تمطر"},
{jp:"寒いですね",rom:"Samui desu ne",ar:"الجو بارد"},
{jp:"暑いですね",rom:"Atsui desu ne",ar:"الجو حار"},
{jp:"風が強いです",rom:"Kaze ga tsuyoi desu",ar:"الرياح قوية"},
{jp:"雪が降っています",rom:"Yuki ga futteimasu",ar:"إنها تثلج"},
const phrases = [
  {jp:"こんにちは",rom:"Konnichiwa",ar:"مرحباً"},
  {jp:"ありがとう",rom:"Arigatou",ar:"شكراً"},
  {jp:"さようなら",rom:"Sayounara",ar:"وداعاً"},
  {jp:"おはようございます",rom:"Ohayou gozaimasu",ar:"صباح الخير"},
  {jp:"こんばんは",rom:"Konbanwa",ar:"مساء الخير"},
  {jp:"すみません",rom:"Sumimasen",ar:"عذراً / المعذرة"},
  {jp:"はい",rom:"Hai",ar:"نعم"},
  {jp:"いいえ",rom:"Iie",ar:"لا"},
  {jp:"お願いします",rom:"Onegaishimasu",ar:"من فضلك"},
  {jp:"わかりました",rom:"Wakarimashita",ar:"فهمت"},
  {jp:"助けてください",rom:"Tasukete kudasai",ar:"ساعدني من فضلك"},
  {jp:"名前は何ですか？",rom:"Namae wa nan desu ka?",ar:"ما اسمك؟"},
  {jp:"元気ですか？",rom:"Genki desu ka?",ar:"كيف حالك؟"},
  {jp:"私は元気です",rom:"Watashi wa genki desu",ar:"أنا بخير"},
  {jp:"これは何ですか？",rom:"Kore wa nan desu ka?",ar:"ما هذا؟"},
  {jp:"お元気で",rom:"Ogenki de",ar:"مع السلامة"},
  {jp:"また会いましょう",rom:"Mata aimashou",ar:"إلى اللقاء"},
  {jp:"お誕生日おめでとう",rom:"Otanjoubi omedetou",ar:"عيد ميلاد سعيد"},
  {jp:"いただきます",rom:"Itadakimasu",ar:"دعاء قبل الأكل"},
  {jp:"ごちそうさまでした",rom:"Gochisousama deshita",ar:"شكراً على الطعام"},
  {jp:"わかりません",rom:"Wakarimasen",ar:"لا أفهم"},
  {jp:"少しだけ",rom:"Sukoshi dake",ar:"فقط قليلاً"},
  {jp:"大丈夫です",rom:"Daijoubu desu",ar:"لا بأس"},
  {jp:"どういたしまして",rom:"Dou itashimashite",ar:"على الرحب والسعة"},
  {jp:"今何時ですか？",rom:"Ima nanji desu ka?",ar:"كم الساعة؟"},
  {jp:"すごい！",rom:"Sugoi!",ar:"رائع!"},
  {jp:"信じられない",rom:"Shinjirarenai",ar:"لا أصدق!"},
  {jp:"気をつけて",rom:"Ki o tsukete",ar:"انتبه لنفسك"},
  {jp:"お久しぶりです",rom:"Ohisashiburi desu",ar:"مر وقت طويل!"},
  {jp:"がんばって！",rom:"Ganbatte!",ar:"بالتوفيق!"},
  {jp:"静かにしてください",rom:"Shizuka ni shite kudasai",ar:"من فضلك، كن هادئاً"},
  {jp:"写真を撮ってもいいですか？",rom:"Shashin o totte mo ii desu ka?",ar:"هل يمكنني التقاط صورة؟"},
  {jp:"はい、どうぞ",rom:"Hai, douzo",ar:"نعم، تفضل"},
  {jp:"いいえ、だめです",rom:"Iie, dame desu",ar:"لا، لا يمكن"},
  {jp:"いくらですか？",rom:"Ikura desu ka?",ar:"كم السعر؟"},
  {jp:"高いですね",rom:"Takai desu ne",ar:"إنه غالٍ"},
  {jp:"安いですね",rom:"Yasui desu ne",ar:"إنه رخيص"},
  {jp:"お腹がすきました",rom:"Onaka ga sukimashita",ar:"أنا جائع"},
  {jp:"のどが渇きました",rom:"Nodo ga kawakimashita",ar:"أنا عطشان"},
  {jp:"トイレはどこですか？",rom:"Toire wa doko desu ka?",ar:"أين دورة المياه؟"},
  {jp:"気分が悪いです",rom:"Kibun ga warui desu",ar:"أشعر بالتعب"},
  {jp:"お医者さんを呼んでください",rom:"Oishasan o yonde kudasai",ar:"من فضلك، نادِ الطبيب"},
  {jp:"火事です！",rom:"Kaji desu!",ar:"حريق!"},
  {jp:"泥棒！",rom:"Dorobou!",ar:"لص!"},
  {jp:"財布をなくしました",rom:"Saifu o nakushimashita",ar:"فقدت محفظتي"},
  {jp:"パスポートをなくしました",rom:"Pasupooto o nakushimashita",ar:"فقدت جواز سفري"},
  {jp:"ゆっくり話してください",rom:"Yukkuri hanashite kudasai",ar:"تحدث ببطء من فضلك"},
  {jp:"もう一度お願いします",rom:"Mou ichido onegaishimasu",ar:"مرة أخرى من فضلك"},
  {jp:"ちょっと待ってください",rom:"Chotto matte kudasai",ar:"انتظر لحظة من فضلك"},
  {jp:"今行きます",rom:"Ima ikimasu",ar:"سآتي الآن"},
  {jp:"また明日",rom:"Mata ashita",ar:"أراك غداً"},
  {jp:"気にしないで",rom:"Ki ni shinaide",ar:"لا تهتم"},
  {jp:"行ってきます",rom:"Ittekimasu",ar:"أنا ذاهب الآن"},
  {jp:"行ってらっしゃい",rom:"Itterasshai",ar:"اذهب وعد بالسلامة"},
  {jp:"ただいま",rom:"Tadaima",ar:"لقد عدت"},
  {jp:"おかえりなさい",rom:"Okaerinasai",ar:"مرحباً بعودتك"},
  {jp:"電気を消してください",rom:"Denki o keshite kudasai",ar:"من فضلك، أطفئ الضوء"},
  {jp:"窓を開けてください",rom:"Mado o akete kudasai",ar:"من فضلك، افتح النافذة"},
  {jp:"いい天気ですね",rom:"Ii tenki desu ne",ar:"الجو جميل، أليس كذلك؟"},
  {jp:"雨が降っています",rom:"Ame ga futteimasu",ar:"إنها تمطر"},
  {jp:"寒いですね",rom:"Samui desu ne",ar:"الجو بارد، أليس كذلك؟"},
  {jp:"暑いですね",rom:"Atsui desu ne",ar:"الجو حار، أليس كذلك؟"},
  {jp:"風が強いです",rom:"Kaze ga tsuyoi desu",ar:"الرياح قوية"},
  {jp:"雪が降っています",rom:"Yuki ga futteimasu",ar:"إنها تثلج"}
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
