let stlTransportation:Array<string> = [];

stlTransportation.push("Ali");
stlTransportation.push("Abass");
stlTransportation.push("Haider");

stlTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});

console.log("=====================================================================");
stlTransportation.pop();
stlTransportation.push("Noman");

stlTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});

console.log("=====================================================================");

stlTransportation.unshift("Zain");
stlTransportation.splice(3,0,"Faizan");
stlTransportation.push("Farooq");

stlTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});