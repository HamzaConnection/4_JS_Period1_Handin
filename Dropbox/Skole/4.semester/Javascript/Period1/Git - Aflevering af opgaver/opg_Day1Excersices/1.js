// 1.1 - Using the filter Method
let names = ["kurt", "Ib", "Lars", "Ida"];

let filterMethod = names.map(function(name){
    return name.length <= 3;
});
console.log("Filter method:");
console.log(filterMethod);


//1.2 - Using the map Method
let mapMethod = names.map(function(name){
  return name.toUpperCase();
});
console.log("Map method:");
console.log(mapMethod);
