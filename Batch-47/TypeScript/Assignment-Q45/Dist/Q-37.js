"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love my country!") {
    console.log(`You have ordered a ${size} shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "My Country is great!");
