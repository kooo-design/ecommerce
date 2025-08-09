document.addEventListener("DOMContentLoaded", function () {
  // Close banner functionality
  const closeBanner = document.querySelector(".close-banner");
  const topBanner = document.querySelector(".top-banner");

  if (closeBanner && topBanner) {
    closeBanner.addEventListener("click", function () {
      topBanner.style.display = "none";
    });
  }

  // Reviews slider functionality
  const reviewsSlider = document.querySelector(".reviews-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (reviewsSlider && prevBtn && nextBtn) {
    let currentIndex = 0;
    const reviewCards = document.querySelectorAll(".review-card");
    const cardWidth = 370; // card width + gap

    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        reviewsSlider.scrollTo({
          left: currentIndex * cardWidth,
          behavior: "smooth",
        });
      }
    });

    nextBtn.addEventListener("click", function () {
      if (currentIndex < reviewCards.length - 1) {
        currentIndex++;
        reviewsSlider.scrollTo({
          left: currentIndex * cardWidth,
          behavior: "smooth",
        });
      }
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  const subscribeBtn = document.querySelector(".subscribe-btn");
  const emailInput = document.querySelector(".input-group input");

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (email) {
        if (validateEmail(email)) {
          alert("Thank you for subscribing to our newsletter!");
          emailInput.value = "";
        } else {
          alert("Please enter a valid email address.");
        }
      } else {
        alert("Please enter your email address.");
      }
    });

    emailInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        subscribeBtn.click();
      }
    });
  }

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Search functionality
  const searchInput = document.querySelector(".search-bar input");

  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const searchTerm = this.value.trim();
        if (searchTerm) {
          alert(`Searching for: ${searchTerm}`);
          // In a real application, this would trigger a search
        }
      }
    });
  }

  // Product card hover effects
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    card.addEventListener("click", function () {
      const productName = this.querySelector("h3").textContent;
      alert(`Viewing product: ${productName}`);
      // In a real application, this would navigate to product page
    });
  });

  // Style cards click functionality
  const styleCards = document.querySelectorAll(".style-card");

  styleCards.forEach((card) => {
    card.addEventListener("click", function () {
      const styleName = this.querySelector("h3").textContent;
      alert(`Browsing ${styleName} style products`);
      // In a real application, this would filter products by style
    });
  });

  // CTA button functionality
  const ctaBtn = document.querySelector(".cta-btn");

  if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
      // Smooth scroll to new arrivals section
      const newArrivals = document.querySelector(".new-arrivals");
      if (newArrivals) {
        newArrivals.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  // View All buttons functionality
  const viewAllBtns = document.querySelectorAll(".view-all-btn");

  viewAllBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Loading more products...");
      // In a real application, this would load more products
    });
  });

  // Shopping cart icon functionality
  const cartIcon = document.querySelector(".header-icons .fa-shopping-cart");

  if (cartIcon) {
    cartIcon.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Shopping cart is empty");
      // In a real application, this would open the shopping cart
    });
  }

  // User icon functionality
  const userIcon = document.querySelector(".header-icons .fa-user");

  if (userIcon) {
    userIcon.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Please log in to your account");
      // In a real application, this would open login modal
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading animation to buttons
  function addLoadingState(button, duration = 2000) {
    const originalText = button.textContent;
    button.textContent = "Loading...";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, duration);
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".product-card, .style-card, .review-card"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
