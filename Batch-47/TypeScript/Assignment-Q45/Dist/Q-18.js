"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lstFavPlaces = ["Paris", "Switzerland", "New Zeeland", "Istanbul", "London"];
//console.log(lstFavPlaces);
console.log("Original Order");
console.log("=================");
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Ascending Order");
console.log("=================");
let lstAscOrder = [...lstFavPlaces].sort();
lstAscOrder.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Original Order");
console.log("=================");
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Descending Order");
console.log("=================");
lstAscOrder = [...lstFavPlaces].sort((a, b) => b.localeCompare(a));
lstAscOrder.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Original Order");
console.log("=================");
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Reverse Order");
console.log("=================");
lstAscOrder = [...lstFavPlaces].reverse();
lstAscOrder.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Original Order");
console.log("=================");
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Reverse Order apply to Original List");
console.log("=================");
lstFavPlaces.reverse();
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Again Reverse apply to Original List");
console.log("=================");
lstFavPlaces.reverse();
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Ascending Order apply to Original List");
console.log("=================");
lstFavPlaces.sort();
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
console.log("Descending Order apply to Original List");
console.log("=================");
lstFavPlaces.sort((a, b) => b.localeCompare(a));
lstFavPlaces.forEach(element => {
    console.log(`${element}`);
});
console.log("===================================================================================");
