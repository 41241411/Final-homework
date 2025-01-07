const balance = {
    en: {
        "check-balance": "Recharge",
        "balance": "balance",
        "card-number": "Card Number",
    },
    zh: {
        "check-balance": "查詢餘額",
        "balance": "餘額",
        "card-number": "卡號",
    },
};

const languages = {
    en: {
        balanceFailure: "Error",
        balanceCardNumberNotFound: "Card number not found, please try again.",
        balanceFailureMessage: "There was an error while retrieving the balance.",
    },
    zh: {
        balanceFailure: "錯誤",
        balanceCardNumberNotFound: "卡號不存在，請檢查後重試。",
        balanceFailureMessage: "儲值過程中發生錯誤，請稍後再試。",
    },
};

const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示

let tip = languages[lang];  // 初始語言提示

function balanceLanguage(lang) {
    //balance data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (balance[lang][key]) {
            el.innerHTML = balance[lang][key];
        }
    });

    tip = languages[lang];  // 初始語言提示
}