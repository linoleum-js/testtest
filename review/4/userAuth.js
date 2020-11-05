

/**
следует не забывать про отступы и форматирование кода


var User = function(name, login, password)
{
  this.name = name;
  this.login = login;
  this.password = password;
};

*/

var User = function(name, login, password)
{
this.name = name;
this.login = login;
this.password = password;
};

// По условию требовалось создать массив
// var users = []
// и хранить объекты пользователей в нём

var firstMan = new User("First", "FirstMan", "123456");
var secondMan = new User("Second", "SecondMan", "456798");
var thirdMan = new User("Third", "ThirdMan", "789123");

// так как мы передает одного пользователя, переменную лучше назвать user
function checkTheUser(users) {
  var logName = prompt('Введите логин пользователя');
  var logPassword = prompt('Введите пароль');

  // мы находимся внутри функции, соответственно должен быть отступ в два пробела

  // переменная users всегда будет undefined (смотри комментарий в конце файла),
  // так что данный код по факту не делает ничего
for (var prop in users) {
  var propValues = users[prop];
  console.log(prop + ' - ' + propValues);
}
// это же касается кода ниже. Соблюдать форматирование важно, это улучшает читаемость кода

// здесь, вместо проверки каждого пользователся, следует использовать массив
  if ((logName == firstMan.login) && (logPassword == firstMan.password)) {
  alert("Привет, Первый!");
 }
else if ((logName == secondMan.login) && (logPassword == secondMan.password)) {
  alert("Привет, Второй!");
}

else if ((logName == thirdMan.login) && (logPassword == thirdMan.password)) {
  alert("Привет, Третий!");
}
else {
  alert('Неправильная авторизация');
}
}
// здесь попытка (видимо?) пройти по массиву users и проверить, есть ли такой.
// но по факту получается бесконечный цикл, т.к. вместо массивы мы обращаемся к
// к свойству length конструктора User, а оно описывает количесво аргументов
// конструктора.
// Проще здесь оставить один вызов checkTheUser(), тем более, что User[i] всегда будет undefined
for(var i = 0; i < User.length; i++)
checkTheUser(User[i]); // не теряем отступы
