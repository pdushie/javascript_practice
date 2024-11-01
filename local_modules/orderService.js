// order service will be responsible for handling orders
const order = [];
let orderId = 0;

// frunction to take in orders from the user
// each order has an orderId and userId associated with it
function getOrder (userId,product, quantity) {
    orderId += 1;

    userOrder = {
        orderId,
        userId,
        product,
        quantity
    }
// push the user order into the order array
    order.push(userOrder);
} 

// function to show or output all orders
function showOrder() {
    // all the function does is to output the order array which hold the orders
    return order;
}

// function to show filter products
function filterOrder(input){
    return order.filter(item => item.product === input);
}

// function to filter orders based on user ID
function filterOrderByUserId(input){
    return order.filter(item => item.userId === input);
}

// export the getOrder function to make it available in app.js
module.exports = {
    getOrder,
    showOrder,
    filterOrder,
    filterOrderByUserId
}