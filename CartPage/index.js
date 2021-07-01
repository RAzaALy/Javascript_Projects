const productAmnt = document.getElementById('productAmnt');
const shippingCharge = document.getElementById('shippingCharge');
const totalCartAmt = document.getElementById('totalCartAmt');
const discount = document.getElementById('discountCode');

//For decrement items in  cart
const decrement = (textBox, itemPrice) => {
    var itemVal = document.getElementById(textBox);
    var price = document.getElementById(itemPrice);
    // console.log(price);
    // console.log(itemVal.value);
    if (itemVal.value <= 0) {
        itemVal.value = 0;
        alert("Negative quantity not allowed.")
    } else {
        itemVal.value = parseInt(itemVal.value) - 1;
        itemVal.style.background = '#fff';
        itemVal.style.color = '#000';
        price.innerHTML = parseInt(price.innerHTML) - 25;
        productAmnt.innerHTML = parseInt(productAmnt.innerHTML) - 25;
        totalCartAmt.innerHTML = parseInt(productAmnt.innerHTML) + parseInt(shippingCharge.innerHTML)

    }

};
//For increment item in cart:
const increment = (textBox, itemPrice) => {
    var itemVal = document.getElementById(textBox);
    var price = document.getElementById(itemPrice);
    console.log(price);
    // console.log(itemVal.value);
    if (itemVal.value >= 5) {
        itemVal.value = 5;
        alert("Maximum 5 items allowed.");
        itemVal.style.background = 'red';
        itemVal.style.color = '#fff';
    } else {
        itemVal.value = parseInt(itemVal.value) + 1;
        price.innerHTML = parseInt(price.innerHTML) + 25;
        productAmnt.innerHTML = parseInt(productAmnt.innerHTML) + 25;
        totalCartAmt.innerHTML = parseInt(productAmnt.innerHTML) + parseInt(shippingCharge.innerHTML)

    }

};
const discountCode = () => {
    let error = document.getElementById('errorThrw');
    let totalAmount = parseInt(totalCartAmt.innerHTML);
    if (discount.value === "RAza") {
        error.innerHTML = "Code is Valid";
        let newTotalAmnt = totalAmount - 15;
        totalCartAmt.innerHTML = newTotalAmnt;
    }
    else {
        error.innerHTML = "Try Again";
    }
}