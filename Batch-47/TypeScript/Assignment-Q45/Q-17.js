var strTransportation = [];
strTransportation.push("Ali");
strTransportation.push("Abass");
strTransportation.push("Haider");
strTransportation.forEach(function (element) {
    console.log("".concat(element, " ! I would like to invite you at dinner."));
});
console.log("============================ Invitaion =========================================");
strTransportation.pop();
strTransportation.push("Noman");
strTransportation.forEach(function (element) {
    console.log("".concat(element, " ! I would like to invite you at dinner."));
});
console.log("============================ More Invitaion ====================================");
strTransportation.unshift("Zain");
strTransportation.splice(3, 0, "Faizan");
strTransportation.push("Farooq");
strTransportation.forEach(function (element) {
    console.log("".concat(element, " ! I would like to invite you at dinner."));
});
console.log("============================ Remove Invitaion ==================================");
console.log("".concat(strTransportation[strTransportation.length - 1], ", I am sorry, I can,t invite you at dinner."));
strTransportation.pop();
console.log("".concat(strTransportation[strTransportation.length - 1], ", I am sorry, I can,t invite you at dinner."));
strTransportation.pop();
console.log("".concat(strTransportation[strTransportation.length - 1], ", I am sorry, I can,t invite you at dinner."));
strTransportation.pop();
console.log("".concat(strTransportation[strTransportation.length - 1], ", I am sorry, I can,t invite you at dinner."));
strTransportation.pop();
console.log("============================ Still Invited ==================================");
strTransportation.forEach(function (element) {
    console.log("".concat(element, " ! you are still invited at dinner."));
});
