//первая задача. Переписанный кусочек кода
async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404 (4)

//вторая задача. Тоже переписывание с асинком
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
  
    let user;
    while(true) {
      let name = prompt("Введите логин?", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // ошибок не было, выходим из цикла
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // после alert начнётся новая итерация цикла
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          // неизвестная ошибка, пробрасываем её
          throw err;
        }
      }
    }
  
  
    alert(`Полное имя: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();

//третья задача. Вызываем функцию ждем ссекунду и показываем 10
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // покажет 10 через 1 секунду
    wait().then(result => alert(result));
  }
  
  f();