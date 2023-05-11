//первая задача. Сортировка по алфавиту
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort((a, b) => collator.compare(a, b));

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК