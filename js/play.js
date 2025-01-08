const speakButton = document.getElementById("speak-btn");

// 設置語音合成實例
const synth = window.speechSynthesis;
let isSpeaking = false;
let utterance = null;

speakButton.addEventListener("click", () => {
    if (isSpeaking) {
        // 如果正在播報，則停止語音
        synth.cancel();
        if (speakButton.textContent === "停止播報") {
            speakButton.textContent = "播報頁面文字";
        } else {
            speakButton.textContent = "Speak Page Text";
        }
    } else {
        // 如果尚未播報，則開始播報
        const text = document.querySelector(".play").innerText;  // 取得整個頁面的文字
        utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
        if (speakButton.textContent === "播報頁面文字") {
            speakButton.textContent = "停止播報";
        } else {
            speakButton.textContent = "Stop Speaking";
        }
    }
    isSpeaking = !isSpeaking;  // 切換狀態
});