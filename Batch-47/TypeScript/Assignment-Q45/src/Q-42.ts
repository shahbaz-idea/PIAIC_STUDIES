function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

make_great(magicians);
show_magicians(magicians);

export {};