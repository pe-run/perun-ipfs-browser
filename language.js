const labels = {
  en: ["Language", "Download browser", "The decentralized internet deserves its own browser", "Alpha version. May contain bugs.", "Technology and license", "Source code", "built-in Node.js module", "MIT license"],
  ar: ["اللغة", "تنزيل المتصفح", "الإنترنت اللامركزي يستحق متصفحًا خاصًا به", "نسخة ألفا. قد تحتوي على أخطاء.", "التقنيات والترخيص", "الشيفرة المصدرية", "وحدة مدمجة في Node.js", "ترخيص MIT"],
  arz: ["اللغة", "نزّل المتصفح", "الإنترنت اللامركزي يستاهل متصفح مخصوص ليه", "نسخة ألفا. ممكن يكون فيها أخطاء.", "التقنيات والترخيص", "الكود المصدري", "وحدة مدمجة في Node.js", "ترخيص MIT"],
  bn: ["ভাষা", "ব্রাউজার ডাউনলোড করুন", "বিকেন্দ্রীভূত ইন্টারনেটের নিজস্ব একটি ব্রাউজার প্রাপ্য", "আলফা সংস্করণ। এতে ত্রুটি থাকতে পারে।", "প্রযুক্তি ও লাইসেন্স", "সোর্স কোড", "Node.js-এর অন্তর্নির্মিত মডিউল", "MIT লাইসেন্স"],
  de: ["Sprache", "Browser herunterladen", "Das dezentrale Internet verdient einen eigenen Browser", "Alpha-Version. Kann Fehler enthalten.", "Technik und Lizenz", "Quellcode", "integriertes Node.js-Modul", "MIT-Lizenz"],
  es: ["Idioma", "Descargar navegador", "La web descentralizada merece su propio navegador", "Versión alfa. Puede contener errores.", "Tecnología y licencia", "Código fuente", "módulo integrado de Node.js", "Licencia MIT"],
  fr: ["Langue", "Télécharger le navigateur", "L’Internet décentralisé mérite son propre navigateur", "Version alpha. Peut contenir des bugs.", "Technologies et licence", "Code source", "module intégré à Node.js", "Licence MIT"],
  ha: ["Harshe", "Sauke burauzar", "Intanet marar cibiya ta cancanci burauzarta", "Sigar Alpha. Tana iya ƙunsar kurakurai.", "Fasaha da lasisi", "Lambar tushe", "sashen da aka gina cikin Node.js", "Lasisi na MIT"],
  hi: ["भाषा", "ब्राउज़र डाउनलोड करें", "विकेंद्रीकृत इंटरनेट का अपना ब्राउज़र होना चाहिए", "अल्फ़ा संस्करण। इसमें त्रुटियाँ हो सकती हैं।", "तकनीक और लाइसेंस", "स्रोत कोड", "Node.js का अंतर्निहित मॉड्यूल", "MIT लाइसेंस"],
  id: ["Bahasa", "Unduh peramban", "Internet terdesentralisasi layak punya peramban sendiri", "Versi alfa. Mungkin masih mengandung bug.", "Teknologi dan lisensi", "Kode sumber", "modul bawaan Node.js", "Lisensi MIT"],
  ja: ["言語", "ブラウザーをダウンロード", "分散型インターネットには専用のブラウザーがふさわしい", "アルファ版です。バグが含まれる可能性があります。", "使用技術とライセンス", "ソースコード", "Node.js の組み込みモジュール", "MIT ライセンス"],
  mr: ["भाषा", "ब्राउझर डाउनलोड करा", "विकेंद्रित इंटरनेटसाठी स्वतंत्र ब्राउझर हवा", "अल्फा आवृत्ती. यात त्रुटी असू शकतात.", "तंत्रज्ञान आणि परवाना", "स्रोत कोड", "Node.js मधील अंगभूत मॉड्यूल", "MIT परवाना"],
  pcm: ["Language", "Download browser", "Decentralized internet deserve browser of im own", "Alpha version. E fit get bugs.", "Technology and licence", "Source code", "module wey dey inside Node.js", "MIT licence"],
  pl: ["Język", "Pobierz przeglądarkę", "Zdecentralizowany internet zasługuje na własną przeglądarkę", "Wersja Alpha. Może zawierać błędy.", "Technologie i licencja", "Kod źródłowy", "wbudowany moduł Node.js", "Licencja MIT"],
  pt: ["Idioma", "Baixar navegador", "A internet descentralizada merece um navegador próprio", "Versão alfa. Pode conter erros.", "Tecnologia e licença", "Código-fonte", "módulo integrado do Node.js", "Licença MIT"],
  ru: ["Язык", "Скачать браузер", "Децентрализованный интернет заслуживает собственного браузера", "Альфа-версия. Может содержать ошибки.", "Технологии и лицензия", "Исходный код", "встроенный модуль Node.js", "Лицензия MIT"],
  sw: ["Lugha", "Pakua kivinjari", "Intaneti iliyogatuliwa inastahili kivinjari chake", "Toleo la alfa. Linaweza kuwa na hitilafu.", "Teknolojia na leseni", "Msimbo chanzo", "moduli iliyojengewa ndani ya Node.js", "Leseni ya MIT"],
  te: ["భాష", "బ్రౌజర్‌ను డౌన్‌లోడ్ చేయండి", "వికేంద్రీకృత ఇంటర్నెట్‌కు సొంత బ్రౌజర్ ఉండాలి", "ఆల్ఫా వెర్షన్. ఇందులో లోపాలు ఉండవచ్చు.", "సాంకేతికతలు మరియు లైసెన్స్", "సోర్స్ కోడ్", "Node.jsలో అంతర్నిర్మిత మాడ్యూల్", "MIT లైసెన్స్"],
  ur: ["زبان", "براؤزر ڈاؤن لوڈ کریں", "غیر مرکزی انٹرنیٹ اپنے براؤزر کا حق رکھتا ہے", "الفا ورژن۔ اس میں خرابیاں ہو سکتی ہیں۔", "ٹیکنالوجی اور لائسنس", "سورس کوڈ", "Node.js کا بلٹ اِن ماڈیول", "MIT لائسنس"],
  vi: ["Ngôn ngữ", "Tải trình duyệt", "Internet phi tập trung xứng đáng có trình duyệt riêng", "Phiên bản alpha. Có thể có lỗi.", "Công nghệ và giấy phép", "Mã nguồn", "mô-đun tích hợp của Node.js", "Giấy phép MIT"],
  zh: ["语言", "下载浏览器", "去中心化互联网值得拥有自己的浏览器", "Alpha 版本。可能存在错误。", "技术栈与许可证", "源代码", "Node.js 内置模块", "MIT 许可证"],
};

const selector = document.getElementById("language");
const article = document.getElementById("manifesto");
const english = document.createDocumentFragment();
english.append(...article.cloneNode(true).childNodes);
const preferenceKey = "perun-ipfs-browser:language";

function applyLanguage(language) {
  const translation = document.getElementById(language);
  const content = translation instanceof HTMLTemplateElement ? translation.content : english;
  const [languageLabel, downloadLabel, tagline, alphaNote, stackHeading, sourceLabel, sqliteLabel, licenseLabel] = labels[language];

  document.documentElement.lang = language;
  document.documentElement.dir = translation?.getAttribute("dir") || "ltr";
  document.querySelector('label[for="language"]').textContent = languageLabel;
  document.getElementById("download-label").textContent = downloadLabel;
  document.getElementById("tagline").textContent = tagline;
  document.getElementById("alpha-note").textContent = alphaNote;
  document.getElementById("stack-heading").textContent = stackHeading;
  document.getElementById("source-link").textContent = sourceLabel;
  document.getElementById("sqlite-label").textContent = sqliteLabel;
  document.getElementById("license-label").textContent = licenseLabel;
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
