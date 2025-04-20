const socket = io('http://127.0.0.1:5000');

document.getElementById("startForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const video = document.getElementById("video");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.style.display = "block";

    document.getElementById("logo").style.display = "none";
    document.getElementById("startForm").style.display = "none";
    document.getElementById("translationBoard").style.display = "block";

    startSignLanguageRecognition(video);
  } catch (err) {
    alert("Error accessing camera: " + err.message);
  }
});

function startSignLanguageRecognition(videoElement) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  setInterval(() => {
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    const frameData = canvas.toDataURL("image/jpeg");
    socket.emit("frame", { image: frameData });
  }, 500);
}

socket.on("prediction", (data) => {
  document.getElementById("translatedText").value = data.text;
});
