let pName:string = "Shahbaz Akbar";
console.log(`Lower Case : ${pName.toLowerCase()}`);
console.log(`Upper Case : ${pName.toUpperCase()}`);

const newName = pName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(`Title Case : ${newName}`);
