<h1 align="center">
  <br>
  🎮 MK Patches & Portfolio V2.5
  <br>
</h1>

<h4 align="center">A Next-Gen, Premium Personal Portfolio & Game Modding Hub</h4>
<h4 align="center">منصة ألعاب احترافية ومعرض أعمال لمهندسي البرمجيات</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Completed-%2300C853?style=for-the-badge&logoColor=white" alt="Status" />
  <img src="https://img.shields.io/badge/Version-2.5-%232196F3?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/License-MIT-%23FF9800?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Formspree-E7245A?style=for-the-badge&logo=formspree&logoColor=white" alt="Formspree" />
</p>

<p align="center">
  <a href="#english-documentation"><strong>English</strong></a> ·
  <a href="#arabic-documentation"><strong>العربية</strong></a>
</p>

<hr>

<h2 id="english-documentation">🇬🇧 English Documentation</h2>

### 📖 About The Project

Welcome to the **MK Portfolio**, a highly interactive, cyber-aesthetic, and performance-optimized personal website. Designed specifically for Software Engineers and Game Modders, this platform serves a dual purpose: 
1. A **Professional CV/Portfolio** showcasing skills, experience, and contact info.
2. A **Game Patcher's Central Hub**, allowing the community to browse, filter, and download game mods, patches, and tools seamlessly.

The project ditches heavy frameworks in favor of **Pure Vanilla JS, HTML, and CSS** to guarantee blazing-fast load times, zero dependencies, and absolute control over the UI/UX.

### ✨ Key Features

- 🌐 **Built-in i18n Engine**: Native Arabic & English support. Automatic `RTL/LTR` layout switching and text translation without reloading the page. Saves user preferences in `localStorage`.
- 🎯 **Advanced Custom Cyber Cursor**: Engaging custom gaming dot and trailing ring that reacts intelligently to interactive elements (buttons, links, game cards).
- 🗂️ **Dynamic Game Database**: Full front-end database inside `main.js`. Render games, descriptions, sizes, and multiple download links effortlessly.
- 🕵️‍♂️ **Smart Search & Filters**: Instantly find PC games, Android APKs, or custom patches with fluid DOM filtering animations.
- 🎬 **Cinematic Game Modals**: Click on any game card to trigger a gorgeous glassmorphic overlay detailing the game's size and description before engaging the download sequence.
- 🎫 **Cyberpunk Aesthetics & Glassmorphism**: Stunning UI combining frosted glass effects (`backdrop-filter`) with subtle CRT glitching, scanlines, and neon accents.
- ⏱️ **Interactive Changelog Timeline**: A vertical history track displaying the latest mod releases and project updates.
- 📈 **Intersection Stats Counters**: Smart numbers that automatically count up to your real-world stats (experience, projects, skills) once scrolled into view.
- 📨 **Serverless Contact Form**: Boilerplate integrated directly with [Formspree](https://formspree.io) to receive emails without needing a backend server.

---

### 🛠️ Tech Stack

| Technology | Usage |
| ------ | ------ |
| **HTML5** | Semantic structure, accessibility, and high Lighthouse SEO scores. |
| **Vanilla CSS** | Glassmorphism, CSS Variables, Flexbox/Grid, and Keyframe Animations. |
| **Vanilla JS** | DOM Manipulation, i18n Translation Logic, Observer APIs, and filtering. |
| **Formspree** | API endpoint for handling contact form submissions securely. |

---

### 🚀 Getting Started

To get this project running locally or deploy it to a server, follow these simple steps:

1. **Clone or Download** the repository.
   ```bash
   git clone https://github.com/yourusername/mx-bro.git
   ```
2. **Launch**: Simply open `index.html` in your favorite web browser. *No `npm install`, dependencies, or build step required!*

---

### ⚙️ Configuration & Customization

The project is designed to be fully modular and easily maintainable.

#### 1. Adding/Editing Games
Open `main.js` and locate the `gamesDb` object. Add a new entry to instantly make it available on the site:
```javascript
'g_id': { 
  title: "Game Name", 
  type: "PC Game", 
  desc: "The game description goes here.", 
  size: "5 GB", 
  links: ['https://ad-link.com', 'https://download-link.com'] 
}
```

#### 2. Updating Timeline Events
Inside `main.js`, locate the `dictionary` object. Update the values for `"tl-1-title"`, `"tl-1-desc"`, etc., in both the `en` and `ar` sections to update your changelog.

#### 3. Activating Contact Form
1. Create a free account at [Formspree](https://formspree.io/).
2. Create a new form and copy your Form ID.
3. Open `index.html`, find the `<form>` tag, and replace the action URL:
   `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`

---
<br><br>

<h2 id="arabic-documentation" dir="rtl" align="right">🇸🇦 التوثيق باللغة العربية</h2>

### 📖 نبذة عن المشروع

مرحباً بك في **MK Portfolio**، منصة شخصية تفاعلية ومحسّنة الأداء مبنية بطابع الألعاب (Cyber-Aesthetic). تم تصميم هذا المشروع خصيصاً لمهندسي البرمجيات ومطوري الألعاب (Modders) ليخدم هدفين رئيسيين:
1. **معرض أعمال احترافي (CV)** يعرض المهارات، الخبرات، ومعلومات التواصل بحداثة.
2. **مركز تحميل متكامل للألعاب (Game Hub)** يتيح للمجتمع تصفح، فلترة، وتحميل الألعاب أو الباتشات بكل سلاسة وبطريقة جذابة.

يتخلى هذا المشروع عن أطر العمل الثقيلة (Frameworks) ويعتمد كلياً على **Vanilla JS و HTML و CSS النقي** لضمان سرعة تحميل خارقة، وتحكم مطلق في واجهة وتجربة المستخدم.

### ✨ المميزات الرئيسية

- 🌐 **نظام ترجمة مدمج (i18n)**: دعم أصلي للغتين العربية والإنجليزية. تحويل تلقائي لاتجاه الصفحة `RTL/LTR` وترجمة النصوص دون حاجة لتحديث الصفحة، مع حفظ تفضيلات المستخدم.
- 🎯 **مؤشر ماوس مخصص تفاعلي**: مؤشر ماوس بطابع الألعاب (Cyber Cursor) يمتلك حلقة دائرية مرنة تتفاعل بذكاء عند المرور على الأزرار وبطاقات الألعاب.
- 🗂️ **قاعدة بيانات ألعاب ديناميكية**: بيانات تخزن في الواجهة الأمامية عبر ملف `main.js`. يمكنك استدعاء الألعاب ببياناتها، مساحتها، ووصفها بكل سهولة.
- 🕵️‍♂️ **محرك بحث وفلاتر ذكي**: اعثر على ألعاب (PC)، ألعاب (Android)، أو باتشات مخصصة فوراً باستخدام تقنية الفلترة المباشرة عبر الـ DOM.
- 🎬 **نوافذ منبثقة سينمائية (Modals)**: عند الضغط على أي لعبة، ستنبثق شاشة زجاجية أنيقة تعرض تفاصيل وحجم اللعبة قبل التوجه للتحميل.
- 🎫 **تصميم Glassmorphism سيبراني**: واجهة مستخدم مذهلة تجمع بين التأثيرات الزجاجية (`backdrop-filter`) واللمسات النيونية العصرية.
- ⏱️ **خط زمني تفاعلي لتسجيل التحديثات**: قسم (Timeline) عمودي أنيق يعرض أحدث التحديثات الخاصة بالباتشات والمشاريع التي تعمل عليها.
- 📈 **عدادات إحصائية ذكية**: أرقام تتفاعل وتشغل عداداً متحركاً لتصل إلى الإحصائيات الحقيقية لمسيرتك بمجرد التمرير إليها.
- 📨 **نموذج تواصل بدون خادم (Serverless)**: نموذج تواصل جاهز ومربوط مع خدمة [Formspree](https://formspree.io) لاستقبال رسائل الزوار على بريدك الإلكتروني مباشرة.

---

### 🛠️ التقنيات المستخدمة

<div dir="rtl" align="right">

| التقنية | الاستخدام |
| ------ | ------ |
| **HTML5** | الهيكلة الدلالية، التوافقية، ورفع تقييمات الـ SEO. |
| **Vanilla CSS** | تأثيرات الزجاج، المتغيرات، أدوات التخطيط (Flexbox)، والحركات (Keyframes). |
| **Vanilla JS** | التعامل المباشر مع הـ DOM، الترجمة الحية، وتفعيل الفلاتر والمحركات المنطقية. |
| **Formspree** | واجهة برمجية لاستقبال والتعامل مع طلبات نموذج المراسلة بأمان. |

</div>

---

### 🚀 البدء السريع

لتشغيل هذا المشروع على جهازك أو رفعه على خادم الإنترنت، اتبع الخطوات البسيطة التالية:

1. **تحميل المشروع** أو استنساخه:
   ```bash
   git clone https://github.com/yourusername/mx-bro.git
   ```
2. **التشغيل**: ببساطة قم بفتح ملف `index.html` في متصفحك المفضل. *(لا حاجة لبرامج مساعدة أو مكتبات خارجية!)*

---

### ⚙️ التخصيص والتحكم

تم تصميم الكود ليكون قابلاً للتعديل والصيانة بأسهل الطرق.

#### 1. إضافة أو تعديل مبز الألعاب
افتح ملف `main.js` وابحث عن كائن `gamesDb`. أضف بيانات اللعبة الجديدة لتظهر فوراً في الموقع:
```javascript
'g_id': { 
  title: "اسم اللعبة", 
  type: "نوع اللعبة (كمبيوتر)", 
  desc: "اكتب وصف اللعبة هنا.", 
  size: "5 GB", 
  links: ['https://ad-link.com', 'https://download-link.com'] 
}
```

#### 2. تحديث الخط الزمني (Timeline)
داخل ملف `main.js` في قسم `dictionary`، قم بتحديث القيم الخاصة بـ `"tl-1-title"` و `"tl-1-desc"` وما يتبعها، باللغتين لتحيث آخر تفاصيل مشروعك للجمهور.

#### 3. تفعيل نموذج المراسلة (Contact Form)
1. أنشئ حساباً مجانياً في [Formspree](https://formspree.io/).
2. قم بإنشاء نموذج جديد وانسخ الـ (Form ID) الخاص بك.
3. افتح ملف `index.html`، ابحث عن وسم `<form>` وقم بتغيير الرابط إلى:
   `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`

---

<p align="center">
  <br>
  <strong>[ Built with ❤️ by Mohammed (MK) ]</strong>
  <br>
  <em>Building clean, scalable web experiences by day, optimizing the gaming world by night.</em>
</p>
