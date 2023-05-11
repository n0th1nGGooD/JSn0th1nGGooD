//перваяя задача. Выводит функцию через секунду. Встроенные прототипы лучше не менять
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    alert("Hello!");
  }
  
  f.defer(1000); // выведет "Hello!" через 1 секунду