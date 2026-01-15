use('ecommerce'); 


// db.sales.insertMany([
// { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
// { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
// { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
// { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
// { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);

// Here we do all frutes with item and price 

// db.sales.aggregate([
// { $match: { category: "Fruit" } },
// { $project: { _id: 0, item: 1, price: 1 } }
// ])


///// here they group the category means fruite seprete aand vegitable sepreate  and multiply price * quantity 

// db.sales.aggregate([
// {
//  $group: {
//  _id: "$category",
//  totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
// }
// }
// ])


///// here same upper but they sort it in decending order|+--

//(price × quantity) per record → then total sum

// db.sales.aggregate([
// {
//  $group: {
//  _id: "$category",
//  totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
// }
// },
// { $sort: { totalSales: -1 } }
// ]);

