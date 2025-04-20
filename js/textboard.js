document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
      copyButton.addEventListener("click", () => {
        const text = document.getElementById("translatedText").value;
        navigator.clipboard.writeText(text)
         
      });
    }
    const speakButton = document.getElementById("speakButton");
    if (speakButton) {
      speakButton.addEventListener("click", () => {
        const text = document.getElementById("translatedText").value;
        if (!text.trim()) {
          alert("No text to speak!");
          return;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
      });
    }
  });
  