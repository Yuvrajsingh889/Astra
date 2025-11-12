document.addEventListener("DOMContentLoaded", () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const productsSection = document.getElementById("products");

      data.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product"; // Keep this as 'product', not 'product-card'
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error("Error loading products:", error);
    });
});



document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Basic validation
  if (name && email && message) {
      alert("Thank you for contacting us, " + name + "!");
      // Here, you can implement the logic to send the form data to a server.
      // For now, it's just an alert for the demonstration.
      document.getElementById("contact-form").reset(); // Reset the form
  } else {
      alert("Please fill in all fields!");
  }
});

