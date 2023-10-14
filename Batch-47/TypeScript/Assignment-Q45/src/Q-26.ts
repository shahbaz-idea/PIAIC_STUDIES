const alien_color:Array<string> = ["green","yellow","red",];

console.log("================= alien’s color is green =================");
console.log("Is alien_color.some(x => x == 'green')?");
console.log(alien_color.some(x => x == 'green'));
if(alien_color.some(x => x == 'green')){
    console.log("This player just earned 5 points for shooting the alien.");
}

console.log("================= alien’s color is blue =================");
console.log("Is alien_color.some(x => x == 'blue')?");
console.log(alien_color.some(x => x == 'blue'));
if(!alien_color.some(x => x == 'blue')){
    console.log("This player just earned 10 points.");
}

console.log("================= alien’s color is blue Else Part =================");
console.log("Is alien_color.some(x => x == 'blue')?");
console.log(alien_color.some(x => x == 'blue'));
if(alien_color.some(x => x == 'blue')){
    console.log("This player just earned 10 points.");
}
else{
    console.log("Else: This player just earned 15 points.");
}

export {};