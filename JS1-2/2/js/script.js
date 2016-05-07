var empty = [];

for (var i = 0; i <= 4; i++) {
  var name = prompt("Введите имя", '');
  empty[i] = name;
}

console.log('Имена',empty);

var userName = prompt('Ввдетие имя пользователя:', '');

console.log('Имя: ', userName);

for (var i = 0; i < empty.length ; i++) {
  if (userName == empty[i]) {
  		var currentUser = userName;
  	}
}

if (currentUser == userName) {
  alert((userName) + ", вы успешно вошли.");
} else {
  alert("Ошибка. Совпадений не найдено.");
}
