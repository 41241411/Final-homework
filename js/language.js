const translations = {
    zh: {
        pageTitles: {
            index: "度假村與遊樂園",
            menu: "功能表",
            ticket: "門禁驗票",
            payment: "消費支付",
            recharge: "儲值",
            balance: "查詢餘額",
            record: "當日交易紀錄",
        },
        home: "度假村與遊樂園",
        about: "關於我們",
        attractions: "景點介紹",
        contact: "聯絡我們",
        function: "功能表",
        ticket: "門禁驗票",
        "card-number": "卡號",
        welcome: "歡迎來到夢想度假村",
        slogan: "體驗最美好的假期與冒險",
        explore: "探索更多",
        "about-description": "我們的度假村結合大自然的美景與現代化設施，提供全家大小一個完美的放鬆場所。不論是冒險樂園、SPA中心，還是美味的餐廳，我們都應有盡有。",
        "adventure-park": "冒險樂園",
        "adventure-description": "充滿刺激與挑戰的冒險樂園，適合所有熱愛冒險的人士。",
        spa: "SPA 中心",
        "spa-description": "享受頂級的放鬆體驗，讓身心得到全方位的休息。",
        food: "美食饗宴",
        "food-description": "多元化的美食選擇，滿足您的味蕾。",
        name: "姓名",
        email: "電子郵件",
        message: "留言",
        submit: "送出",
        footer: "&copy; 2024 度假村與遊樂園. 版權所有.",
        ticket: "門禁驗票",
        payment: "消費支付",
        recharge: "儲值",
        balance: "查詢餘額",
        transaction: "當日交易紀錄",
    },
    en: {
        pageTitles: {
            index: "Resorts and Amusement Parks",
            menu: "menu",
            ticket: "Ticket Verification",
            payment: "Payment",
            recharge: "Recharge",
            balance: "Check Balance",
            record: "Transaction Record",
        },
        home: "Resorts and Amusement Parks",
        about: "About Us",
        attractions: "Attractions",
        contact: "Contact Us",
        function: "menu",
        ticket: "Ticket Verification",
        "card-number": "card number",
        welcome: "Welcome to Dream Resort",
        slogan: "Experience the best holiday and adventure",
        explore: "Explore More",
        "about-description": "Our resort combines natural beauty and modern facilities to offer the perfect getaway for the whole family. From adventure parks and spa centers to gourmet restaurants, we have it all.",
        "adventure-park": "Adventure Park",
        "adventure-description": "A thrilling and challenging adventure park for all adventure enthusiasts.",
        spa: "SPA Center",
        "spa-description": "Enjoy a top-notch relaxation experience for your body and mind.",
        food: "Gourmet Feast",
        "food-description": "A variety of gourmet options to satisfy your taste buds.",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
        footer: "&copy; 2024 Dream Resort and Park. All rights reserved.",
        ticket: "Ticket Verification",
        payment: "Payment",
        recharge: "Recharge",
        balance: "Check Balance",
        transaction: "Transaction Record",
    }
};

// 定義menu資料
const menu = {
    zh: {
        title: "功能表",
        ticketing: "門禁驗票",
        "ticketing-description": "快速驗證您的門票，進入特定區域，享受無縫的門禁體驗。",
        payment: "消費支付",
        "payment-description": "在各大商店輕鬆支付，無論是購物還是服務消費，均可即時結算。",
        recharge: "儲值",
        "recharge-description": "將資金充值到您的帳戶，隨時準備好進行消費或其他服務。",
        balance: "查詢餘額",
        "balance-description": "隨時查詢您的帳戶餘額，確保交易順利無阻。",
        transaction: "當日交易紀錄",
        "transaction-description": "查看當日的交易紀錄，了解每筆消費與充值的詳情。",
        go: "前往",
    },
    en: {
        title: "Menu",
        ticketing: "Ticket Verification",
        "ticketing-description": "Quickly verify your ticket and access specific areas for a seamless experience.",
        payment: "Payment",
        "payment-description": "Easily pay in various stores, whether for shopping or service consumption.",
        recharge: "Recharge",
        "recharge-description": "Deposit funds into your account, always ready for consumption or other services.",
        balance: "Check Balance",
        "balance-description": "Check your account balance at any time to ensure smooth transactions.",
        transaction: "Today's Transaction Record",
        "transaction-description": "View today's transaction records to understand the details of each expense and recharge.",
        go: "Go",
    }
};

// 動態載入組件並執行語言切換
function loadComponent(id, file, callback) {
    const targetElement = document.getElementById(id);
    if (!targetElement) {
        console.error(`Element with ID "${id}" not found.`);
        return;
    }

    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(html => {
            targetElement.innerHTML = html;
            if (callback) callback();
        })
        .catch(err => console.error(err));
}

let totalAmount = 0;


function setLanguage(lang) {

    const path = window.location.pathname.split('/').pop(); // 取得當前頁面名稱
    const pageKey = path.split('/').pop().replace('.html', '') || 'index';  // 取最後一個路徑部分並去掉 .html 扩展名
    console.log(path, pageKey);
    // 更新 <title> 標籤內容
    document.title = translations[lang].pageTitles[pageKey] || '預設標題';

    console.log("Current Language:", lang);  // 輸出當前語言提示
    // 判斷 Language 函數是否存在
    if (typeof Language === 'function') {
        console.log("Language 函數已定義，可以執行");
        // 在這裡可以調用 Language 函數
        Language(lang);
    } else {
        console.log("Language 函數未定義，無法執行");
    }
    
    if (typeof paymentLanguage === 'function') {
        console.log("paymentLanguage 函數已定義，可以執行");
        // 在這裡可以調用 LangpaymentLanguageuage 函數
        paymentLanguage(lang);
    } else {
        console.log("paymentLanguage 函數未定義，無法執行");
    }
    
    if (typeof rechargeLanguage === 'function') {
        console.log("rechargeLanguage 函數已定義，可以執行");
        // 在這裡可以調用 rechargeLanguage 函數
        rechargeLanguage(lang);
    } else {
        console.log("rechargeLanguage 函數未定義，無法執行");
    }

    if (typeof balanceLanguage === 'function') {
        console.log("balanceLanguage 函數已定義，可以執行");
        // 在這裡可以調用 balanceLanguage 函數
        balanceLanguage(lang);
    } else {
        console.log("balanceLanguage 函數未定義，無法執行");
    }

    if (typeof recordLanguage === 'function') {
        console.log("recordLanguage 函數已定義，可以執行");
        // 在這裡可以調用 recordLanguage 函數
        recordLanguage(lang);
    } else {
        console.log("recordLanguage 函數未定義，無法執行");
    }

    //更改Menu頁面中帶有 data-lang 的文字
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (menu[lang][key]) {
            el.innerHTML = menu[lang][key];
        }
    });

    // 更新首頁頁面中帶有 data-lang 的文字
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 更新 Navbar
    loadComponent("navbar-container", "navbar.html", () => {
        document.querySelectorAll("#navbar-container [data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    });

    // 更新 Footer
    loadComponent("footer-container", "footer.html", () => {
        document.querySelectorAll("#footer-container [data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    });

    // 存储语言偏好到本地
    localStorage.setItem('preferredLanguage', lang);

    // 更新URL
    const currentUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, '', `${currentUrl}?lang=${lang}`);
}

// 初始化語言設置
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || savedLang || 'zh'; // 默認為中文

    // 如果有儲存的語言且未在URL中設定，更新URL為儲存的語言
    if (!urlParams.get('lang') && savedLang) {
        const currentUrl = window.location.href.split('?')[0];
        window.history.replaceState({}, '', `${currentUrl}?lang=${savedLang}`);
    }

    setLanguage(lang);
}

// 初始化語言
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
});





