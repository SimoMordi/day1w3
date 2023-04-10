
//1
//
let carThree = {
  wheels: 4,
  owner: "Simo",
  isBroken: true,
  color: "blue"
}
carThree.price = 30000
carThree["year"] = 2016
carThree.owner 
console.log(carThree.owner)

let clientIsInterested;

if (carThree.color == "blue") {
   clientIsInterested = true
} else {
  clientIsInterested = false
}

delete carThree.owner
console.log(carThree)
console.log( clientIsInterested)


//2
//
let store = {
  profit : 1000000000000,
  manager: "Hired",
  isOpenNow: false,
  isVeryExpensive: false,
}
store.location = "Seattle"
store["storeType"] = "product"
store.isOpenNow = true
store.isVeryExpensive

let canShopHere;
if ( store.isOpenNow == true && store.isVeryExpensive !== true) {
  canShopHere = true
}
else {
  canShopHere = false
}
delete store.profit
console.log(store)
console.log(canShopHere)
 

//3
//
let home  = {
  rooms :  3,
  bathrooms: 2,
  isForSale: false,
  isInGoodLocation: false,
}

home.price = 250000
home["year"] = 2010
home.isForSale = true
home.bathrooms;

let buyHouse;
if ( home.isForSale == true && home.isInGoodLocation == true) {
  buyHouse = true
}
else {
  buyHouse = false
}
delete home.isForSale
console.log(home)
console.log(buyHouse)
 