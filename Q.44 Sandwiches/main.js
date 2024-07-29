"use strict";
//Q. 44 sandwiches
function makeSandwiches(item) {
    console.log("\nMaking your sandwich with:");
    item.forEach(element => console.log("- " + element));
    console.log("Enjoy your sandwich!\n");
}
makeSandwiches(["Ham", "Cheese", "Lettuce"]);
makeSandwiches(["Turkey", "Bacon"]);
makeSandwiches(["Peanut Butter", "Jelly"]);
