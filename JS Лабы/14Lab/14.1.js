//первая зададча. Создать прокси который обрабатывает ошибку
let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        } else {
          throw new ReferenceError(`Свойство не существует: "${prop}"`)
        }
      }
    });
  }
  
  user = wrap(user);
  
  alert(user.name); // John
  alert(user.age); // Ошибка: Свойство не существует

//вторая задача. создать прокси который бы позволял использовать отрицательные индексы
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      // даже если обращение к элементу идёт как arr[1]
      // prop является строкой, нужно преобразовать её к числу
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});


alert(array[-1]); // 3
alert(array[-2]); // 2

//третья задача. Патерн наблюдателя
let handlers = Symbol('handlers');

function makeObservable(target) {
  // 1. Создадим хранилище обработчиков
  target[handlers] = [];

  // положим туда функции-обработчики для вызовов в будущем
  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  // 2. Создадим прокси для реакции на изменения
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
      if (success) { // если не произошло ошибки при записи свойства
        // вызовем обработчики
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user1 = {};

user1 = makeObservable(user1);

user1.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user1.name = "John";