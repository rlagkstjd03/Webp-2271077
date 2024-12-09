const cart = [
    {item: "노트북", price: 12000000, quantity:1},
    {item: "마우스", price: 35000, quantity:2},
    {item: "키보드", price: 89000, quantity:1}
];

let totalPrice=0;
for(let i=0; i<cart.length; i++){
    totalPrice += cart[i].price * cart[i].quantity;
}

cart.forEach(item => {
    totalPrice += item.price * item.quantity;
});

totalPrice = cart.reduce(
    totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

const itemTotals = card.map(
    item => item.price * item.quantity
);

