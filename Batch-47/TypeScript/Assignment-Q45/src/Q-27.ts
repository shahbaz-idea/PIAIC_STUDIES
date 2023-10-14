const alien_color:Array<string> = ["green","yellow","red",];
let select_color = 'green';

console.log("================= alien’s color is green =================");
console.log("Is alien_color.some(x => x == select_color)?");
console.log(alien_color.some(x => x == select_color));
if(alien_color.some(x => x == select_color) && select_color == 'green'){
    console.log("This player just earned 5 points.");
}
else if(alien_color.some(x => x == select_color) && select_color == 'yellow'){
    console.log("This player just earned 10 points.");
}
else{
    console.log("Else: This player just earned 15 points.");
}

console.log("================= alien’s color is yellow =================");
select_color = 'yellow';
console.log("Is alien_color.some(x => x == select_color)?");
console.log(alien_color.some(x => x == select_color));
if(alien_color.some(x => x == select_color) && select_color == 'green'){
    console.log("This player just earned 5 points.");
}
else if(alien_color.some(x => x == select_color) && select_color == 'yellow'){
    console.log("This player just earned 10 points.");
}
else{
    console.log("Else: This player just earned 15 points.");
}

console.log("================= alien’s color is blue Else Part =================");
select_color = 'blue';
console.log("Is alien_color.some(x => x == 'blue')?");
console.log(alien_color.some(x => x == 'blue'));
if(alien_color.some(x => x == select_color) && select_color == 'green'){
    console.log("This player just earned 5 points.");
}
else if(alien_color.some(x => x == select_color) && select_color == 'yellow'){
    console.log("This player just earned 10 points.");
}
else{
    console.log("Else: This player just earned 15 points.");
}

export {};