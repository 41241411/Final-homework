const park = {
    en: {
        "welcome-title": "Welcome to the Adventure Park!",
        "welcome-description":"This is the ideal place for those seeking excitement and adventure, with a variety of facilities and games suitable for visitors of all ages. Whether you want to challenge yourself on thrilling roller coasters or enjoy various entertainment facilities with your family, the Adventure Park offers unparalleled fun.",
        "thrill-rides":"Thrilling Rides",
        "thrill-description":"Our amusement park offers several extreme rides, including roller coasters and free fall towers, providing you with an unprecedented adventure experience.",
        "family-friendly":"Family-Friendly Facilities",
        "family-description":"In addition to thrilling rides, the park also offers family-friendly attractions, such as a kids' play area and a carousel, making it a fun experience for the whole family.",
        "call-to-action":"Come and enjoy endless adventure and joy now!"
    },
    zh: {
        "welcome-title": "歡迎來到冒險樂園！",
        "welcome-description":"這裡是你尋求刺激與冒險的理想場所，擁有眾多設施和遊戲，適合所有年齡層的遊客。不論是你想挑戰刺激的過山車，還是帶著全家來一起享受各種娛樂設施，冒險樂園都能提供無與倫比的樂趣。",
        "thrill-rides":"驚險刺激的遊樂設施",
        "thrill-description":"我們的遊樂園擁有多項極限遊戲，包括過山車、跳樓機等刺激設施，將帶給你前所未有的冒險體驗。",
        "family-friendly":"家庭友善設施",
        "family-description":"除了刺激的設施，遊樂園還有專為家庭設計的設施，像是親子遊樂區、旋轉木馬等，讓全家都能一起度過愉快的時光。",
        "call-to-action":"趕快來享受無盡的冒險與歡樂吧！"
    },
};


const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示


function parkLanguage(lang) {
    //更改payment頁面中帶有 data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (park[lang][key]) {
            el.innerHTML = park[lang][key];
        }
    });
}
