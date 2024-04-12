// printing name in lower case...done

let personName:string = "Tayyeba Shakeel";

console.log("lowercase:", personName.toLowerCase());

// printing name in uppercase...done

console.log("uppercase:", personName.toUpperCase());

// printing name in titlecase ...done

console.log("titlecase:", personName.replace(/\b\w/g, c=> c.toUpperCase()));