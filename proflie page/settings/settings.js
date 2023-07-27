
  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const subtitlesToggle = document.getElementById('subtitlesToggle');
    const recommendationsToggle = document.getElementById('recommendationsToggle');
    const autoplayTrailersToggle = document.getElementById('autoplayTrailersToggle');
    const notificationsToggle = document.getElementById('notificationsToggle');
    const languageSelect = document.getElementById('languageSelect');
    const videoQualitySelect = document.getElementById('videoQualitySelect');

    darkModeToggle.addEventListener('change', () => {
        const message = darkModeToggle.checked ? 'Dark Mode is ON' : 'Dark Mode is OFF';
        showMessage(message);
  
        // Toggle dark mode
        document.body.classList.toggle('dark-mode');
        const settings = document.querySelectorAll('.setting, .setting-heading, .message');
        settings.forEach((setting) => {
          setting.classList.toggle('dark-mode');
        });
      });

    subtitlesToggle.addEventListener('change', () => {
      const message = subtitlesToggle.checked ? 'Subtitles are ON' : 'Subtitles are OFF';
      showMessage(message);
    });

    recommendationsToggle.addEventListener('change', () => {
      const message = recommendationsToggle.checked ? 'Recommendations are ON' : 'Recommendations are OFF';
      showMessage(message);
    });

    autoplayTrailersToggle.addEventListener('change', () => {
      const message = autoplayTrailersToggle.checked ? 'Auto-play Trailers are ON' : 'Auto-play Trailers are OFF';
      showMessage(message);
    });

    notificationsToggle.addEventListener('change', () => {
      const message = notificationsToggle.checked ? 'Notifications are ON' : 'Notifications are OFF';
      showMessage(message);
    });

    languageSelect.addEventListener('change', () => {
      const selectedLanguage = languageSelect.value;
      const message = `Language is set to ${selectedLanguage}`;
      showMessage(message);
    });

    videoQualitySelect.addEventListener('change', () => {
      const selectedQuality = videoQualitySelect.value;
      const message = `Video Quality is set to ${selectedQuality}`;
      showMessage(message);
    });

    function showMessage(message) {
      const messageDiv = document.getElementById('messageDiv');
      messageDiv.textContent = message;
      messageDiv.classList.add('message', 'show');

      setTimeout(() => {
        messageDiv.classList.remove('show');
      }, 3000);
    }

    // Function to update the time display
    function updateTime() {
      const currentTimeElement = document.getElementById('currentTime');
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      currentTimeElement.textContent = timeString;
    }

    // Update the time every second
    setInterval(updateTime, 1000);

    // Function to update version and copyright
    function updateVersionAndCopyright() {
      const versionElement = document.getElementById('version');
      const copyRightElement = document.getElementById('copyRight');
      const currentYear = new Date().getFullYear();
      const version = '1.80'; // Replace with your dynamic version if available
      versionElement.textContent = version;
      copyRightElement.textContent = `© ${currentYear} Movieflix.com. All rights reserved.`;
    }

    // Call the function to set version and copyright initially
    updateVersionAndCopyright();
  });



  document.addEventListener("DOMContentLoaded", () => {
    // Function to navigate back
    function goBack() {
      window.history.back();
    }

    // Add click event listener to the back icon
    const backIcon = document.getElementById('backIcon');
    backIcon.addEventListener('click', goBack);
  });

