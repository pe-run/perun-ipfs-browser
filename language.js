const labels = {
  en: ["Language", "Download browser", "The perfect browser for the day of the Apocalypse."],
  ar: ["اللغة", "تنزيل المتصفح", "المتصفح المثالي ليوم نهاية العالم."],
  arz: ["اللغة", "نزّل المتصفح", "المتصفح المثالي ليوم نهاية العالم."],
  bn: ["ভাষা", "ব্রাউজার ডাউনলোড করুন", "মহাপ্রলয়ের দিনের জন্য আদর্শ ব্রাউজার।"],
  de: ["Sprache", "Browser herunterladen", "Der ideale Browser für den Tag der Apokalypse."],
  es: ["Idioma", "Descargar navegador", "El navegador ideal para el día del Apocalipsis."],
  fr: ["Langue", "Télécharger le navigateur", "Le navigateur idéal pour le jour de l’Apocalypse."],
  ha: ["Harshe", "Sauke burauzar", "Burauzar da ta dace da ranar ƙarshen duniya."],
  hi: ["भाषा", "ब्राउज़र डाउनलोड करें", "प्रलय के दिन के लिए आदर्श ब्राउज़र।"],
  id: ["Bahasa", "Unduh peramban", "Peramban yang ideal untuk hari kiamat."],
  ja: ["言語", "ブラウザーをダウンロード", "世界の終末の日にぴったりのブラウザー。"],
  mr: ["भाषा", "ब्राउझर डाउनलोड करा", "प्रलयाच्या दिवसासाठी आदर्श ब्राउझर."],
  pcm: ["Language", "Download browser", "The perfect browser for the day wey world go end."],
  pl: ["Język", "Pobierz przeglądarkę", "Idealna przeglądarka na dzień Apokalipsy."],
  pt: ["Idioma", "Baixar navegador", "O navegador ideal para o dia do Apocalipse."],
  ru: ["Язык", "Скачать браузер", "Идеальный браузер на день Апокалипсиса."],
  sw: ["Lugha", "Pakua kivinjari", "Kivinjari bora kwa siku ya mwisho wa dunia."],
  te: ["భాష", "బ్రౌజర్‌ను డౌన్‌లోడ్ చేయండి", "ప్రళయ దినానికి సరైన బ్రౌజర్."],
  ur: ["زبان", "براؤزر ڈاؤن لوڈ کریں", "قیامت کے دن کے لیے مثالی براؤزر۔"],
  vi: ["Ngôn ngữ", "Tải trình duyệt", "Trình duyệt lý tưởng cho ngày tận thế."],
  zh: ["语言", "下载浏览器", "末日当天的理想浏览器。"],
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
