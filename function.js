document.addEventListener("DOMContentLoaded", function () {

  function updateClock() {
    const clockElement = document.getElementById("current-datetime");
    if (clockElement) {
      const now = new Date();
      const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      };
      clockElement.textContent = "Current Date & Time: " + now.toLocaleDateString('en-US', options);
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        themeToggleBtn.textContent = "Light Mode";
      } else {
        themeToggleBtn.textContent = "Dark Mode";
      }
    });
  }

  const readMoreBtn = document.getElementById("read-more-btn");
  const fullInterests = document.getElementById("full-interests");
  const shortInterests = document.getElementById("short-interests");

  if (readMoreBtn && fullInterests && shortInterests) {
    readMoreBtn.addEventListener("click", function () {
      if (fullInterests.classList.contains("hidden-text")) {
        fullInterests.classList.remove("hidden-text");
        shortInterests.style.display = "none";
        readMoreBtn.textContent = "Read Less";
      } else {
        fullInterests.classList.add("hidden-text");
        shortInterests.style.display = "block";
        readMoreBtn.textContent = "Read More";
      }
    });
  }

  const projectCards = document.querySelectorAll(".project-card");
  const prevBtn = document.getElementById("prev-project");
  const nextBtn = document.getElementById("next-project");
  const counterText = document.getElementById("project-counter");
  const dotIndicators = document.querySelectorAll(".dot-indicator");
  let currentIndex = 0;

  function showProject(index) {
    projectCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    dotIndicators.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    if (counterText) {
      counterText.textContent = (index + 1) + " / " + projectCards.length;
    }
  }

  if (prevBtn && nextBtn && projectCards.length > 0) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex === 0) ? projectCards.length - 1 : currentIndex - 1;
      showProject(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex === projectCards.length - 1) ? 0 : currentIndex + 1;
      showProject(currentIndex);
    });

    dotIndicators.forEach((dot) => {
      dot.addEventListener("click", function () {
        currentIndex = parseInt(this.getAttribute("data-slide"));
        showProject(currentIndex);
      });
    });
  }

  const expandButtons = document.querySelectorAll(".expand-btn");
  expandButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const cardBody = this.parentElement;
      const details = cardBody.querySelector(".project-details");

      if (details.classList.contains("hidden-text")) {
        details.classList.remove("hidden-text");
        this.textContent = "Hide Details";
      } else {
        details.classList.add("hidden-text");
        this.textContent = "View More Details";
      }
    });
  });

  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});