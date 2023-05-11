//первая задача
//первая задача. Сумма через скобки
function sum(a) {

    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
  
  }
  
  alert( sum(1)(2) ); // 3
  alert( sum(5)(-1) ); // 4

//вторая задача. Фильтр массива по двум параметрам
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr1 = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//третья задача. Сортировка по полю но покороче
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  users.sort(byField('name'));
  users.forEach(user => alert(user.name)); // Ann, John, Pete
  
  users.sort(byField('age'));
  users.forEach(user => alert(user.name)); // Pete, Ann, John

//четвертая задача. Создает массив с индексами
function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
  
  
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5
