var num = +prompt('Введите шестизначный номер билета');

var n1 = (Math.floor (num / 1 % 10))
var n2 = (Math.floor (num / 10 % 10))
var n3 = (Math.floor (num / 100 % 10))
var n4 = (Math.floor (num / 1000 % 10))
var n5 = (Math.floor (num / 10000 % 10))
var n6 = (Math.floor (num / 100000 % 10))


if ((n1 + n2 + n3) === (n4 + n5 + n6)){
    alert('Поздравляем! У вас счастливый билет')
} else {
    alert('Увы, у вас не счастливый билет :(')
}