// ==================
// 1. Translations
// ==================
const dictionary = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-portfolio": "Portfolio",
        "nav-timeline": "Timeline",
        "nav-works": "Works",
        "nav-contact": "Contact",
        "hero-greeting": "Hello User,",
        "hero-name": "I'm <span class='title-glow'>Mohammed</span>",
        "hero-title": "Software Engineer & Game Patcher",
        "btn-explore": "Explore Works",
        "btn-cv": "Download CV",
        "tips-title": "Tips & Rules",
        "tip-1": "First: Make sure to read the description fully before downloading.",
        "tip-2": "Second: All uploaded files are scanned and virus-free.",
        "tip-3": "Tip: Watch the tutorial video to ensure correct installation.",
        "about-title": "About <span class='text-accent'>Me</span>",
        "about-p1": "Hey there, I'm Mohammed! Welcome to my personal space on the web.",
        "about-p2": "I am a passionate software engineer who strongly believes in writing clean, scalable, and efficient code. I specialize in building solid web experiences and deeply technical applications.",
        "about-p3": "Outside of the core development world, I am known as MK, modifying games, building patches, and providing top-tier optimized game downloads for the community.",
        "stats-exp": "Years Experience",
        "stats-games": "Games & Patches",
        "stats-tech": "Core Tech Skills",
        "tech-title": "Tech <span class='text-accent'>Arsenal</span>",
        "tech-front": "Frontend Engineering",
        "tech-front-desc": "Crafting sleek, interactive, and highly responsive user interfaces that perform blazing fast on any device.",
        "tech-back": "Backend Architecture",
        "tech-back-desc": "Designing secure, robust, and lightning-fast APIs with modern server-side technologies and databases.",
        "tech-game": "Game Modding & Patching",
        "tech-game-desc": "Deep diving into game files, creating custom patches (like FIFA 14), and optimizing game setups for the community.",
        "timeline-title": "Latest <span class='text-accent'>Updates</span>",
        "tl-1-date": "March 2026",
        "tl-1-title": "FIFA 14 Patch V3 Release",
        "tl-1-desc": "Major update adding 5 new teams, enhanced graphics, and updated rosters for the current season.",
        "tl-2-date": "January 2026",
        "tl-2-title": "Resident Evil 6 Mod Pack",
        "tl-2-desc": "Complete overhaul mod pack enhancing textures and adding classic horror mechanics to the game.",
        "tl-3-date": "November 2025",
        "tl-3-title": "Site V1 Launch",
        "tl-3-desc": "The original launch of MK Patches website to share creations with the gaming community.",
        "works-title": "My <span class='text-accent'>Works</span>",
        "search-ph": "Search games or patches...",
        "filter-all": "All",
        "filter-pc": "PC Games",
        "filter-android": "Android",
        "filter-patch": "Patches",
        "contact-title": "Get in <span class='text-accent'>Touch</span>",
        "form-name": "Your Name",
        "form-email": "Your Email",
        "form-msg": "Your Message",
        "btn-send": "Send Message",
        "footer-text": "[ Built by Mohammed ]",
        "modal-btn": "Download Game (Hop Ad)"
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-about": "نبذة عني",
        "nav-portfolio": "المهارات",
        "nav-timeline": "التحديثات",
        "nav-works": "أعمالي",
        "nav-contact": "تواصل معي",
        "hero-greeting": "أهلاً بك،",
        "hero-name": "أنا <span class='title-glow'>محمد</span>",
        "hero-title": "مهندس برمجيات ومطوّر ألعاب (باتشات)",
        "btn-explore": "تصفح أعمالي",
        "btn-cv": "تحميل السيرة الذاتية",
        "tips-title": "نصائح وشروط",
        "tip-1": "أولاً: تأكد من قراءة وصف اللعبة أو الباتش كاملاً قبل التحميل.",
        "tip-2": "ثانياً: جميع الملفات المرفوعة خالية تماماً من الفيروسات.",
        "tip-3": "نصيحة: يُفضل مشاهدة فيديوهات الشرح لتجنب أخطاء التثبيت.",
        "about-title": "نبذة <span class='text-accent'>عني</span>",
        "about-p1": "أهلاً بك! أنا محمد! مرحباً بك في مساحتي الشخصية على الويب.",
        "about-p2": "أنا مهندس برمجيات شغوف أؤمن بشدة بكتابة أكواد نظيفة وقابلة للتطوير وفعالة. أتخصص في بناء تجارب ويب صلبة وتطبيقات تقنية عميقة.",
        "about-p3": "خارج عالم التطوير الأساسي، أُعرف باسم MK، أقوم بتعديل الألعاب وبناء الباتشات وتقديم روابط تحميل ألعاب محسنة بمستوى عالٍ للمجتمع.",
        "stats-exp": "سنوات خبرة",
        "stats-games": "باتشات وألعاب",
        "stats-tech": "لغات وتقنيات",
        "tech-title": "أسلحتي <span class='text-accent'>التقنية</span>",
        "tech-front": "هندسة الواجهات (Frontend)",
        "tech-front-desc": "صناعة واجهات مستخدم تفاعلية، سريعة جداً، وتعمل بكفاءة على جميع الأجهزة.",
        "tech-back": "هندسة الخوادم (Backend)",
        "tech-back-desc": "تصميم وبناء واجهات برمجية آمنة (APIs) سريعة باستخدام أحدث تقنيات وقواعد البيانات.",
        "tech-game": "تعديل برمجيات الألعاب",
        "tech-game-desc": "الغوص في ملفات الألعاب، إنشاء باتشات مخصصة (مثل FIFA 14)، وتحسين إعدادات الألعاب لتناسب أجهزة المجتمع.",
        "timeline-title": "سجل <span class='text-accent'>التحديثات</span>",
        "tl-1-date": "مارس 2026",
        "tl-1-title": "إطلاق باتش فيفا 14 - الإصدار الثالث",
        "tl-1-desc": "تحديث ضخم يضيف 5 فرق جديدة، تحسين الجرافيكس، وتحديث الانتقالات للموسم الحالي.",
        "tl-2-date": "يناير 2026",
        "tl-2-title": "حزمة مودات Resident Evil 6",
        "tl-2-desc": "حزمة تعديلات شاملة لتحسين الملمس الرسومي وإضافة ميكانيكيات الرعب الكلاسيكية.",
        "tl-3-date": "نوفمبر 2025",
        "tl-3-title": "إطلاق النسخة الأولى للموقع",
        "tl-3-desc": "الإطلاق الرسمي لموقع MK Patches لمشاركة الإبداعات مع مجتمع اللاعبين.",
        "works-title": "<span class='text-accent'>أعمالي</span>",
        "search-ph": "ابحث عن لعبة أو باتش...",
        "filter-all": "الكل",
        "filter-pc": "ألعاب PC",
        "filter-android": "أندرويد",
        "filter-patch": "باتشات ومودات",
        "contact-title": "تواصل <span class='text-accent'>معي</span>",
        "form-name": "اسمك",
        "form-email": "بريدك الإلكتروني",
        "form-msg": "رسالتك",
        "btn-send": "إرسال الرسالة",
        "footer-text": "[ صُنع بواسطة محمد ]",
        "modal-btn": "تخطي وتحميل اللعبة"
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';

function setLanguage(lang) {
    if(!dictionary[lang]) return;
    currentLang = lang;
    localStorage.setItem('siteLang', lang);

    document.documentElement.lang = lang;
    if(lang === 'ar') {
        document.body.classList.add('rtl');
        document.body.dir = "rtl";
    } else {
        document.body.classList.remove('rtl');
        document.body.dir = "ltr";
    }

    // Update dom elements
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
        const key = el.getAttribute('data-t');
        if(dictionary[lang][key]) {
            el.innerHTML = dictionary[lang][key];
        }
    });

    const inputs = document.querySelectorAll('[data-p]');
    inputs.forEach(el => {
        const key = el.getAttribute('data-p');
        if(dictionary[lang][key]) {
            el.setAttribute('placeholder', dictionary[lang][key]);
        }
    });

    const toggleBtn = document.getElementById('langToggle');
    if(toggleBtn) {
        toggleBtn.innerText = lang === 'en' ? 'AR' : 'EN';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Setup
    const toggleBtn = document.getElementById('langToggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }
    setLanguage(currentLang);

    // 2. Stats Counter
    const statsElements = document.querySelectorAll('.stat-number');
    let counted = false;
    
    const countUp = () => {
        if(!counted && window.scrollY > document.getElementById('about').offsetTop - window.innerHeight) {
            statsElements.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16); 
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if(current < target) {
                        el.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.innerText = target;
                    }
                };
                updateCounter();
            });
            counted = true;
        }
    };
    window.addEventListener('scroll', countUp);

    // 3. Game Database & Modals
    const gamesDb = {
        'g_fifa': { title: "FIFA 14 Patch", type: "Patch", desc: "The ultimate FIFA 14 updated patch covering all team transfers and kits.", size: "4.2 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://pastelink.net/z5bintfk'] },
        'g_tut': { title: "Patch Tutorial Video", type: "Video / Guide", desc: "A comprehensive instructional video on how to install and setup the patches cleanly.", size: "N/A", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://youtu.be/4DzIxuyQPZE'] },
        'g_cm15': { title: "Creation Master 15", type: "Tool / Patch", desc: "The famous Creation Master 15 to edit elements and patch databases effectively.", size: "12 MB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://www.mediafire.com/file/uy2mwy7cy74a40w/Creation_Master_15_Ultimate.rar/file'] },
        'g_re6': { title: "Resident Evil 6 PC", type: "PC Game", desc: "Action horror hit by Capcom. Ready to download and play perfectly optimized.", size: "16 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://pcgd.net/dRDXHWWA4ZdgY5t/file', 'https://pcgd.net/wtnrMsocDBGLcrD/file'] },
        'g_mcpc': { title: "Minecraft Java PC", type: "PC Game", desc: "The ultimate sandbox game. Build, survive and explore infinite worlds on your PC.", size: "Launch Size", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://dl1.tlauncher.org/f.php?f=files%2FTLauncher-Installer-1.9.5.1.exe'] },
        'g_hkpc': { title: "Hollow Knight PC", type: "PC Game", desc: "A beautifully hand-drawn 2D metroidvania filled with mysteries and bugs.", size: "9 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://pcgd.net/vXYF9QmuScYGl1h/file'] },
        'g_gtapc': { title: "GTA San Andreas PC", type: "PC Game", desc: "The legendary classic open-world game featuring Carl Johnson.", size: "4 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://pcgd.net/eMqlMR6ntoI9MFL/file'] },
        'g_gtaan': { title: "GTA SA Android", type: "Android Game", desc: "The classic GTA experience optimized perfectly for Android devices.", size: "2.5 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://files.apkdlink.com/gtasanandreas/gtasanandreas-2.11.264.apk'] },
        'g_mcan': { title: "Minecraft Android", type: "Android Game", desc: "Pocket Edition of Minecraft ready to build on the go.", size: "150 MB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://files.apkdlink.com/minecraft/minecraft-minecraft-apk-latest-version-january-2026.apk'] },
        'g_cup': { title: "Cuphead PC", type: "PC Game", desc: "A brutal 1930s-style shoot-em-up adventure.", size: "3.5 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://cdn1.trashbytes.to/Cuphead.v1.3.4.7z?verify=1774875017-puHx7mqtBIIsK4Yr9NvgrQAg7bk0TOW7gG0KJXLoc8Y%3D'] },
        'g_forza': { title: "Forza Horizon 5 PC", type: "PC Game", desc: "Stunning ultimate driving adventure in Mexico's vibrant landscapes.", size: "110 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://cdn1.trashbytes.to/Forza.Horizon.5.v688.109.rar?verify=1774875267-2NT9CW%2Fkm0%2BnK2O9bLCZATwu2emN6CoCK3sMkh7oUvE%3D'] },
        'g_dc': { title: "Dead Cells Android", type: "Android Game", desc: "A rogue-lite, metroidvania action-platformer.", size: "600 MB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://dl.apkvision.org/dead-cells/Dead-Cells-v3.5.9-unlocked-apkvision.apk'] },
        'g_re4': { title: "Resident Evil 4 PC", type: "PC Game", desc: "The original 2005 survival horror masterpiece.", size: "3.2 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://cdn1.trashbytes.to/Resident.Evil.4.2005.v1.1.0.rar?verify=1774875812-UwhEbp0hAvbjLFiMTAAwzg2kQ0jpibVIvtiFEo6YowE%3D'] },
        'g_hkan': { title: "Hollow Knight Android", type: "Android Game", desc: "Hollow Knight fan-ported smoothly to Android screens.", size: "1.2 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://apks.trulhost.com/HollowKnight-1.5.78.apk'] },
        'g_jojo': { title: "JoJo Bizarre Adventure", type: "PC Game", desc: "All-Star Battle R giving anime fans what they love.", size: "4.5 GB", links: ['https://www.profitablecpmratenetwork.com/prda3iip?key=2dd5e5e077903b5b2cf9300b900e7b02', 'https://cdn1.trashbytes.to/JoJos.Bizarre.Adventure.ASBR.v2.3.3.rar?verify=1774875619-SmBRE%2FcQ2Zr4R8YrLtq2iFIb2LU4rwYsL%2FLqYbFmYaA%3D'] }
    };

    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalType = document.getElementById('modalType');
    const modalDesc = document.getElementById('modalDesc');
    const modalSize = document.getElementById('modalSize');
    const modalImg = document.getElementById('modalImg');
    const modalBtn = document.getElementById('modalDownloadBtn');
    const modalClose = document.getElementById('modalClose');

    // Make works open modal
    document.querySelectorAll('.work-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const id = item.getAttribute('data-id');
            const imgSrc = item.querySelector('img').src;
            const gameData = gamesDb[id];
            
            if(gameData) {
                modalTitle.innerText = gameData.title;
                modalType.innerText = `Platform/Type: ${gameData.type}`;
                modalDesc.innerText = gameData.desc;
                modalSize.innerText = `Size: ${gameData.size}`;
                modalImg.src = imgSrc;
                
                // attach hop logic exactly as requested
                modalBtn.onclick = (event) => window.handleHop(event, id, gameData.links);
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // prevent scrolling
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 4. Filters & Search Engine
    const searchInput = document.getElementById('gameSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const worksList = document.querySelectorAll('.work-item');
    let activeFilter = 'all';

    const filterGames = () => {
        const query = searchInput.value.toLowerCase();
        worksList.forEach(work => {
            const title = work.querySelector('p').innerText.toLowerCase();
            const cat = work.getAttribute('data-category');
            
            const matchSearch = title.includes(query);
            const matchCat = (activeFilter === 'all' || cat === activeFilter);
            
            if(matchSearch && matchCat) {
                work.style.display = 'block';
            } else {
                work.style.display = 'none';
            }
        });
    };

    if(searchInput) {
        searchInput.addEventListener('keyup', filterGames);
    }

    if(filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.getAttribute('data-filter');
                filterGames();
            });
        });
    }

    // Existing: Mobile Nav & Scroll Reveal
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
        document.querySelectorAll('.nav-links li a').forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            });
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
    revealElements.forEach(el => revealObserver.observe(el));

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if(cursorDot && cursorOutline && window.innerWidth >= 1024) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
        
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .work-item, .lang-btn, .close-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(230, 57, 70, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

    // Scroll To Top Progress Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const progressCircle = document.querySelector('.progress-ring-circle');
    const circumference = 22 * 2 * Math.PI; // 138.23

    if (scrollTopBtn && progressCircle) {
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = `${circumference}`;

        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;
            
            const offset = circumference - scrollPercent * circumference;
            progressCircle.style.strokeDashoffset = offset;

            if (scrollTop > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', updateScrollProgress);

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // initial call incase page loaded halfway down
        updateScrollProgress();
    }
});

// Generic handleHop global function
window.handleHop = function(e, gameId, links) {
    if(e) e.preventDefault();
    let key = "clickCount_" + gameId;
    let count = parseInt(localStorage.getItem(key)) || 0;
    if (count < links.length) {
        window.open(links[count], "_blank");
        count++;
    }
    if (count >= links.length) {
        count = 0;
    }
    localStorage.setItem(key, count);
};
