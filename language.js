const labels = {
  en: ["Language", "Download browser", "The decentralized internet deserves its own browser"],
  ar: ["اللغة", "تنزيل المتصفح", "الإنترنت اللامركزي يستحق متصفحًا خاصًا به"],
  arz: ["اللغة", "نزّل المتصفح", "الإنترنت اللامركزي يستاهل متصفح مخصوص ليه"],
  bn: ["ভাষা", "ব্রাউজার ডাউনলোড করুন", "বিকেন্দ্রীভূত ইন্টারনেটের নিজস্ব একটি ব্রাউজার প্রাপ্য"],
  de: ["Sprache", "Browser herunterladen", "Das dezentrale Internet verdient einen eigenen Browser"],
  es: ["Idioma", "Descargar navegador", "La web descentralizada merece su propio navegador"],
  fr: ["Langue", "Télécharger le navigateur", "L’Internet décentralisé mérite son propre navigateur"],
  ha: ["Harshe", "Sauke burauzar", "Intanet marar cibiya ta cancanci burauzarta"],
  hi: ["भाषा", "ब्राउज़र डाउनलोड करें", "विकेंद्रीकृत इंटरनेट का अपना ब्राउज़र होना चाहिए"],
  id: ["Bahasa", "Unduh peramban", "Internet terdesentralisasi layak punya peramban sendiri"],
  ja: ["言語", "ブラウザーをダウンロード", "分散型インターネットには専用のブラウザーがふさわしい"],
  mr: ["भाषा", "ब्राउझर डाउनलोड करा", "विकेंद्रित इंटरनेटसाठी स्वतंत्र ब्राउझर हवा"],
  pcm: ["Language", "Download browser", "Decentralized internet deserve browser of im own"],
  pl: ["Język", "Pobierz przeglądarkę", "Zdecentralizowany internet zasługuje na własną przeglądarkę"],
  pt: ["Idioma", "Baixar navegador", "A internet descentralizada merece um navegador próprio"],
  ru: ["Язык", "Скачать браузер", "Децентрализованный интернет заслуживает собственного браузера"],
  sw: ["Lugha", "Pakua kivinjari", "Intaneti iliyogatuliwa inastahili kivinjari chake"],
  te: ["భాష", "బ్రౌజర్‌ను డౌన్‌లోడ్ చేయండి", "వికేంద్రీకృత ఇంటర్నెట్‌కు సొంత బ్రౌజర్ ఉండాలి"],
  ur: ["زبان", "براؤزر ڈاؤن لوڈ کریں", "غیر مرکزی انٹرنیٹ اپنے براؤزر کا حق رکھتا ہے"],
  vi: ["Ngôn ngữ", "Tải trình duyệt", "Internet phi tập trung xứng đáng có trình duyệt riêng"],
  zh: ["语言", "下载浏览器", "去中心化互联网值得拥有自己的浏览器"],
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
