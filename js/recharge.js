const recharge = {
    en: {
        "recharge-header": "Recharge",
        "top-up-amount-label": "Recharge Amount",
        "card-number-label": "Card Number",
    },
    zh: {
        "recharge-header": "儲值",
        "top-up-amount-label": "儲值金額",
        "card-number-label": "卡號",
    },
};

const languages = {
    en: {
        "topUpAmountError": "Please enter a valid recharge amount.",
        "cardNumberNotFound": "Card number does not exist. Please check and try again.",
        "cardStatusError":  "Card number not in 'Enter', please check and try again!",
        "rechargeSuccess": "Recharge successful",
        "rechargeSuccessMessage": (cardNumber, topUpAmount, newBalance) => `Card number ${cardNumber} has been recharged with ${topUpAmount} dollars, new balance is ${newBalance} dollars.`,
        "rechargeFailure": "Recharge failed",
        "rechargeFailureMessage": "An error occurred during the recharge process, please try again later."
    },
    zh: {
        "topUpAmountError": "請輸入正確的儲值金額。",
        "cardNumberNotFound": "卡號不存在，請檢查後重試。",
        "cardStatusError": "卡號未處於'進場'狀態，請檢查後重試！",
        "rechargeSuccess": "儲值成功",
        "rechargeSuccessMessage": (cardNumber, topUpAmount, newBalance) => `卡號 ${cardNumber} 已儲值 ${topUpAmount} 元，餘額 ${newBalance} 元。`,
        "rechargeFailure": "儲值失敗",
        "rechargeFailureMessage": "儲值過程中發生錯誤，請稍後再試。"
    }
};

const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示

let tip = languages[lang];  // 初始語言提示

function rechargeLanguage(lang) {
    //更改payment頁面中帶有 data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (recharge[lang][key]) {
            el.innerHTML = recharge[lang][key];
        }
    });

    tip = languages[lang];  // 初始語言提示
}
