function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

show_magicians(magicians);
