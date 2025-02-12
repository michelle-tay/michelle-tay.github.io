/*window.onload = () => {
    alert("Thank you for visiting my website! Take your time exploring my work, and don’t forget to enjoy the latest music I've been vibing to, just hit play music at the bottom right! \n\n -Michelle");
};*/

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("music");
    const playPauseBtn = document.getElementById("play-pause-btn");
  
    playPauseBtn.addEventListener("click", () => {
      if (music.paused) {
        music.play();
        playPauseBtn.textContent = "⏸️ Pause Music"; // Emoji for Pause
      } else {
        music.pause();
        playPauseBtn.textContent = "▶️ Play Music"; // Emoji for Play
      }
    });
  });

  function adjustSpacing() {
    const breadcrumb = document.querySelector(".breadcrumb");
    const header = document.querySelector("header");
    const firstSection = document.querySelector("section");
  
    const headerHeight = header.offsetHeight;
    const breadcrumbHeight = breadcrumb.offsetHeight;
  
    // Set padding dynamically
    firstSection.style.paddingTop = `${headerHeight + breadcrumbHeight + 20}px`;
  }


  document.addEventListener("DOMContentLoaded", () => {
    const musicPlayer = document.querySelector(".music-player");
  
    const hideMusicPlayerOnMobile = () => {
      if (window.innerWidth <= 768) {
        musicPlayer.style.display = "none";
      } else {
        musicPlayer.style.display = "flex"; // Ensure it shows on larger screens
      }
    };
  
    // Run on load and resize
    hideMusicPlayerOnMobile();
    window.addEventListener("resize", hideMusicPlayerOnMobile);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const navHeight = 70; // Adjust this value based on the height of your navigation bar

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  });
});


