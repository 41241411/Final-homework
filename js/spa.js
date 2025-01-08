const spa = {
    en: {
        "welcome-title": "Welcome to Our Premier SPA Center!",
        "welcome-description": "Here, we offer the ultimate relaxation experience, whether it’s massages, hot springs, or other comfort services, allowing you to enjoy unparalleled physical and mental relaxation.",
        "relaxation-services": "Relaxation Services",
        "relaxation-description": "Our SPA center offers various relaxation services including deep tissue massages, aromatherapy, body scrubs, etc., to help you release stress and restore energy.",
        "hot-spring-title": "Hot Spring Experience",
        "hot-spring-description": "Our hot spring facilities provide top-notch relaxation experience, allowing you to enjoy warm hydrotherapy in a tranquil environment, promoting blood circulation and relieving muscle tension.",
        "call-to-action": "Book your relaxation experience now and start enjoying the perfect rejuvenation of body and mind!",
    },
    zh: {
        "welcome-title": "歡迎來到頂級SPA中心！",
        "welcome-description": "在這裡，我們提供極致的放鬆體驗，無論是按摩、泡湯還是其他舒適設施，都能讓您擁有無與倫比的身心放鬆。",
        "relaxation-services": "放鬆服務",
        "relaxation-description": "我們的SPA中心提供各種放鬆服務，包括深層按摩、芳香療法、身體磨砂等，幫助您釋放壓力，恢復活力。",
        "hot-spring-title": "溫泉體驗",
        "hot-spring-description": "我們的溫泉設施提供頂級的放鬆體驗，讓您在寧靜的環境中享受溫暖的水療，促進血液循環並舒緩肌肉緊張。",
        "call-to-action": "立即預約您的放鬆體驗，開始享受身心的完美調養！",
    },
};


const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示


function spaLanguage(lang) {
    //更改payment頁面中帶有 data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (spa[lang][key]) {
            el.innerHTML = spa[lang][key];
        }
    });
}
