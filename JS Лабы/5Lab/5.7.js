//первая задача. Делает из массива сет ака массив без повторов
let arr = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
function unique(arr) {
return arr = new Set(arr);
}
console.log( unique(arr) ); // Set(3) { 'Hare', 'Krishna', ':-O' }

//вторая задача. Убирает анаграммы
function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr1) );

//третья задача. добавляем к ключам еще одно слово
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more