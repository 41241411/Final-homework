const payment = {
    en: {
        "product-information-header": "Product Information",
        "productName": "Product Name",
        "quantity": "Quantity",
        "unitPrice": "Unit Price",
        "subtotal": "Subtotal",
        "total-amount": 'Total Amount：<span id="totalAmount">0</span> dollar',
        "transaction-info": "Transaction Information",
        "card-number": "Card Number:",
        "operation": "Operation",
    },
    zh: {
        "product-information-header": "商品資訊",
        "productName": "商品名稱",
        "quantity": "數量",
        "unitPrice": "單價",
        "subtotal": "小計",
        "total-amount": '總金額：<span id="totalAmount">0</span> 元',
        "transaction-info": "交易資訊",
        "card-number": "卡號:",
        "operation": "操作",
    },
};

const languages = {
    en: {
        "error": "Error",
        "invalidstatus": "Card number not in 'Enter', please check and try again!",
        "insufficientbalance": "Insufficient balance, please check your balance and try again!",
        "success": "Transaction successful!",
        "successtext": (totalAmount,newBalance)=> `Deduction ${totalAmount},remaining balance: <span id='remainingBalance'>${newBalance}</span>.`,
        "failure": "Transaction failed",
        "failuretext": "Please try again later.",
    },
    zh: {
        "error": "錯誤",
        "invalidstatus": "卡號未處於'進場'狀態，請檢查後重試！",
        "insufficientbalance": "餘額不足，請檢查後重試！",
        "success": "交易成功！",
        "successtext":(totalAmount,newBalance)=> `扣款 ${totalAmount}元，剩餘餘額：<span id='remainingBalance'>${newBalance}</span>。`,
        "failure": "交易失敗",
        "failuretext": "請稍後再試。",
    },
};

const savedLang = localStorage.getItem('preferredLanguage');
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文
//console.log("Current Language:", lang);  // 輸出當前語言提示

let tip = languages[lang];  // 初始語言提示

function paymentLanguage(lang) {
    //更改payment頁面中帶有 data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (payment[lang][key]) {
            el.innerHTML = payment[lang][key];
        }
    });

    const totalAmountElement = document.getElementById("totalAmount");
    totalAmountElement.textContent = totalAmount;  // 更新總金額顯示

    tip = languages[lang];  // 初始語言提示
}
