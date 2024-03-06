const addProduct = () => {
    
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';

    displayProduct(product,quantity);
    saveProductToLocalstorage(product,quantity);
    
}


const displayProduct = (product,quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    productContainer.appendChild(li);
}

const getStroedShoppingCart = () => {
    const storeCart = localStorage.getItem('cart');
    let cart = {};
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const saveProductToLocalstorage = (product,quantity) => {
    const cart = getStroedShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
    console.log(cartStringified);
}


const displayProductFormLocalStorage = () => {
    const saveCart = getStroedShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        displayProduct(product,quantity);
        console.log(product,quantity)
    }
    // console.log(saveCart)
}
displayProductFormLocalStorage()