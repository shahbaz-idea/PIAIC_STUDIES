let lstRivers:Array<string> = [];
let lstRiverData:Array<string> = ["Ravi","Satluj","Sindh","Jehlem","Chinab"];

lstRiverData.forEach(element => {
    lstRivers.push(element.toString());
});

console.log("=================");
lstRivers.forEach(element => {
    console.log(`${element}`);
});