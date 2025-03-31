// ✅ تعريف اللغات
const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن؟",
        service: "عن التوصيل",
        contact: "التواصل معنا",
        welcome: "مرحبًا بك في موقعنا",
        home_text: "هذه صفحة هبوط تحتوي على معلومات عن موقعنا.",
        about_title: "من نحن",
        about_text: "نحن فريق متخصص في تقديم أفضل الخدمات لعملائنا.",
        contact_title: "التواصل معنا",
        contact_text: "يمكنك التواصل معنا عبر البريد الإلكتروني: contact@example.com",
        lang_button: "EN"
    },
    en: {
        home: "Home",
        about: "About Us?",
        service: "About Delivery",
        contact: "Contact Us",
        welcome: "Welcome to our website",
        home_text: "This is a landing page containing information about our site.",
        about_title: "About Us",
        about_text: "We are a team specializing in providing the best services to our customers.",
        contact_title: "Contact Us",
        contact_text: "You can contact us via email: contact@example.com",
        lang_button: "AR"
    }
};

// ✅ تغيير اللغة عند الضغط على الزر
document.getElementById("lang-toggle").addEventListener("click", function () {
    const currentLang = document.body.getAttribute("dir") === "rtl" ? "ar" : "en";
    const newLang = currentLang === "ar" ? "en" : "ar";

    // ✅ تغيير اتجاه الصفحة
    document.body.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");

    // ✅ تحديث النصوص
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[newLang][key]) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.setAttribute("placeholder", translations[newLang][key]);
            } else {
                element.textContent = translations[newLang][key];
            }
        }
    });

    // ✅ تغيير نص زر اللغة
    this.textContent = translations[newLang].lang_button;
});

// ✅ إضافة تأثير التمرير السلس عند النقر على روابط النافبار

document.querySelectorAll('.navbar a, footer a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href');

        // ✅ تجاهل الروابط غير الداخلية
        if (!targetId || !targetId.startsWith("#") || targetId === "#") return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            event.preventDefault(); // منع السلوك الافتراضي فقط إذا كان الرابط داخليًا

            window.scrollTo({
                top: targetSection.offsetTop - 50, // تعويض ارتفاع النافبار
                behavior: "smooth"
            });
        }
    });
});


function showForm() {
    document.getElementById('app-form').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function nonOrdr() {
    document.getElementById('app-form').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function changeImage(element) {
    document.getElementById('mainImage').src = element.src;
}





