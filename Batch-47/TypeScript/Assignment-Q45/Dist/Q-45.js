"use strict";
function createCar(manufacturer, modelName, ...args) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (let i = 0; i < args.length; i += 2) {
        car = Object.assign(Object.assign({}, car), { [args[i]]: args[i + 1] });
    }
    return Object.assign({}, car);
}
let car = createCar("Toyota", "Camry", "color", "blue", "year", "2022");
console.log(car);
