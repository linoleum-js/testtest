var User = function(firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
};

var UserList = function() {
  var users = [];

  this.add = function(user) {
    users.push(user);
  };

  this.getAllUsers = function() {
    for (let user of users)
      console.log(`Имя: ${user.firstName}\nФамилия: ${user.lastName}\nРегистрация: ${user.regDate}\n`);
  }
}

var canceled = false;

var userList = new UserList();

while(!canceled) {
  var userData = prompt('Введите имя и фамилию через пробел', '');

  if(userData != null){
    var chuncks = userData.split(' ');

    if (chuncks.length !== 2) {
      alert('Некорректные данные. Введите имя и фамилию через пробел');
    } else {
      var firstName = chuncks[0];
      var lastName = chuncks[1];
      var regDate = getDateNow();
      var newUser = new User(firstName, lastName, regDate);
      userList.add(newUser);
    }
  } else {
    canceled = true;
    userList.getAllUsers();
  }
}


function getDeclension(value, one, two, five) {
  value = Math.abs(value) % 100;
	var num = value % 10;
	if(value > 10 && value < 20) {
    return five;
  }
	if(num > 1 && num < 5) {
    return two;
  }
	if(num == 1) {
    return one;
  }
	return five;
}

function getDateNow(){
  var currentDate = new Date();

  var months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  var month = months[currentDate.getMonth()];

  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  var day = days[currentDate.getDay()];

  var currentHours = currentDate.getHours();
  var hours = `${currentHours} ${getDeclension(currentHours, 'час', 'часа', 'часов')}`;

  var currentMinutes = currentDate.getMinutes();
  var minutes = `${currentMinutes} ${getDeclension(currentMinutes, 'минута', 'минуты', 'минут')}`;

  var currentSeconds = currentDate.getSeconds();
  var seconds = `${currentSeconds} ${getDeclension(currentSeconds, 'секунда', 'секунды', 'секунд')}`;

  return `Сегодня ${currentDate.getDate()} ${month} ${currentDate.getFullYear()} года, ${day}, ${hours} : ${minutes} : ${seconds}`;
}
