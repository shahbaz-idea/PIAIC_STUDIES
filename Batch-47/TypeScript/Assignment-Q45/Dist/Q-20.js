"use strict";
let lstRivers = [];
let lstRiverData = ["Ravi", "Satluj", "Sindh", "Jehlem", "Chinab"];
lstRiverData.forEach(element => {
    lstRivers.push(element.toString());
});
console.log("=================");
lstRivers.forEach(element => {
    console.log(`${element}`);
});
