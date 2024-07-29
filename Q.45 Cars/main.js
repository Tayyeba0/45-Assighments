"use strict";
//Q 45 Cars
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo("Honda", "Civic", { color: "Black" }, { features: ["Navigation", "Power window"] });
console.log(answer);
