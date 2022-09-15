'use strict'

// Метод every для проверки массива в JavaScript
/* Следующий метод every проверяет элементы массива и возвращает true, если для всех элементов массива коллбэк вернул true, в противном случае метод возвращает false. Проверим, к примеру, что все элементы в массиве - четные числа: */

/* №1⊗jsPmEnmEv
Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля. */
/* let arr = [1, 2, 3, 4, 5, 6, 7];
let result = arr.every(function (elem) {
	return elem > 0;
});
console.log(result); */ //true

//через стрелочную функцию
/* let arr = [1, 2, 3, 4, 5, 6, 7];
let result = arr.every(elem => elem > 0);
console.log(result);  *///true

// №2⊗jsPmEnmEv
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
/* let arr = [1, 32, 231, 32, 21];
let result = arr.every(function(elem, index){
	return elem * index < 30;
});
console.log(result); */ //false