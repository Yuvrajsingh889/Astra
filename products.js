const products = [
  {
    id: 1,
    name: "Arduino Uno",
    price: 350,
    image: "images/arduino_uno.jpg",
    description: "The Arduino Uno is a robust microcontroller board powered by the ATmega328P, perfect for beginners and seasoned makers. It offers 14 digital input/output pins (6 with PWM), 6 analog inputs, a 16 MHz ceramic resonator, USB interface, power jack, ICSP header, and reset button. Compatible with the Arduino IDE, it supports a vast ecosystem of shields and sensors, making it ideal for prototyping IoT devices, robotics, and interactive projects. Its open-source nature and extensive community support simplify learning and troubleshooting. Whether you're building a smart home gadget or teaching electronics, the Arduino Uno provides a reliable, cost-effective platform for endless creativity."
  },
  {
    id: 2,
    name: "Raspberry Pi 4",
    price: 2500,
    image: "images/images.jpg",
    description: "The Raspberry Pi 4 is a powerful single-board computer with a quad-core Cortex-A72 processor and 4GB RAM, revolutionizing DIY computing. It features dual-band Wi-Fi, Bluetooth 5.0, two USB 3.0 ports, two micro-HDMI ports supporting 4K displays, and a 40-pin GPIO for hardware interfacing. Ideal for home media centers, retro gaming consoles, web servers, or IoT hubs, it runs Linux-based OS like Raspberry Pi OS, Ubuntu, or specialized distributions. Its versatility supports programming in Python, C++, and more, making it a favorite for students, hobbyists, and professionals. With enhanced performance and connectivity, the Raspberry Pi 4 is a compact powerhouse for innovative projects."
  },
  {
    id: 3,
    name: "Jumper Wires",
    price: 80,
    image: "images/images (1).jpg",
    description: "This set of jumper wires is an essential tool for electronics prototyping, offering flexibility and ease for circuit building. Including 40 male-to-male, male-to-female, and female-to-female wires (10cm length), they connect components on breadboards, Arduino, or Raspberry Pi setups. Made with durable, high-quality copper and insulated PVC, they ensure reliable connections for low-voltage applications. Perfect for students, hobbyists, and engineers, these wires simplify experimenting with sensors, LEDs, and microcontrollers without soldering. Their vibrant colors aid in circuit organization, reducing errors during complex projects. Affordable and reusable, this jumper wire kit is a must-have for any electronics workbench."
  },
  {
    id: 4,
    name: "Breadboard",
    price: 120,
    image: "images/Solderless-400-pin-breadboard-4.jpg",
    description: "This 400-point solderless breadboard is a cornerstone for electronics prototyping, enabling quick and reversible circuit assembly. Featuring 400 tie-points (300 terminal strip, 100 power rails), it supports a wide range of components like resistors, capacitors, and ICs. Its compact size (8.3 x 5.5 cm) and adhesive backing make it portable and secure for projects. Compatible with Arduino, Raspberry Pi, and jumper wires, it’s ideal for students learning circuit design or hobbyists testing complex setups. The durable ABS plastic construction ensures longevity, while the clear layout simplifies debugging. No soldering required, making it perfect for rapid prototyping of IoT devices, robotics, and educational experiments."
  },
  {
    id: 5,
    name: "LFR KIT",
    price: 1600,
    image: "images/images (2).jpg",
    description: "The Line Following Robot (LFR) Kit is an exciting platform for learning robotics and automation. It includes a chassis, DC motors, IR sensors, a microcontroller board, and wheels, designed to follow a predefined path using infrared detection. Powered by an Arduino-compatible controller, it supports programming in C/C++ for custom behaviors like obstacle avoidance or speed control. Ideal for students, educators, and hobbyists, this kit teaches concepts in electronics, coding, and sensor integration. Easy to assemble with detailed instructions, it’s perfect for STEM workshops or competitions. Build your own autonomous robot and explore the world of intelligent systems with this versatile LFR kit."
  },
  {
    id: 6,
    name: "DJI Mini 4 Pro Drone Fly More Combo Plus",
    price: 118000,
    image: "images/dji-mini-4-pro-fly-more-combo.jpg",
    description: "The DJI Mini 4 Pro Fly More Combo Plus is a premium ultralight drone weighing under 249g, packed with professional-grade features. It boasts a 1/1.3-inch CMOS sensor for 4K HDR video, 48MP stills, and 10-bit D-Log M color. With omnidirectional obstacle sensing, ActiveTrack 360°, and a 45-minute flight time (with Plus batteries), it’s perfect for aerial photography and videography. The combo includes three batteries, a charging hub, and a carrying bag for extended missions. Its foldable design and advanced transmission (O4, 20km range) ensure portability and reliability. Ideal for creators and hobbyists, this drone delivers stunning visuals and intelligent flight modes."
  },
  {
    id: 7,
    name: "35A 2-5S BLHELI_S 4 in 1 ESC",
    price: 2500,
    image: "images/esc-3-2.jpg",
    description: "The 35A 2-5S BLHELI_S 4-in-1 ESC is a high-performance electronic speed controller for FPV drones and quadcopters. Supporting 2-5S LiPo batteries, it delivers 35A per channel with BLHELI_S firmware for smooth, responsive motor control. Its compact 30x30mm design integrates four ESCs, reducing weight and wiring complexity. Featuring DShot600 protocol and robust MOSFETs, it ensures low heat generation and high efficiency. Ideal for racing drones or freestyle builds, it’s compatible with Betaflight and Cleanflight for easy tuning. Durable and reliable, this ESC is a top choice for drone enthusiasts seeking precision and power in demanding flight conditions."
  },
  {
    id: 8,
    name: "SDT Q100 Brushed Quadcopter Frame Kit",
    price: 599,
    image: "images/31JZLHPulLL.jpg",
    description: "The SDT Q100 Brushed Quadcopter Frame Kit is a lightweight, durable platform for building micro drones. With a 100mm wheelbase and carbon fiber-reinforced frame, it supports brushed motors and small flight controllers. Designed for indoor or outdoor micro FPV racing, it offers easy assembly and compatibility with 1S or 2S LiPo batteries. The kit includes a frame, canopy, and mounting hardware, allowing customization with cameras and receivers. Perfect for beginners or advanced pilots, the Q100 delivers agility and crash resistance, making it ideal for learning drone building or competing in tight spaces. Start your micro drone journey with this versatile frame kit."
  },
  {
    id: 9,
    name: "8520 Coreless Motors With 75mm Propellers",
    price: 499,
    image: "images/71hJ1Qd8JeL._AC_UF1000,1000_QL80_.jpg",
    description: "This set of 8520 coreless motors with 75mm propellers is engineered for micro drones and small RC models. Each motor delivers high efficiency and thrust, optimized for 1S (3.7V) batteries, making them ideal for indoor FPV racers or tiny quadcopters. The included 75mm propellers (clockwise and counterclockwise) ensure balanced flight and quick response. Lightweight and durable, these motors are compatible with micro frames like the Q100 and support easy installation. Perfect for hobbyists and drone builders, this kit enhances performance in compact builds, offering a cost-effective solution for agile, high-speed micro drone projects."
  },
  {
    id: 10,
    name: "65MM CW and CCW Blade Propeller",
    price: 99,
    image: "images/shopping.webp",
    description: "This set of 65mm CW and CCW blade propellers is designed for micro drones, providing optimal thrust and stability. Made from durable, lightweight plastic, these propellers are compatible with 8520 coreless motors and 1S/2S micro quadcopters. The pack includes both clockwise (CW) and counterclockwise (CCW) blades to ensure balanced rotation and smooth flight. Ideal for indoor racing or outdoor freestyle, they offer easy installation and high crash resistance. Perfect for hobbyists and FPV pilots, these affordable propellers are a reliable choice for maintaining peak performance in micro drone builds."
  },
  {
    id: 11,
    name: "30A Brushless Electronic Speed Controller",
    price: 299,
    image: "images/5141OheLueL._AC_UF1000,1000_QL80_.jpg",
    description: "The 30A Brushless ESC is a compact, high-efficiency speed controller for drones, RC planes, and vehicles. Supporting 2-4S LiPo batteries, it delivers 30A continuous current with burst capabilities for demanding applications. Equipped with BLHELI firmware, it supports Oneshot125 and Multishot protocols for precise motor control. Its lightweight design (25x12mm) and built-in BEC (5V/2A) make it ideal for FPV racing or hobbyist builds. Easy to configure with Betaflight, this ESC ensures low heat generation and reliable performance. Whether upgrading a quadcopter or building a new RC model, this ESC offers affordability and power for enthusiasts."
  },
  {
    id: 12,
    name: "65MM CW and CCW Blade Propeller",
    price: 99,
    image: "images/shopping.webp",
    description: "This duplicate set of 65mm CW and CCW blade propellers is crafted for micro drones, ensuring consistent flight performance. Constructed from high-strength plastic, these propellers are compatible with 8520 coreless motors and 1S/2S battery setups. The pack includes equal numbers of clockwise (CW) and counterclockwise (CCW) blades for balanced propulsion. Designed for indoor FPV racing or outdoor micro drone flights, they offer quick installation and excellent durability against crashes. Affordable and reliable, these propellers are a great spare or replacement set for hobbyists looking to keep their micro quadcopters in top condition."
  },
  {
    id: 13,
    name: "A2212 KV2200 Brushless Motor",
    price: 449,
    image: "images/images (3).jpg",
    description: "The A2212 KV2200 Brushless Motor is a high-performance motor for drones, RC planes, and multirotors. With a 2200KV rating, it delivers powerful thrust for 2-3S LiPo batteries, making it ideal for agile FPV racing or aerobatic flights. Its durable construction, precision bearings, and efficient cooling ensure long lifespan and reliable operation. Compatible with 6-8 inch propellers and 20-30A ESCs, it’s easy to integrate into custom builds. Weighing only 50g, this motor balances power and efficiency, perfect for hobbyists and professionals seeking high-speed performance in mid-sized drone projects."
  },
  {
    id: 14,
    name: "A2212 KV1000 Brushless Motor",
    price: 399,
    image: "images/1000kv.png",
    description: "The A2212 KV1000 Brushless Motor is a versatile, efficient motor for drones, RC aircraft, and robotics. With a 1000KV rating, it’s optimized for 3-4S LiPo batteries, delivering steady torque for 8-10 inch propellers. Its lightweight 50g design, high-quality bearings, and robust stator ensure durability and smooth operation. Paired with a 20-30A ESC, it’s ideal for stable, long-duration flights in multirotors or fixed-wing models. Perfect for hobbyists and engineers, this motor offers a balance of power and energy efficiency, making it a reliable choice for custom builds and educational projects."
  }
];

// Retrieve existing cart or start with empty one
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showToast(message) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  } else {
    console.warn("Toast element (#toast) not found");
  }
}

// Update cart item count display
function updateCartCount() {
  console.log("Running updateCartCount, Cart:", cart);
  const cartCountElements = document.querySelectorAll(".cart-count");
  if (cartCountElements.length > 0) {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountElements.forEach(element => {
      element.textContent = totalItems;
      element.setAttribute("data-count", totalItems);
    });
    console.log(`Updated cart count: ${totalItems} items`);
  } else {
    console.warn("No cart count elements (.cart-count) found");
  }
}

// Add product to cart with quantity management
function addToCart(product) {
  console.log(`Adding to cart: ${product.name}, Current cart:`, cart);
  // Ensure price is a number
  const productCopy = { ...product, price: parseFloat(product.price) || 0 };
  const existingIndex = cart.findIndex(item => item.id === productCopy.id);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
  } else {
    cart.push({ ...productCopy, quantity: 1 });
  }
  console.log(`Updated cart:`, cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`Added ${product.name} to cart`);
  updateCartCount();
}

// Function to render all products
function renderProducts(filteredProducts = products) {
  console.log(`Rendering ${filteredProducts.length} products`);
  const productList = document.getElementById("product-list");
  if (!productList) {
    console.warn("Product list element (#product-list) not found");
    return;
  }
  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }
  filteredProducts.forEach(product => {
    console.log(`Creating card for: ${product.name}`);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">₹${parseFloat(product.price).toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    // Add to cart button click
    const button = card.querySelector("button");
    if (button) {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        addToCart(product);
      });
    } else {
      console.error(`Button not found in card for ${product.name}`);
    }
    // Navigate to product details on card click
    card.addEventListener("click", (event) => {
      if (!event.target.matches("button")) {
        console.log(`Navigating to details for: ${product.name}`);
        window.location.href = `product-details.html?id=${product.id}`;
      }
    });
    productList.appendChild(card);
  });
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const suggestionsContainer = document.getElementById("product-suggestions");
  if (!searchInput || !suggestionsContainer) {
    console.warn("Search input or suggestions container not found");
    return;
  }
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    console.log(`Search query: ${query}`);
    suggestionsContainer.innerHTML = "";
    if (query.length === 0) {
      suggestionsContainer.classList.remove("active");
      renderProducts();
      return;
    }
    const matches = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    renderProducts(matches);
    if (matches.length > 0) {
      matches.forEach(product => {
        const suggestion = document.createElement("div");
        suggestion.classList.add("suggestion-item");
        suggestion.textContent = product.name;
        suggestion.addEventListener("click", (event) => {
          event.stopPropagation();
          searchInput.value = product.name;
          suggestionsContainer.innerHTML = "";
          suggestionsContainer.classList.remove("active");
          window.location.href = `product-details.html?id=${product.id}`;
        });
        suggestionsContainer.appendChild(suggestion);
      });
      suggestionsContainer.classList.add("active");
    } else {
      suggestionsContainer.classList.remove("active");
    }
  });
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = this.value.trim().toLowerCase();
      suggestionsContainer.innerHTML = "";
      suggestionsContainer.classList.remove("active");
      if (query.length === 0) {
        renderProducts();
        return;
      }
      const matches = products.filter(product =>
        product.name.toLowerCase().includes(query)
      );
      if (matches.length > 0) {
        window.location.href = `product-details.html?id=${matches[0].id}`;
      } else {
        renderProducts([]);
      }
    }
  });
  document.addEventListener("click", function (event) {
    if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
      suggestionsContainer.innerHTML = "";
      suggestionsContainer.classList.remove("active");
      renderProducts();
    }
  });
}

// Initialize based on page
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    console.log("DOM loaded, initializing products and search for index.html");
    renderProducts();
    setupSearch();
    updateCartCount();
  } else if (window.location.pathname.includes("contact.html")) {
    console.log("DOM loaded, initializing cart count for contact.html");
    updateCartCount();
  } else if (window.location.pathname.includes("privacy.html")) {
    console.log("DOM loaded, initializing cart count for contact.html");
    updateCartCount();
  } else if (window.location.pathname.includes("terms.html")) {
    console.log("DOM loaded, initializing cart count for contact.html");
    updateCartCount();
  }
});
