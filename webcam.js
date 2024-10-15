const videoElement = document.getElementById('webcam');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let stream; // To store the webcam stream

startButton.addEventListener('click', () => {
    // Request access to the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream) => {
            stream = mediaStream; // Store the stream for later use
            videoElement.srcObject = stream;
            videoElement.style.display = 'block'; // Show the video
            startButton.style.display = 'none'; // Hide the start button
            stopButton.style.display = 'inline'; // Show the stop button
        })
        .catch((error) => {
            console.error("Error accessing webcam: ", error);
        });
});

stopButton.addEventListener('click', () => {
    // Stop all video tracks to turn off the webcam
    stream.getTracks().forEach(track => track.stop());
    videoElement.style.display = 'none'; // Hide the video
    startButton.style.display = 'inline'; // Show the start button
    stopButton.style.display = 'none'; // Hide the stop button
});
