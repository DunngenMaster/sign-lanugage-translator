document.getElementById("startForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form from reloading the popup

  const video = document.getElementById("video");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.style.display = "block";

    // Optional: Send the stream to another function or backend
    sendStream(stream);

  } catch (err) {
    alert("Error accessing camera: " + err.message);
  }
});

function sendStream(stream) {
  console.log("Stream started. You can now stream it frame by frame or forward to a server.");
}
