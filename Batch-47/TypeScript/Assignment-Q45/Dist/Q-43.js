"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(`the Great ${magicians[i]}`);
    }
    return great_magicians;
}
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
