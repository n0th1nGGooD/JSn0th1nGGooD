let str = 'sd'; 
//первое задание. Строки в джаве менять нельзя и это кринж
let newStr = str[0].toUpperCase() + str.slice(1);
//второе задание. Ничего необычного
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//третье задание. Усекает строку по длинне заменяя последний символ на ...
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

//четвертое задание. Тупо убирает первый символ из строки с валютой
function extractCurrencyValue(str) {
  return +str.slice(1);
}