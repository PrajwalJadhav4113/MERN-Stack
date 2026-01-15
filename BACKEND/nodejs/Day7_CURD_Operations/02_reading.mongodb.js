use('ecommerce'); 

/////////////////  Finding  /////////////////////////

//db.products.find({"name":"Wireless Mouse"})
//db.products.find().pretty()

//db.products.find({ category: "Electronics" })

//db.products.find({ price: { $gt: 1000 } }) // greater than 1000

//db.products.find({ price: { $gte: 1000, $lte: 50000 } }) // grater than and less than //AND//

//db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })  //category=Electronic or stock less then 50  //OR//

//db.products.find({}, { name: 1, price: 1, _id: 0 })  // What you want to see yes=1 ,no=0

//db.products.find().sort({ price: -1 }).limit(2)  // Pgination


/////////////////////////// Delete///////////////////////////


//db.contacts.deleteOne({ name: "Alice" })

db.orders.deleteMany({ status: "Delivered" })




