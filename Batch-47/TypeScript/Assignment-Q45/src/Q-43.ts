function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(`the Great ${magicians[i]}`);
    }
    return great_magicians;
}

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let great_magicians: string[] = make_great([...magicians]);

show_magicians(magicians);
show_magicians(great_magicians);

export {};