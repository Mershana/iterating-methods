"use strict";

// Метод map для перебора массива в JavaScript
/* №1⊗jsPmEnmMp
Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив. */
/* let arr = [1, 4, 15, 21, 34];
let result = arr.map(function(elem){
	return Math.sqrt(elem);
});
console.log(result);  */

/* №2⊗jsPmEnmMp
Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'. */
/* let arr = ['kek', 'map', 'each', 'filtr'];
let result = arr.map(function(elem){
	return elem += '!';
});
console.log(result); */

/* №3⊗jsPmEnmMp
Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке. */
/* let arr = ['kek', 'map', 'each', 'filtr'];
let result = arr.map(function(elem){
	return elem = elem.split('').reverse().join('');
});
console.log(result); */

/* №4⊗jsPmEnmMp
Дан следующий массив:
let arr = ['123', '456', '789'];
Используя метод map преобразуйте этот массив в следующий:
let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
 */
/* let arr = ['123', '456', '789'];
let result = arr.map(function(elem){
	elem = elem.split('');
	let NewArr = elem.map(function(subElem){
		return subElem = Number(subElem);
	});
	return NewArr;
});
console.log(result); */

// Ключ элемента
/* №5⊗jsPmEnmMp
Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве. */
/* let arr = [4, 5, 6, 7, 8, 9];
let result = arr.map(function(elem, index){
	return elem = elem * index;
});
console.log(result); */

// Перебор многомерных массивов
/* Метод map можно использовать и для перебора многомерных массивов. Пусть, к примеру, дан вот такой массив:

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
Давайте переберем этот массив через map и выведем его элементы в консоль:

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	console.log(elem);
});
В результате console.log выведет [1, 2, 3], потом [4, 5, 6], потом [7, 8, 9].

Как вы видите, в переменную elem попадают подмассивы. Давайте теперь применим метод map к каждому подмассиву и возведем каждый его элемент в квадрат:

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	return elem.map(function(num) {
		return num * num;
	});
});

console.log(result); */