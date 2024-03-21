// Sample data (preselected items)
const items = [
    { id: 1, name: 'Product 1', price: 10.00, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 15.00, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 20.00, image: 'product3.jpg' }
];

// Function to render items in the cart
function renderCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    let totalPrice = 0;

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemElement.appendChild(itemImage);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');

        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        itemInfo.appendChild(itemName);

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        itemInfo.appendChild(itemPrice);

        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('quantity');

        const minusBtn = document.createElement('button');
        minusBtn.textContent = '-';
        minusBtn.addEventListener('click', () => decreaseQuantity(item));
        quantityDiv.appendChild(minusBtn);

        const quantityValue = document.createElement('span');
        quantityValue.textContent = '1';
        quantityDiv.appendChild(quantityValue);

        const plusBtn = document.createElement('button');
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => increaseQuantity(item));
        quantityDiv.appendChild(plusBtn);

        itemInfo.appendChild(quantityDiv);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteItem(item));
        itemInfo.appendChild(deleteBtn);

        const likeBtn = document.createElement('span');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = '❤️';
        likeBtn.addEventListener('click', () => toggleLike(likeBtn));
        itemInfo.appendChild(likeBtn);

        itemElement.appendChild(itemInfo);
        cartContainer.appendChild(itemElement);

        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to decrease quantity of an item
function decreaseQuantity(item) {
    // Add logic to decrease quantity of item
    renderCart();
}

// Function to increase quantity of an item
function increaseQuantity(item) {
    // Add logic to increase quantity of item
    renderCart();
}

// Function to delete an item from the cart
function deleteItem(item) {
    // Add logic to delete item from cart
    renderCart();
}

// Function to toggle like for an item
function toggleLike(likeBtn) {
    if (likeBtn.style.color === 'red') {
        likeBtn.style.color = '';
    } else {
        likeBtn.style.color = 'red';
    }
}

// Initial rendering of the cart
renderCart();
