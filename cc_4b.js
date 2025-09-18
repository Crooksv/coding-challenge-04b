///inclass coding assignment 04b
///Vincent Crooks

const products= [
    {sku: "p1", name: "Rock", category: "electronics", price: "10.99", inventory: "200"},
    {sku: "p2", name: "Paper", category: "apparel", price: "5.99", inventory: "500"},
    {sku: "p3", name: "Scissors", category: "groceries", price: "7.99", inventory: "300"},
    {sku: "p4", name: "Lizard", category: "household", price: "12.99", inventory: "150"},
    {sku: "p5", name: "Spock", category: "space", price: "15.99", inventory: "100"},
];

///commit

for (let product of products) {
    let discount = 0;
    switch(product.category) {
        case "electronics":
            discount = 0.2
            break;
        case "houesehold":
        case "groceries":
            discount = 0.1
            break;
        case "apparel":
            discount = 0.15
            break
            default:
            discount = 0
            break
    }
}

//commit discounts

 let promoPrice = product.price * (1 - discount);
console.log (promoPrice)
