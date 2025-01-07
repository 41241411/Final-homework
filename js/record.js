// 模擬語言資料物件
const record = {
    en: {
        "daily-transactions": "Daily Transaction Records",
        "card-number": "Card Number",
        "search": "Search Transaction Records",
        "type": "Type",
        "info": "Info",
        "date": "Date",
    },
    zh: {
        "daily-transactions": "當日交易紀錄",
        "card-number": "卡號",
        "search": "搜尋交易紀錄",
        "type": "類型",
        "info": "資訊",
        "date": "日期",
    }
};

const languages = {
    en: {
        "cardNumberNotFound": "Card number does not exist",
        "cardNumberNotrecord": "No transaction records",
        'TransactionRecords': "Transaction Records",
        'RechargeRecords': "Recharge Records",
        'Rechargeamount': "Recharge amount",
    },
    zh: {
        "cardNumberNotFound": "卡號不存在",
        "cardNumberNotrecord": "無交易紀錄",
        'TransactionRecords': "交易紀錄",
        'RechargeRecords': "儲值紀錄",
        'Rechargeamount': "儲值金額",
    }
};

const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示

let tip = languages[lang];  // 初始語言提示

function recordLanguage(lang) {
    //record data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (record[lang][key]) {
            el.innerHTML = record[lang][key];
        }
    });

    tip = languages[lang];  // 初始語言提示
}