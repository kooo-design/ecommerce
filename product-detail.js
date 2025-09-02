// product-detail.js
// JavaScript untuk halaman detail produk

// Database produk
const productsDatabase = {
  "tshirt-tape": {
    id: "tshirt-tape",
    name: "T-shirt with Tape Details",
    price: 120,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    category: "T-Shirts",
    description:
      "A contemporary t-shirt featuring unique tape details along the seams. Made from premium cotton blend for ultimate comfort and durability. Perfect for casual wear and street style looks.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&sat=-50",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&hue=30",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&hue=60",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#001f3f" },
      { name: "Gray", hex: "#666666" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "100% Premium Cotton Blend",
      "Unique Tape Detail Design",
      "Regular Fit",
      "Machine Washable",
      "Available in Multiple Colors",
    ],
    inStock: true,
    stockCount: 150,
  },
  "skinny-jeans": {
    id: "skinny-jeans",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    category: "Jeans",
    description:
      "Classic skinny fit jeans crafted from premium denim with stretch technology for comfort and style. Perfect for both casual and semi-formal occasions. Features a modern cut that flatters all body types.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&sat=-30",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&brightness=-20",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&hue=15",
    ],
    colors: [
      { name: "Dark Blue", hex: "#1e3a8a" },
      { name: "Light Blue", hex: "#3b82f6" },
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#6b7280" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    features: [
      "Premium Denim with Stretch",
      "Skinny Fit Design",
      "5-Pocket Classic Style",
      "Button and Zip Closure",
      "Fade Resistant",
    ],
    inStock: true,
    stockCount: 85,
  },
  "checkered-shirt": {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    category: "Shirts",
    description:
      "Timeless checkered shirt with a modern twist. Features premium cotton fabric and classic button-down design perfect for layering or wearing solo. A wardrobe staple that never goes out of style.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&hue=30",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&hue=60",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&sat=-40",
    ],
    colors: [
      { name: "Blue/White", hex: "#1e40af" },
      { name: "Red/White", hex: "#dc2626" },
      { name: "Green/White", hex: "#16a34a" },
      { name: "Black/White", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "100% Pure Cotton",
      "Classic Checkered Pattern",
      "Button-Down Collar",
      "Long Sleeves with Button Cuffs",
      "Chest Pocket Detail",
    ],
    inStock: true,
    stockCount: 120,
  },
  "striped-tshirt": {
    id: "striped-tshirt",
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    category: "T-Shirts",
    description:
      "Stylish striped t-shirt with contrasting sleeve details. Made from soft, breathable fabric perfect for everyday wear and casual outings. A trendy piece that adds personality to your casual wardrobe.",
    images: [
      "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/476397/item/idgoods_09_476397_3x4.jpg?width=494",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&hue=30",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&hue=60",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&sat=-30",
    ],
    colors: [
      { name: "Navy/White", hex: "#1e40af" },
      { name: "Black/White", hex: "#000000" },
      { name: "Red/White", hex: "#dc2626" },
      { name: "Green/White", hex: "#16a34a" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    features: [
      "Soft Cotton Jersey",
      "Contrasting Stripe Design",
      "Crew Neck Style",
      "Short Sleeves",
      "Comfortable Regular Fit",
    ],
    inStock: true,
    stockCount: 200,
  },
};

// Variabel global untuk produk saat ini
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let currentImageIndex = 0;

// Fungsi untuk mendapatkan parameter URL
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Fungsi untuk memuat data produk
function loadProductData() {
  const productId = getUrlParameter("id");

  if (!productId || !productsDatabase[productId]) {
    // Jika produk tidak ditemukan, redirect ke halaman utama
    window.location.href = "index.html";
    return;
  }

  currentProduct = productsDatabase[productId];
  renderProductDetail();
}

// Fungsi untuk merender detail produk
function renderProductDetail() {
  if (!currentProduct) return;

  // Update judul halaman
  document.getElementById(
    "page-title"
  ).textContent = `${currentProduct.name} - SHOP.CO`;

  // Update breadcrumb
  document.getElementById("breadcrumb-category").textContent =
    currentProduct.category;
  document.getElementById("breadcrumb-product").textContent =
    currentProduct.name;

  // Update nama produk
  document.getElementById("product-name").textContent = currentProduct.name;

  // Update rating
  const stars =
    "★".repeat(Math.floor(currentProduct.rating)) +
    "☆".repeat(5 - Math.floor(currentProduct.rating));
  document.getElementById("product-stars").textContent = stars;
  document.getElementById(
    "rating-text"
  ).textContent = `${currentProduct.rating}/5`;

  // Update harga
  document.getElementById(
    "current-price"
  ).textContent = `$${currentProduct.price}`;

  if (currentProduct.originalPrice) {
    document.getElementById(
      "original-price"
    ).textContent = `$${currentProduct.originalPrice}`;
    document.getElementById("original-price").style.display = "inline";
    document.getElementById(
      "discount-badge"
    ).textContent = `-${currentProduct.discount}%`;
    document.getElementById("discount-badge").style.display = "inline";
  }

  // Update deskripsi
  document.getElementById("product-description").textContent =
    currentProduct.description;

  // Update gambar
  renderProductImages();

  // Update opsi warna
  renderColorOptions();

  // Update opsi ukuran
  renderSizeOptions();
}

// Fungsi untuk merender gambar produk
function renderProductImages() {
  const mainImage = document.getElementById("main-image");
  const thumbnailContainer = document.getElementById("thumbnail-container");

  // Set gambar utama
  mainImage.src = currentProduct.images[0];
  mainImage.alt = currentProduct.name;

  // Buat thumbnail
  thumbnailContainer.innerHTML = "";
  currentProduct.images.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.alt = `${currentProduct.name} - Image ${index + 1}`;
    thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;
    thumbnail.onclick = () => selectImage(index);
    thumbnailContainer.appendChild(thumbnail);
  });
}

// Fungsi untuk memilih gambar
function selectImage(index) {
  currentImageIndex = index;
  document.getElementById("main-image").src = currentProduct.images[index];

  // Update active thumbnail
  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

// Fungsi untuk merender opsi warna
function renderColorOptions() {
  const colorContainer = document.getElementById("color-options");
  colorContainer.innerHTML = "";

  currentProduct.colors.forEach((color, index) => {
    const colorOption = document.createElement("div");
    colorOption.className = `color-option ${index === 0 ? "active" : ""}`;
    colorOption.style.backgroundColor = color.hex;
    colorOption.title = color.name;
    colorOption.onclick = () => selectColor(index);

    // Border khusus untuk warna putih
    if (color.hex === "#FFFFFF") {
      colorOption.style.border = "2px solid #e0e0e0";
    }

    colorContainer.appendChild(colorOption);
  });

  // Set warna default
  selectedColor = 0;
}

// Fungsi untuk memilih warna
function selectColor(index) {
  selectedColor = index;
  document.querySelectorAll(".color-option").forEach((option, i) => {
    option.classList.toggle("active", i === index);
  });
}

// Fungsi untuk merender opsi ukuran
function renderSizeOptions() {
  const sizeContainer = document.getElementById("size-options");
  sizeContainer.innerHTML = "";

  currentProduct.sizes.forEach((size, index) => {
    const sizeOption = document.createElement("div");
    sizeOption.className = `size-option ${index === 0 ? "active" : ""}`;
    sizeOption.textContent = size;
    sizeOption.onclick = () => selectSize(index);
    sizeContainer.appendChild(sizeOption);
  });

  // Set ukuran default
  selectedSize = 0;
}

// Fungsi untuk memilih ukuran
function selectSize(index) {
  selectedSize = index;
  document.querySelectorAll(".size-option").forEach((option, i) => {
    option.classList.toggle("active", i === index);
  });
}

// Fungsi untuk mengubah jumlah
function increaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue < 10) {
    quantityInput.value = currentValue + 1;
  }
}

function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Fungsi untuk menambah ke keranjang
function addToCart() {
  if (selectedColor === null || selectedSize === null) {
    alert("Please select color and size");
    return;
  }

  const quantity = parseInt(document.getElementById("quantity").value);
  const selectedColorName = currentProduct.colors[selectedColor].name;
  const selectedSizeName = currentProduct.sizes[selectedSize];

  // Simulate adding to cart
  const cartItem = {
    id: currentProduct.id,
    name: currentProduct.name,
    price: currentProduct.price,
    color: selectedColorName,
    size: selectedSizeName,
    quantity: quantity,
    image: currentProduct.images[0],
  };

  // Save to localStorage (in real app, this would be sent to server)
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Check if item already exists in cart
  const existingItemIndex = cart.findIndex(
    (item) =>
      item.id === cartItem.id &&
      item.color === cartItem.color &&
      item.size === cartItem.size
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += cartItem.quantity;
  } else {
    cart.push(cartItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Show success message
  showNotification("Product added to cart successfully!", "success");

  // Update cart icon (if you have cart counter)
  updateCartCounter();
}

// Fungsi untuk toggle wishlist
function toggleWishlist() {
  const wishlistIcon = document.getElementById("wishlist-icon");
  const isInWishlist = wishlistIcon.classList.contains("fas");

  if (isInWishlist) {
    wishlistIcon.classList.remove("fas");
    wishlistIcon.classList.add("far");
    showNotification("Removed from wishlist", "info");
  } else {
    wishlistIcon.classList.remove("far");
    wishlistIcon.classList.add("fas");
    showNotification("Added to wishlist", "success");
  }

  // Save to localStorage
  let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  if (isInWishlist) {
    wishlist = wishlist.filter((id) => id !== currentProduct.id);
  } else {
    wishlist.push(currentProduct.id);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
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

  // Add animation keyframes
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

// Fungsi untuk update counter keranjang
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update cart counter if exists
  const cartCounter = document.querySelector(".cart-counter");
  if (cartCounter) {
    cartCounter.textContent = totalItems;
    cartCounter.style.display = totalItems > 0 ? "inline" : "none";
  }
}

// Fungsi untuk load produk terkait
function loadRelatedProducts() {
  const relatedGrid = document.getElementById("related-products-grid");
  if (!relatedGrid) return;

  // Get other products from the same category
  const relatedProducts = Object.values(productsDatabase)
    .filter((product) => product.id !== currentProduct.id)
    .slice(0, 4);

  relatedGrid.innerHTML = "";

  relatedProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.style.cursor = "pointer";

    const stars =
      "★".repeat(Math.floor(product.rating)) +
      "☆".repeat(5 - Math.floor(product.rating));

    productCard.innerHTML = `
            <img src="${product.images[0]}" alt="${
      product.name
    }" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
            <h3 style="font-size: 1.1rem; margin-bottom: 8px; font-weight: 600;">${
              product.name
            }</h3>
            <div class="rating" style="margin-bottom: 8px;">
                <div class="stars" style="color: #ffc107; display: inline; margin-right: 8px;">${stars}</div>
                <span style="color: #666; font-size: 14px;">${
                  product.rating
                }/5</span>
            </div>
            <div class="price" style="font-size: 1.2rem; font-weight: 700;">
                <span class="current" style="color: #000;">${
                  product.price
                }</span>
                ${
                  product.originalPrice
                    ? `
                    <span class="original" style="color: #999; text-decoration: line-through; margin-left: 10px; font-size: 1rem;">${product.originalPrice}</span>
                    <span class="discount" style="background: #ff6b6b; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; margin-left: 8px;">-${product.discount}%</span>
                `
                    : ""
                }
            </div>
        `;

    productCard.onclick = () => {
      window.location.href = `product-detail.html?id=${product.id}`;
    };

    relatedGrid.appendChild(productCard);
  });
}

// Fungsi untuk check wishlist status
function checkWishlistStatus() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  const wishlistIcon = document.getElementById("wishlist-icon");

  if (wishlist.includes(currentProduct.id)) {
    wishlistIcon.classList.remove("far");
    wishlistIcon.classList.add("fas");
  }
}

// Event listener untuk input quantity
document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("quantity");
  if (quantityInput) {
    quantityInput.addEventListener("change", function () {
      let value = parseInt(this.value);
      if (value < 1) value = 1;
      if (value > 10) value = 10;
      this.value = value;
    });
  }
});

// Inisialisasi halaman
document.addEventListener("DOMContentLoaded", function () {
  loadProductData();
  loadRelatedProducts();
  updateCartCounter();
  checkWishlistStatus();
});

// Keyboard navigation untuk gambar
document.addEventListener("keydown", function (e) {
  if (!currentProduct) return;

  if (e.key === "ArrowLeft") {
    const newIndex =
      currentImageIndex > 0
        ? currentImageIndex - 1
        : currentProduct.images.length - 1;
    selectImage(newIndex);
  } else if (e.key === "ArrowRight") {
    const newIndex =
      currentImageIndex < currentProduct.images.length - 1
        ? currentImageIndex + 1
        : 0;
    selectImage(newIndex);
  }
});
