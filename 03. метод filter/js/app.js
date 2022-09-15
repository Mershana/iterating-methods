'use strict'

// Метод filter для фильтрации массива в JavaScript
/* №1⊗jsPmEnmFi
Дан массив с числами. Оставьте в нем только положительные числа. */
// Упростим код, используя логические операторы:
/* let arr = [1, -2, 3, -4, 5];
let result = arr.filter(function(elem){
	return elem > 0;
});

console.log(result); */ // [1, 3, 5]

//через стрелочные функции:
/*  let arr = [1, -2, 3, -4, 5];
 let result = arr.filter(elem => elem > 0);
 console.log(result); */ //[1, 3, 5]

 //Это решение настолько короткое, что его можно разместить в параметре console.log:
/* let arr = [1, -2, 3, -4, 5];
console.log( arr.filter(elem => elem > 0));  *///[1, 3, 5]

/* №2⊗jsPmEnmFi
Дан массив с числами. Оставьте в нем только отрицательные числа. */
/* let arr = [1, -2, 3, -4, 5, -6, -11, 12, -16, 20];
let result = arr.filter(function(elem){
	return elem < 0;
});

console.log(result); */ //[-2, -4, -6, -11, -16]

//через стрелочные функции:
/* let arr = [1, -2, 3, -4, 5, -6, -11, 12, -16, 20];
let result = arr.filter(elem => elem < 0);
console.log(result);  */// [-2, -4, -6, -11, -16]

 //Это решение настолько короткое, что его можно разместить в параметре console.log:
/* let arr = [1, -2, 3, -4, 5, -6, -11, 12, -16, 20];
console.log( arr.filter(elem => elem < 0)); */ //[-2, -4, -6, -11, -16]

/* №3⊗jsPmEnmFi
Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10. */
/* let arr = [1, -2, 3, -4, 5, -6, -11, 12, -16, 20];
let result = arr.filter(function(elem){
	return elem > 0 && elem < 10;
});

console.log(result); */

//через стрелочные функции:
/* let arr = [1, -2, 3, -4, 5, -6, -11, 12, -16, 20];
let result = arr.filter(elem => elem > 0 && elem < 10);
console.log(result);  */// [1, 3, 5]

/* №4⊗jsPmEnmFi
Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. */
/* let arr = ['blue', 'bluviolet', 'oranged', 'red', 'yellow'];
let result = arr.filter(function (elem) {
	return elem.length >= 5;
});
console.log(result);  *///['bluviolet', 'oranged', 'yellow']

//через стрелочные функции:
/* let arr = ['blue', 'bluviolet', 'oranged', 'red', 'yellow'];
let result = arr.filter(elem => elem.length >= 5);
console.log(result); */ //['bluviolet', 'oranged', 'yellow']

/* №5⊗jsPmEnmFi
Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30. */

/* №6⊗jsPmEnmFi
Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы. */
/* let arr =[1, 2, [3, 4], 5, [6, 7]];
let result = arr.filter(function (elem) {
	return typeof elem != 'object';
});
console.log(result); */ // [1, 2, 5]

//через стрелочные функции:
/* let arr =[1, 2, [3, 4], 5, [6, 7]];
let result = arr.filter(elem => typeof elem != 'object');
console.log(result); */ //[1, 2, 5]

// Еще применение
/* №7⊗jsPmEnmFi
Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве. */
/* let arr = [1, -2, -4, 8, -12, 42];
let filtered = arr.filter(elem => elem < 0);
console.log(filtered.length); */ //3
