// main-page.js
// JavaScript untuk halaman utama SHOP.CO

// Mapping produk dengan ID untuk navigasi
const productNavigation = {
  "T-shirt with Tape Details": "tshirt-tape",
  "Skinny Fit Jeans": "skinny-jeans",
  "Checkered Shirt": "checkered-shirt",
  "Sleeve Striped T-shirt": "striped-tshirt",
  "Vertical Striped Shirt": "checkered-shirt", // Using same as checkered for demo
  "Courage Graphic T-shirt": "tshirt-tape", // Using same as tape tshirt for demo
  "Loose Fit Bermuda Shorts": "skinny-jeans", // Using same as jeans for demo
  "Faded Skinny Jeans": "skinny-jeans",
};

// Fungsi untuk menambahkan event listener ke product cards
function initializeProductNavigation() {
  // Get all product cards
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    // Add cursor pointer style
    card.style.cursor = "pointer";
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    // Add hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });

    // Add click event
    card.addEventListener("click", function () {
      const productName = this.querySelector("h3").textContent.trim();
      const productId = productNavigation[productName];

      if (productId) {
        // Add loading effect
        this.style.opacity = "0.7";
        this.style.pointerEvents = "none";

        // Navigate to product detail page
        window.location.href = `product-detail.html?id=${productId}`;
      } else {
        console.warn("Product ID not found for:", productName);
        showNotification("Product details coming soon!", "info");
      }
    });
  });
}

// Fungsi untuk inisialisasi brand carousel
function initializeBrandCarousel() {
  const brandLogos = document.querySelector(".brand-logos");
  if (!brandLogos) return;

  // Clone brands for seamless scroll
  const brands = brandLogos.innerHTML;
  brandLogos.innerHTML = brands + brands + brands;

  // Add animation
  brandLogos.style.animation = "scroll 30s linear infinite";

  // Pause on hover
  brandLogos.addEventListener("mouseenter", function () {
    this.style.animationPlayState = "paused";
  });

  brandLogos.addEventListener("mouseleave", function () {
    this.style.animationPlayState = "running";
  });
}

// Fungsi untuk inisialisasi customer reviews slider
function initializeReviewsSlider() {
  const reviewsSlider = document.querySelector(".reviews-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (!reviewsSlider || !prevBtn || !nextBtn) return;

  let currentSlide = 0;
  const reviews = reviewsSlider.querySelectorAll(".review-card");
  const totalReviews = reviews.length;

  // Set initial position
  reviewsSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Next button
  nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalReviews;
    reviewsSlider.style.transform = `translateX(-${currentSlide * (100 / 3)}%)`;
  });

  // Previous button
  prevBtn.addEventListener("click", function () {
    currentSlide = currentSlide === 0 ? totalReviews - 1 : currentSlide - 1;
    reviewsSlider.style.transform = `translateX(-${currentSlide * (100 / 3)}%)`;
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    nextBtn.click();
  }, 5000);
}

// Fungsi untuk inisialisasi top banner
function initializeTopBanner() {
  const closeBanner = document.querySelector(".close-banner");
  const topBanner = document.querySelector(".top-banner");

  if (!closeBanner || !topBanner) return;

  closeBanner.addEventListener("click", function () {
    topBanner.style.transform = "translateY(-100%)";
    topBanner.style.opacity = "0";
    setTimeout(() => {
      topBanner.style.display = "none";
    }, 300);
  });
}

// Fungsi untuk inisialisasi search bar
function initializeSearchBar() {
  const searchInput = document.querySelector(".search-bar input");
  const searchIcon = document.querySelector(".search-bar i");

  if (!searchInput || !searchIcon) return;

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch(this.value);
    }
  });

  searchIcon.addEventListener("click", function () {
    const searchValue = searchInput.value;
    if (searchValue.trim()) {
      performSearch(searchValue);
    }
  });
}

// Fungsi untuk melakukan pencarian
function performSearch(query) {
  if (!query.trim()) return;

  // Simulate search functionality
  showNotification(`Searching for "${query}"...`, "info");

  // In a real app, this would redirect to search results page
  setTimeout(() => {
    showNotification("Search feature coming soon!", "info");
  }, 1000);
}

// Fungsi untuk inisialisasi newsletter
function initializeNewsletter() {
  const subscribeBtn = document.querySelector(".subscribe-btn");
  const emailInput = document.querySelector(
    '.newsletter-form input[type="email"]'
  );

  if (!subscribeBtn || !emailInput) return;

  subscribeBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (!email) {
      showNotification("Please enter your email address", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    // Simulate subscription
    this.textContent = "Subscribing...";
    this.disabled = true;

    setTimeout(() => {
      showNotification("Thank you for subscribing!", "success");
      emailInput.value = "";
      this.textContent = "Subscribe to Newsletter";
      this.disabled = false;
    }, 2000);
  });

  // Allow Enter key to submit
  emailInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      subscribeBtn.click();
    }
  });
}

// Fungsi untuk validasi email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fungsi untuk inisialisasi smooth scrolling
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// Fungsi untuk inisialisasi mobile menu (jika diperlukan)
function initializeMobileMenu() {
  // Check if mobile menu toggle exists
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  if (!mobileToggle || !nav) return;

  mobileToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// Fungsi untuk load dan update cart counter
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Create or update cart counter
  let cartCounter = document.querySelector(".cart-counter");
  const cartIcon = document.querySelector(".fa-shopping-cart").parentElement;

  if (!cartCounter) {
    cartCounter = document.createElement("span");
    cartCounter.className = "cart-counter";
    cartCounter.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            background: #ff6b6b;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        `;
    cartIcon.style.position = "relative";
    cartIcon.appendChild(cartCounter);
  }

  cartCounter.textContent = totalItems;
  cartCounter.style.display = totalItems > 0 ? "flex" : "none";
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#3b82f6"
        };
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

  // Add animation keyframes if not exists
  if (!document.getElementById("notification-styles")) {
    const style = document.createElement("style");
    style.id = "notification-styles";
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `;
    document.head.appendChild(style);
  }

  notification.textContent = message;
  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-in forwards";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 3000);
}

// Fungsi untuk inisialisasi intersection observer (animasi scroll)
function initializeScrollAnimations() {
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

  // Add animation to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Inisialisasi semua fungsi ketika DOM loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeProductNavigation();
  initializeBrandCarousel();
  initializeReviewsSlider();
  initializeTopBanner();
  initializeSearchBar();
  initializeNewsletter();
  initializeSmoothScrolling();
  initializeMobileMenu();
  updateCartCounter();
  initializeScrollAnimations();

  // Show welcome message
  setTimeout(() => {
    showNotification("Welcome to SHOP.CO! 🛍️", "success");
  }, 1000);
});

// Update cart counter when storage changes
window.addEventListener("storage", function (e) {
  if (e.key === "cart") {
    updateCartCounter();
  }
});
