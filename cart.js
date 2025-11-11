let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-container");
const totalSpan = document.getElementById("total");
const couponInput = document.getElementById("coupon-code");
const applyCouponBtn = document.getElementById("apply-coupon");
const couponMessage = document.getElementById("coupon-message");
const discountedPriceContainer = document.getElementById("discounted-price-container");
const originalPriceSpan = document.getElementById("original-price");
const discountedPriceSpan = document.getElementById("discounted-price");
const popup = document.getElementById("user-details-popup");
const userDetailsForm = document.getElementById("user-details-form");

let discountApplied = false;
let discountAmount = 0;

// PayU Credentials (replace with your own)
const MERCHANT_KEY = "rqpL9E";
const SALT = "d00QbvgtGRSpVhSo0y9dxCM0TPXnujzT";
const PAYU_BASE_URL = "https://secure.payu.in";

// Load js-sha512 library
if (typeof sha512 === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-sha512/0.8.0/sha512.min.js';
  script.async = false;
  document.head.appendChild(script);
}

function renderCart() {
  if (!Array.isArray(cart)) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  let total = 0;

  cart.forEach(product => {
    const price = parseFloat(product.price) || 0;
    const quantity = parseInt(product.quantity) || 1;
    total += price * quantity;
  });

  originalPriceSpan.textContent = total.toFixed(2);

  let finalTotal = total;

  if (discountApplied) {
    discountAmount = total * 0.2;
    finalTotal = total - discountAmount;
    discountedPriceContainer.style.display = "block";
    discountedPriceSpan.textContent = finalTotal.toFixed(2);
    originalPriceSpan.classList.add("discount-applied");
  } else {
    discountedPriceContainer.style.display = "none";
    originalPriceSpan.classList.remove("discount-applied");
  }

  totalSpan.textContent = finalTotal.toFixed(2);
  localStorage.setItem("finalTotal", finalTotal.toFixed(2));

  cartContainer.innerHTML = cart.length === 0
    ? "<p>Your cart is empty.</p>"
    : cart.map((product, index) => `
      <div class="cart-item">
        <img src="${product.image || 'https://via.placeholder.com/100'}" alt="${product.name}" />
        <div class="item-details">
          <h3>${product.name || 'Unknown Product'}</h3>
          <p>₹${(parseFloat(product.price) || 0).toFixed(2)}</p>
          <div class="quantity-wrapper">
            <p>Qty: 
              <input type="number" class="quantity-input" data-index="${index}" value="${product.quantity || 1}" min="1" />
            </p>
          </div>
        </div>
        <button class="remove-btn remove-icon" data-index="${index}">×</button>
      </div>
    `).join("");

  attachQuantityListeners();
  attachRemoveListeners();
}

function attachRemoveListeners() {
  const buttons = document.querySelectorAll(".remove-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index, 10);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

function attachQuantityListeners() {
  const inputs = document.querySelectorAll(".quantity-input");
  inputs.forEach(input => {
    input.addEventListener("change", (e) => {
      const index = parseInt(input.dataset.index, 10);
      let newQty = parseInt(e.target.value, 10);

      if (newQty < 1 || isNaN(newQty)) {
        newQty = 1;
        e.target.value = 1;
      }

      cart[index].quantity = newQty;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

function applyCoupon() {
  const couponCode = couponInput.value.trim();

  if (couponCode === "DISCOUNT20" && !discountApplied) {
    discountApplied = true;
    couponMessage.textContent = "Coupon applied successfully!";
    couponMessage.style.color = "green";
  } else if (couponCode !== "DISCOUNT20") {
    if (discountApplied) {
      discountApplied = false;
      couponMessage.textContent = "Invalid coupon code. Discount removed.";
    } else {
      couponMessage.textContent = "Invalid coupon code.";
    }
    couponMessage.style.color = "red";
  } else if (discountApplied) {
    couponMessage.textContent = "Coupon already applied.";
    couponMessage.style.color = "orange";
  }

  renderCart();
}

applyCouponBtn.addEventListener("click", () => {
  const code = couponInput.value.trim();

  if (code === "") {
    discountApplied = false;
    couponMessage.textContent = "No coupon code entered.";
    couponMessage.style.color = "gray";
    renderCart();
  } else {
    applyCoupon();
  }
});

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  userDetailsForm.reset();
}

function showEmptyCartMessage() {
  const existingMessage = document.querySelector(".empty-cart-message");
  if (existingMessage) existingMessage.remove();

  const messageDiv = document.createElement("div");
  messageDiv.className = "empty-cart-message";
  messageDiv.textContent = "Your cart is empty. Please add items to proceed.";
  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

document.getElementById("proceedToPay").addEventListener("click", () => {
  if (cart.length > 0) {
    openPopup();
  } else {
    showEmptyCartMessage();
  }
});

userDetailsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById("loader").style.display = "block";

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const totalAmount = parseFloat(totalSpan.textContent).toFixed(2);
  const txnid = "txn" + Date.now();
  const productinfo = JSON.stringify(cart);

  const params = {
    key: MERCHANT_KEY,
    txnid: txnid,
    amount: totalAmount,
    productinfo: productinfo,
    firstname: firstname,
    email: email,
    udf1: '',
    udf2: '',
    udf3: '',
    udf4: '',
    udf5: ''
  };

  const hashString = `${params.key}|${params.txnid}|${params.amount}|${params.productinfo}|${params.firstname}|${params.email}|${params.udf1}|${params.udf2}|${params.udf3}|${params.udf4}|${params.udf5}||||||${SALT}`;
  const hash = sha512(hashString).toLowerCase();

  const form = document.createElement("form");
  form.action = PAYU_BASE_URL + "/_payment";
  form.method = "POST";
  form.name = "payuForm";

  const fields = {
    key: MERCHANT_KEY,
    txnid: txnid,
    amount: totalAmount,
    productinfo: productinfo,
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    surl: "https://astra.io.in/success.html",
    furl: "failed.html",
    hash: hash
  };

  for (const [key, value] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);

  const formattedItems = cart.map(item => ({
    name: item.name,
    price: parseFloat(item.price) || 0,
    quantity: item.quantity
  }));

  const orderData = {
    customer: `${firstname} ${lastname}`,
    email: email,
    phone: phone,
    items: formattedItems,
    totalAmount: totalAmount,
    discountApplied: discountApplied,
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwiteEjbXPSHe1ye4m59kBXok7Mr_TiiqP63CoVZKjbR6XRPhyIRhSh09Em7lmSbH5T-Q/exec', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error('Failed to send data');
  } catch (error) {
    console.error("Error sending data to Google Sheets:", error);
  } finally {
    document.getElementById("loader").style.display = "none";
    form.submit();
  }
});

function clearCart() {
  localStorage.removeItem("cart");
  localStorage.removeItem("finalTotal");
  cart = [];
  renderCart();
}

// Initial call to display cart
renderCart();
