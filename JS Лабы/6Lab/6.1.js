//первая задача. Рекурсивно находим сумму от 1 до n
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  alert( sumTo(100) );

//вторая задача. Факториал
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(5) ); // 120

//третья задача. Фибоначи
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  alert( fib(3) ); // 2
  alert( fib(7) ); // 13
  alert( fib(77) ); // 5527939700884757

//четвертая задача. Вывод односвязного списка 
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  
  }
  
  printList(list);

//пятая задача. Односвязный список наоборот
let list1 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  }
  
  printReverseList(list);