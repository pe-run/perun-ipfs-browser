const labels = {
  en: ["Language", "Download browser", "The perfect browser for the day the centralized internet goes into lockdown"],
  ar: ["اللغة", "تنزيل المتصفح", "المتصفح المثالي ليوم إغلاق الإنترنت المركزي"],
  arz: ["اللغة", "نزّل المتصفح", "المتصفح المثالي ليوم ما الإنترنت المركزي يتقفل"],
  bn: ["ভাষা", "ব্রাউজার ডাউনলোড করুন", "কেন্দ্রীভূত ইন্টারনেটে অবরোধের দিনের জন্য আদর্শ ব্রাউজার"],
  de: ["Sprache", "Browser herunterladen", "Der ideale Browser für den Tag, an dem das zentralisierte Internet abgeriegelt wird"],
  es: ["Idioma", "Descargar navegador", "El navegador ideal para el día en que se cierre el acceso a la internet centralizada"],
  fr: ["Langue", "Télécharger le navigateur", "Le navigateur idéal pour le jour où l’Internet centralisé sera verrouillé"],
  ha: ["Harshe", "Sauke burauzar", "Burauzar da ta dace da ranar da za a kulle intanet mai cibiya guda"],
  hi: ["भाषा", "ब्राउज़र डाउनलोड करें", "केंद्रीकृत इंटरनेट की तालाबंदी के दिन के लिए आदर्श ब्राउज़र"],
  id: ["Bahasa", "Unduh peramban", "Peramban yang ideal untuk hari ketika internet terpusat dikunci"],
  ja: ["言語", "ブラウザーをダウンロード", "中央集権型インターネットが封鎖される日のためのブラウザー"],
  mr: ["भाषा", "ब्राउझर डाउनलोड करा", "केंद्रीकृत इंटरनेटवर टाळेबंदी होईल त्या दिवसासाठी आदर्श ब्राउझर"],
  pcm: ["Language", "Download browser", "The perfect browser for the day dem go lock down the centralized internet"],
  pl: ["Język", "Pobierz przeglądarkę", "Idealna przeglądarka na dzień lockdownu scentralizowanego internetu"],
  pt: ["Idioma", "Baixar navegador", "O navegador ideal para o dia em que a internet centralizada for bloqueada"],
  ru: ["Язык", "Скачать браузер", "Идеальный браузер на день блокировки централизованного интернета"],
  sw: ["Lugha", "Pakua kivinjari", "Kivinjari bora kwa siku ambayo mtandao unaotegemea kituo kimoja utafungiwa"],
  te: ["భాష", "బ్రౌజర్‌ను డౌన్‌లోడ్ చేయండి", "కేంద్రీకృత ఇంటర్నెట్‌ను నిర్బంధించే రోజుకు తగిన బ్రౌజర్"],
  ur: ["زبان", "براؤزر ڈاؤن لوڈ کریں", "مرکزی انٹرنیٹ کے لاک ڈاؤن کے دن کے لیے مثالی براؤزر"],
  vi: ["Ngôn ngữ", "Tải trình duyệt", "Trình duyệt lý tưởng cho ngày Internet tập trung bị phong tỏa"],
  zh: ["语言", "下载浏览器", "中心化互联网封锁之日的理想浏览器"],
};

const selector = document.getElementById("language");
const article = document.getElementById("manifesto");
const english = document.createDocumentFragment();
english.append(...article.cloneNode(true).childNodes);
const preferenceKey = "perun-ipfs-browser:language";

function applyLanguage(language) {
  const translation = document.getElementById(language);
  const content = translation instanceof HTMLTemplateElement ? translation.content : english;
  const [languageLabel, downloadLabel, tagline] = labels[language];

  document.documentElement.lang = language;
  document.documentElement.dir = translation?.getAttribute("dir") || "ltr";
  document.querySelector('label[for="language"]').textContent = languageLabel;
  document.getElementById("download-label").textContent = downloadLabel;
  document.getElementById("tagline").textContent = tagline;
  article.replaceChildren(content.cloneNode(true));
  selector.value = language;
}

const locale = (navigator.language || "en").toLowerCase();
const primaryLanguage = locale.split("-")[0];
const languageAliases = { cmn: "zh", arb: "ar", in: "id" };
const detected = /^ar-eg(?:-|$)/.test(locale)
  ? "arz"
  : (languageAliases[primaryLanguage] ?? primaryLanguage);

let saved;
try {
  saved = localStorage.getItem(preferenceKey);
} catch {
  // Language selection also works when browser storage is disabled.
}

const initialLanguage = Object.hasOwn(labels, saved) ? saved : detected;
applyLanguage(Object.hasOwn(labels, initialLanguage) ? initialLanguage : "en");
selector.closest(".language-control").hidden = false;
selector.addEventListener("change", () => {
  applyLanguage(selector.value);
  try {
    localStorage.setItem(preferenceKey, selector.value);
  } catch {
    // Keep the selected language for this page.
  }
});
