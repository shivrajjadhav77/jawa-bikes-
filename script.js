function orderProduct(productName, price) {
  document.getElementById("orderProduct").textContent = productName;
  document.getElementById("orderPrice").textContent = price;
  document.getElementById("orderModal").style.display = "flex";
}

function closeOrder() {
  document.getElementById("orderModal").style.display = "none";
}

window.onclick = function(event) {
  let modal = document.getElementById("orderModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
