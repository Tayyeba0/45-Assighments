// Q .42 Great Magician

let Magician : string[] = ["Harry potter", "Hermione Granger", "Ron  Weasely","Albus Dumbledore"];

function make_great (magicianarray : string[]){
    for(let i=0;  i<magicianarray.length; i++){
        Magician[i] = "The Great " + magicianarray[i]
    }
}
function show_magicians(magician: string[]){
    magician.forEach(element => {
        console.log(element);
        
    });
}
make_great(Magician);
show_magicians(Magician);