let lstTransportation:Array<string> = [];

lstTransportation.push("Ali");
lstTransportation.push("Abass");
lstTransportation.push("Haider");

lstTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});

console.log("============================ Invitaion =========================================");
lstTransportation.pop();
lstTransportation.push("Noman");

lstTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});

console.log("============================ More Invitaion ====================================");

lstTransportation.unshift("Zain");
lstTransportation.splice(3,0,"Faizan");
lstTransportation.push("Farooq");

lstTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});

console.log("============================ Remove Invitaion ==================================");

console.log(`${lstTransportation[lstTransportation.length-1]}, I am sorry, I can,t invite you at dinner.`);
lstTransportation.pop();
console.log(`${lstTransportation[lstTransportation.length-1]}, I am sorry, I can,t invite you at dinner.`);
lstTransportation.pop();
console.log(`${lstTransportation[lstTransportation.length-1]}, I am sorry, I can,t invite you at dinner.`);
lstTransportation.pop();
console.log(`${lstTransportation[lstTransportation.length-1]}, I am sorry, I can,t invite you at dinner.`);
lstTransportation.pop();

console.log("============================ Still Invited ==================================");
lstTransportation.forEach(element => {
    console.log(`${element} ! you are still invited at dinner.`);
});