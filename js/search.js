const products = [
    {
      id: 1,
      name: "Arduino Uno",
      price: 350,
      image: "image/aurdino.png"
    },
    {
      id: 2,
      name: "Resberi pie 4",
      price: 100,
      image: "image/resberi.png"
    },
    {
      id: 3,
      name: "Jumper Wires",
      price: 80,
      image: "image/jumper.png"
    },
    {
      id: 4,
      name: "Breadboard",
      price: 120,
      image: "image/bread.png"
    },
    {
      id: 5,
      name: "LFR KIT",
      price: 1600,
      image: "image/lfr.png"
    },
  ];
  
  function renderProducts(filter = "") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    if (filteredProducts.length === 0) {
      productList.innerHTML = "<p>No products found.</p>";
      return;
    }
  
    filteredProducts.forEach(product => {
      productList.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-img" />
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    alert(`${product.name} added to cart!`);
  }
  
  function updateSearchSuggestions(filter) {
    const datalist = document.getElementById("product-suggestions");
    datalist.innerHTML = "";  // Clear previous suggestions
    
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    filteredProducts.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      datalist.appendChild(option);
    });
  }
  
  window.onload = () => {
    renderProducts();
  
    document.getElementById("search-input").addEventListener("input", function () {
      const searchValue = this.value;
      renderProducts(searchValue);  // Filter products on the page
      updateSearchSuggestions(searchValue);  // Update dropdown suggestions
    });
  };
  const products = [
    { id: 1, name: "Arduino Uno", price: 350, image: "images/product1.png" },
    { id: 2, name: "Raspberry Pi 4", price: 2800, image: "images/product2.png" },
    { id: 3, name: "Jumper Wires", price: 80, image: "images/product3.png" }
  ];
  
  const cart = [];
  
  function renderProducts() {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";
  
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      grid.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
    showToast(`${product.name} added to cart!`);
  }
  
  function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    cartList.innerHTML = "";
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      cartList.appendChild(li);
      total += item.price;
    });
  
    totalDisplay.textContent = total;
  }
  
  // ✅ Toast Message
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);
  
    setTimeout(() => {
      toast.classList.remove("show");
      toast.remove();
    }, 3000);
  }
  
  window.onload = renderProducts;
  