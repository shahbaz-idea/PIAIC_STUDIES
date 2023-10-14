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