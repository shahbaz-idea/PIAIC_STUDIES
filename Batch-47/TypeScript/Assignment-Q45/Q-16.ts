let strTransportation:Array<string> = [];

strTransportation.push("Ali");
strTransportation.push("Abass");
strTransportation.push("Haider");

strTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});

console.log("=====================================================================");
strTransportation.pop();
strTransportation.push("Noman");

strTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});

console.log("=====================================================================");

strTransportation.unshift("Zain");
strTransportation.splice(3,0,"Faizan");
strTransportation.push("Farooq");

strTransportation.forEach(element => {
    console.log(`${element} ! I would like to invite you at dinner.`);
});