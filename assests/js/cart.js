let iconCart = document.querySelector('.icon');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
// let iconCartSpan = document.querySelector('.icon sup');


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let removeItem = document.getElementsByClassName('trash');

    console.log(removeItem);

    for (let i = 0; i < removeItem.length; i++) {
        var button = removeItem[i];
        button.addEventListener('click', removeCartItem);
    }

    let quantityInput = document.getElementsByClassName('quantity-input');
    for (let i = 0; i < quantityInput.length; i++) {
        let input = quantityInput[i];
        input.addEventListener('change', quantityChanged);
    }

    let addToCart = document.getElementsByClassName('cart');
    console.log(addToCart);
    for (let i = 0; i < addToCart.length; i++) {

        let button = addToCart[i];
        button.addEventListener('click', addProductToCart);

    }


    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    }

    function addProductToCart(event) {
        let button = event.target;
        let product = button.parentElement.parentElement;
        let title = product.querySelector('.desc h4')[0].innerHTML;
        let price = product.querySelector('.desc h2')[0].innerHTML;
        let imageSrc = product.querySelector('.prod img')[0].src;
        console.log(title, price, imageSrc);
        addDetailsToCart(title, price, imageSrc);

    }

    function addDetailsToCart(title, price, imageSrc) {
        var cartRow = document.createElement('div');
        cartRow.innerHTML = title;
        var cartItem = document.getElementsByClassName('listCart')[0];
        cartItem.append(cartRow);
    }

    function quantityChanged(event) {
        var input = event.target;

        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal()
    }

    let listCart = document.querySelector('.listCart');
    console.log(listCart)
    let cartRows = listCart.getElementsByClassName('item');

    function updateCartTotal() {

        let total = 0;
        for (let i = 0; i < cartRows.length; i++) {

            var cartRow = cartRows[i];
            var itemPrice = cartRow.getElementsByClassName('price')[0];
            var itemQuantity = cartRow.getElementsByClassName('quantity-input')[0];

            var price = parseFloat(itemPrice.innerHTML.replace('$', ''));
            var quantity = itemQuantity.value;
            console.log(price * quantity);
            total = total + (price * quantity);
            console.log(total);
            console.log("hello");
        }

        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('totalPrice')[0].innerHTML = `&#8377;` + total;
    }
    updateCartTotal();


}
