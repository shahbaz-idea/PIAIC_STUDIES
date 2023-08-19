var strTransportation = [];
strTransportation.push("Ali");
strTransportation.push("Abass");
strTransportation.push("Haider");
strTransportation.forEach(function (element) {
    console.log("".concat(element, " ! I would like to invite you at dinner."));
});
console.log("=====================================================================");
strTransportation.pop();
strTransportation.push("Noman");
strTransportation.forEach(function (element) {
    console.log("".concat(element, " ! I would like to invite you at dinner."));
});
