const labels = {
  en: ["Language", "Download browser", "The decentralized internet deserves its own browser", "Alpha version. May contain bugs."],
  ar: ["اللغة", "تنزيل المتصفح", "الإنترنت اللامركزي يستحق متصفحًا خاصًا به", "نسخة ألفا. قد تحتوي على أخطاء."],
  arz: ["اللغة", "نزّل المتصفح", "الإنترنت اللامركزي يستاهل متصفح مخصوص ليه", "نسخة ألفا. ممكن يكون فيها أخطاء."],
  bn: ["ভাষা", "ব্রাউজার ডাউনলোড করুন", "বিকেন্দ্রীভূত ইন্টারনেটের নিজস্ব একটি ব্রাউজার প্রাপ্য", "আলফা সংস্করণ। এতে ত্রুটি থাকতে পারে।"],
  de: ["Sprache", "Browser herunterladen", "Das dezentrale Internet verdient einen eigenen Browser", "Alpha-Version. Kann Fehler enthalten."],
  es: ["Idioma", "Descargar navegador", "La web descentralizada merece su propio navegador", "Versión alfa. Puede contener errores."],
  fr: ["Langue", "Télécharger le navigateur", "L’Internet décentralisé mérite son propre navigateur", "Version alpha. Peut contenir des bugs."],
  ha: ["Harshe", "Sauke burauzar", "Intanet marar cibiya ta cancanci burauzarta", "Sigar Alpha. Tana iya ƙunsar kurakurai."],
  hi: ["भाषा", "ब्राउज़र डाउनलोड करें", "विकेंद्रीकृत इंटरनेट का अपना ब्राउज़र होना चाहिए", "अल्फ़ा संस्करण। इसमें त्रुटियाँ हो सकती हैं।"],
  id: ["Bahasa", "Unduh peramban", "Internet terdesentralisasi layak punya peramban sendiri", "Versi alfa. Mungkin masih mengandung bug."],
  ja: ["言語", "ブラウザーをダウンロード", "分散型インターネットには専用のブラウザーがふさわしい", "アルファ版です。バグが含まれる可能性があります。"],
  mr: ["भाषा", "ब्राउझर डाउनलोड करा", "विकेंद्रित इंटरनेटसाठी स्वतंत्र ब्राउझर हवा", "अल्फा आवृत्ती. यात त्रुटी असू शकतात."],
  pcm: ["Language", "Download browser", "Decentralized internet deserve browser of im own", "Alpha version. E fit get bugs."],
  pl: ["Język", "Pobierz przeglądarkę", "Zdecentralizowany internet zasługuje na własną przeglądarkę", "Wersja Alpha. Może zawierać błędy."],
  pt: ["Idioma", "Baixar navegador", "A internet descentralizada merece um navegador próprio", "Versão alfa. Pode conter erros."],
  ru: ["Язык", "Скачать браузер", "Децентрализованный интернет заслуживает собственного браузера", "Альфа-версия. Может содержать ошибки."],
  sw: ["Lugha", "Pakua kivinjari", "Intaneti iliyogatuliwa inastahili kivinjari chake", "Toleo la alfa. Linaweza kuwa na hitilafu."],
  te: ["భాష", "బ్రౌజర్‌ను డౌన్‌లోడ్ చేయండి", "వికేంద్రీకృత ఇంటర్నెట్‌కు సొంత బ్రౌజర్ ఉండాలి", "ఆల్ఫా వెర్షన్. ఇందులో లోపాలు ఉండవచ్చు."],
  ur: ["زبان", "براؤزر ڈاؤن لوڈ کریں", "غیر مرکزی انٹرنیٹ اپنے براؤزر کا حق رکھتا ہے", "الفا ورژن۔ اس میں خرابیاں ہو سکتی ہیں۔"],
  vi: ["Ngôn ngữ", "Tải trình duyệt", "Internet phi tập trung xứng đáng có trình duyệt riêng", "Phiên bản alpha. Có thể có lỗi."],
  zh: ["语言", "下载浏览器", "去中心化互联网值得拥有自己的浏览器", "Alpha 版本。可能存在错误。"],
};

const selector = document.getElementById("language");
const article = document.getElementById("manifesto");
const english = document.createDocumentFragment();
english.append(...article.cloneNode(true).childNodes);
const preferenceKey = "perun-ipfs-browser:language";

function applyLanguage(language) {
  const translation = document.getElementById(language);
  const content = translation instanceof HTMLTemplateElement ? translation.content : english;
  const [languageLabel, downloadLabel, tagline, alphaNote] = labels[language];

  document.documentElement.lang = language;
  document.documentElement.dir = translation?.getAttribute("dir") || "ltr";
  document.querySelector('label[for="language"]').textContent = languageLabel;
  document.getElementById("download-label").textContent = downloadLabel;
  document.getElementById("tagline").textContent = tagline;
  document.getElementById("alpha-note").textContent = alphaNote;
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
