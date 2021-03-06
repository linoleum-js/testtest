var myDate = new Date();

/**
следует не забывать про отступы и форматирование кода

function getRussianMonth() {
  var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  return months[myDate.getMonth()];
}

*/

// лучше использовать одинарные ковычки: 'Января, 'Февраля', ...
function getRussianMonth() {
var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
return months[myDate.getMonth()];
}


// отступы должны быть в два пробела
function getRussianDay() {
 var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
 return days[myDate.getDay()];
}

function getMyHours() {
  // также не забывайте про ; в конце строки
  var myHours = ["0 часов", "1 час", "2 часа", "3 часа", "4 часа", "5 часов", "6 часов", "7 часов", "8 часов", "9 часов", "10 часов", "11 часов", "12 часов", "13 часов", "14 часов",  "15 часов", "16 часов", "17 часов", "18 часов", "19 часов", "20 часов", "21 час", "22 часа", "23 часа"]
  return myHours[myDate.getHours()];
}

function getMySeconds() {
  var mySeconds = ["0 секунд", "1 секунда", "2 секунды", "3 секунды", "4 секунды", "5 секунд", "6 секунд", "7 секунд", "8 секунд", "9 секунд", "10 секунд", "11 секунд", "12 секунд", "13 секунд", "14 секунд", "15 секунд", "16 секунд", "17 секунд", "18 секунд", "19 секунд", "20 секунд", "21 секунда", "22 секунды", "23 секунды", "24 секунды", "25 секунд", "26 секунд", "27 секунд", "28 секунд", "29 секунд", "30 секунд", "31 секунда", "32 секунды", "33 секунды", "34 секунды", "35 секунд", "36 секунд", "37 секунд", "38 секунд", "39 секунд", "40 секунд", "41 секунда", "42 секунды", "43 секунды", "44 секунды", "45 секунд", "46 секунд", "47 секунд", "48 секунд", "49 секунд", "50 секунд", "51 секунда", "52 секунды", "53 секунды", "54 секунды", "55 секунды", "56 секунд", "57 секунд", "58 секунд", "59 секунд", "60 секунд"];
  return mySeconds[myDate.getSeconds()];
}


// название функции лучше начинать с действия -- getMyDateRussian
function myDateRussian() {
  alert('Сегодня ' + myDate.getDate() + ' ' + getRussianMonth() + ' ' +   myDate.getFullYear() + ' ' + 'года, ' + getRussianDay() + ', ' + getMyHours() + ' ' + myDate.getMinutes() + ' минут ' + getMySeconds() );
}

/**
  Также склонение можно упростить (это, скорее, как бонус). Следует заметить, у нас всего три варианта --
  1. для 1 (час)
  2. от 2 до 4 (часа)
  3. от 5 и больше (часов)

  можно сделать что-то вроде этого:

  function getDeclension(value, one, two, five){
    value = Math.abs(value) % 100;
    var num = value % 10;
    if(value > 10 && value < 20) return five;
    if(num > 1 && num < 5) return two;
    if(num == 1) return one;
    return five;
  }

  и потом использовать так:
  getDeclension(myDate.getSeconds(), 'секунда', 'секунды', 'секунд');
 */



myDateRussian();

// Задание выполнено верно, но нужно соблюдать форматирование кода и название переменных.

// Для решения продвинутого уровня нужно использовать:
// setInterval(
//   () => console.log("указать правильно дату и время"),
//   1000
// );
