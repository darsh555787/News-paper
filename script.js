// Example of toggling content visibility
document.querySelectorAll('.side-news li').forEach((item) => {
    item.addEventListener('click', () => {
      alert('More details coming soon!');
    });
  });

  function updateDate() {
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('date').innerText = `दिनांक: ${today.toLocaleDateString('hi-IN', options)}`;
}
window.onload = updateDate; // Ensures function runs after page loads

// Show the popup modal on page load
window.onload = function() {
    document.getElementById('popup-modal').style.display = 'block';
};

// Function to close the modal
function closeModal() {
    document.getElementById('popup-modal').style.display = 'none';
}

// Function to toggle video play/pause
function toggleVideo(videoElement) {
    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}
