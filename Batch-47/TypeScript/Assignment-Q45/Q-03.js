var pName = "Shahbaz Akbar";
console.log("Lower Case : ".concat(pName.toLowerCase()));
console.log("Upper Case : ".concat(pName.toUpperCase()));
var newName = pName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log("Title Case : ".concat(newName));
