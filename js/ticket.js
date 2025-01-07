// prompt.js
const languages = {
    'zh': {
        invalidInput: "請輸入有效的卡號",
        successTitle: (cardNumber, status) => `卡號 ${cardNumber} ${status}成功！`,  // 修正模板字面量語法
        errorTitle: "錯誤",
        errorText: "儲存資料時發生錯誤，請稍後再試。",
        statusText: "入場",
        balanceText: "1000"
    },
    'en': {
        invalidInput: "Please enter a valid card number",
        successTitle: (cardNumber, status) => `Card ${cardNumber} ${status} success!`,  // 修正模板字面量語法
        errorTitle: "Error",
        errorText: "An error occurred while saving data. Please try again later.",
        statusText: "Enter",
        balanceText: "1000"
    },
};

const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示

let tip = languages[lang];  // 初始語言提示

//console.log("Current Language:", tip);  // 輸出當前語言提示
function Language(lang) {
    console.log("Current:", lang);  // 輸出當前語言提示
    tip = languages[lang];  // 初始語言提示
    console.log("Current:", tip);  // 輸出當前語言提示
}