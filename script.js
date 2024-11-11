class PanierItem {
    constructor(element) {
        this.element = element;
        this.quantityInput = this.element.querySelector('.quantite');
        this.unitPrice = parseInt(this.element.querySelector('.prix-unitaire').textContent);
        this.totalElement = this.element.querySelector('.prix-total-valeur');

        
        this.initEventListeners();
    }

    initEventListeners() {
        this.element.querySelector('.quantite-control button:first-child').addEventListener('click', () => this.decrementQty());
        this.element.querySelector('.quantite-control button:last-child').addEventListener('click', () => this.incrementQty());
        this.element.querySelector('.btn-danger').addEventListener('click', () => this.removeItem());
        this.element.querySelector('.like').addEventListener('click', (e) => this.toggleLike(e.target));
    }

    incrementQty() {
        let quantity = parseInt(this.quantityInput.value);
        quantity++;
        this.quantityInput.value = quantity;
        this.updatePrice();
        PanierItem.calculateTotalGlobal();
    }

    decrementQty() {
        let quantity = parseInt(this.quantityInput.value);
        if (quantity > 1) {
            quantity--;
            this.quantityInput.value = quantity;
            this.updatePrice();
            PanierItem.calculateTotalGlobal();
        }
    }

    toggleLike(button) {
        button.classList.toggle('active');
    }

    updatePrice() {
        this.totalElement.textContent = this.unitPrice * parseInt(this.quantityInput.value);
    }

    removeItem() {
        this.element.remove();
        PanierItem.calculateTotalGlobal();
    }

    static calculateTotalGlobal() {
        const items = document.querySelectorAll('.item');
        let total = 0;

        items.forEach(item => {
            const unitPrice = parseInt(item.querySelector('.prix-unitaire').textContent);
            const quantity = parseInt(item.querySelector('.quantite').value);
            total += unitPrice * quantity;
        });

        document.getElementById('prix-total-global').textContent = total;
    }
}

// Initialisation des objets PanierItem pour chaque élément du panier
document.querySelectorAll('.item').forEach(itemElement => {
    new PanierItem(itemElement);
});

// Calcul initial du prix total global
window.onload = PanierItem.calculateTotalGlobal;
