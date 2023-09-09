"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alien_color = ["green", "yellow", "red",];
console.log("================= alien’s color is green =================");
console.log("Is alien_color.some(x => x == 'green')?");
console.log(alien_color.some(x => x == 'green'));
if (alien_color.some(x => x == 'green')) {
    console.log("This player just earned 5 points.");
}
console.log("================= alien’s color is blue =================");
console.log("Is alien_color.some(x => x == 'blue')?");
console.log(alien_color.some(x => x == 'blue'));
if (alien_color.some(x => x == 'blue')) {
    console.log("This player just earned 6 points.");
}
