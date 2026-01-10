// function  add(a,b) {
//     return a + b;
// }

// function  sub(a,b) {
//     return a - b;
// }

//module.exports= add;  // for only 1 function export

// when we need to write multiple function

// module.exports = {
//     add,  // addfn=  add
//     sub, // subfun=  sub
// }

//---------------------another method of export------
exports.add= (a,b) => a+b;
exports.sub= (a,b) => a-b;