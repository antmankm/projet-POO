
function incrementQty(button) {
    const item = button.closest('.item');
    const quantityInput = item.querySelector('.quantite');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updatePrice(item);
}


function decrementQty(button) {
    const item = button.closest('.item');
    const quantityInput = item.querySelector('.quantite');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updatePrice(item);
    }
}


function toggleLike(button) {
    button.classList.toggle('active');
}


function updatePrice(item) {
    const unitPrice = parseInt(item.querySelector('.prix-unitaire').textContent);
    const quantity = parseInt(item.querySelector('.quantite').value);
    const totalPriceEl = item.querySelector('.prix-total-valeur');
    totalPriceEl.textContent = unitPrice * quantity;
}


function removeItem(button) {
    const item = button.closest('.item');
    item.remove();
}


function calculateTotalGlobal() {
    const items = document.querySelectorAll(".item");
    let total = 0;

    items.forEach(item => {
        const unitPrice = parseInt(item.querySelector(".prix-unitaire").textContent);
        const quantity = parseInt(item.querySelector(".quantite").value);
        total += unitPrice * quantity;
    });

    document.getElementById("prix-total-global").textContent = total;
}


function incrementQty(button) {
    const item = button.closest(".item");
    const quantityInput = item.querySelector(".quantite");
    const unitPrice = parseInt(item.querySelector(".prix-unitaire").textContent);
    const totalElement = item.querySelector(".prix-total-valeur");

    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    totalElement.textContent = unitPrice * quantity;

    calculateTotalGlobal(); 
}

function decrementQty(button) {
    const item = button.closest(".item");
    const quantityInput = item.querySelector(".quantite");
    const unitPrice = parseInt(item.querySelector(".prix-unitaire").textContent);
    const totalElement = item.querySelector(".prix-total-valeur");

    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        totalElement.textContent = unitPrice * quantity;

        calculateTotalGlobal(); 
    }
}

function removeItem(button) {
    const item = button.closest(".item");
    item.remove();
    calculateTotalGlobal(); 
}
window.onload = calculateTotalGlobal;

