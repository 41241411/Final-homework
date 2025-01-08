const food = {
    en: {
        "welcome-title": "Welcome to the Gourmet Feast!",
        "welcome-description": "Here, we present you with a diverse selection of gourmet food to satisfy your taste buds and bring you an unprecedented gourmet experience.",
        "gourmet-services": "Top Gourmet Services",
        "gourmet-description": "We offer a variety of international cuisines, including Mediterranean cuisine, Japanese cuisine, French cuisine, etc., to meet your different needs.",
        "rich-cuisine-title": "Rich Cuisine Selection",
        "rich-cuisine-description": "Our menu design incorporates flavors from all over the world, providing a rich and diverse selection, whether you are a vegetarian or a meat lover, you can find your favorite gourmet food.",
        "call-to-action": "Book now and enjoy an unparalleled gourmet feast with your family and friends!",
},
    zh: {
        "welcome-title": "歡迎來到美食饗宴！",
        "welcome-description": "在這裡，我們為您呈現多元化的美食選擇，滿足您的味蕾，帶來前所未有的美食體驗。",
        "gourmet-services": "頂級美食服務",
        "gourmet-description": "我們提供各種國際化的美食，包括地中海料理、日式料理、法式料理等，滿足您的不同需求。",
        "rich-cuisine-title": "豐富的料理選擇",
        "rich-cuisine-description": "我們的菜單設計融入各地風味，提供豐富多樣的選擇，無論是素食者還是肉食愛好者，都能找到心儀的美食。",
        "call-to-action": "立即預約，與親朋好友一同享受無與倫比的美食饗宴！",
    },
};


const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示


function foodLanguage(lang) {
    //更改payment頁面中帶有 data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (food[lang][key]) {
            el.innerHTML = food[lang][key];
        }
    });
}
