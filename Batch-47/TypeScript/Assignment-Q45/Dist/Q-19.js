"use strict";
let lstInvitation = [];
lstInvitation.push("Ali");
lstInvitation.push("Abass");
lstInvitation.push("Haider");
lstInvitation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});
console.log("=====================================================================");
lstInvitation.pop();
lstInvitation.push("Noman");
lstInvitation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});
console.log("=====================================================================");
lstInvitation.unshift("Zain");
lstInvitation.splice(3, 0, "Faizan");
lstInvitation.push("Farooq");
lstInvitation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});
console.log("=====================================================================");
console.log(`${lstInvitation.length} No of people are invited at dinner.`);
