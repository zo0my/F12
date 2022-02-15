/**
 * Практическое задание 3 JS
 * [JSDocs]{@link https://jsdoc.app/about-block-inline-tags.html}
 * Условное ветвление: if, '?'
 *  https://learn.javascript.ru/ifelse
 *
 *
 *
 *
 * ВВЕДЕНИЕ В JAVASCRIPT
 * @package 03_hw
 * @author Oleksandr Hvizda <gvizda94@gmail.com>
 */


// //1 Сообщение, зависимо от введенного возраста
// document.getElementById('userConfirm').onclick = function () {
//     let userInput = document.getElementById('userInput').value
//
//     if (userInput >= 60)
//         document.getElementById('outMessage').innerText = 'Выпенсионер'
//     else if (userInput >= 18)
//         document.getElementById('outMessage').innerText = 'Вывзрослый'
//     else if (userInput >= 12)
//         document.getElementById('outMessage').innerText = 'Вывподросток'
//     else if (userInput >= 0)
//         document.getElementById('outMessage').innerText  = 'Выребенок'
//     else
//         document.getElementById('outMessage').innerText = 'Выфеномен'
// }

// //2 символ, в зависимости от введенной цифры
// document.getElementById('userConfirm').onclick = function () {
//     let userInput = document.getElementById('userInput').value
//     let  arrDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let  arrSymbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '(']
//     for (let i = 0; i < arrDigits.length; i++)
//         if (userInput == arrDigits[i])
//             document.getElementById('outMessage').innerText = arrSymbols[i]
// }



// //3 Поиск одинаковых цифр
// document.getElementById('userConfirm').onclick = function () {
//     let userInput = document.getElementById('userInput').value
//     // к-во одинаковых символов
//     let arrCountDigits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     // проверяемые символы
//     let arrSimilarDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//
//     // поиск одинаковых символов
//     for (let i = 0; i < userInput.length; i++) {
//         for (let j= 0; j < arrSimilarDigits.length; j++) {
//             if ( userInput[i] === arrSimilarDigits[j] ) arrCountDigits[j]++
//         }
//     }
//
//     document.getElementById('outMessage').innerText = 'Одинаковых сиволов в строке:'
//     // проверка + вывод, были ли повторы
//     for (let j= 0; j < arrCountDigits.length; j++) {
//         if (arrCountDigits[j] >1 )
//             document.getElementById('outMessage').innerText +=
//                ' "' + arrSimilarDigits[j] + '"= ' + arrCountDigits[j] + ','
//     }
//
//     // если повторов повторов не было
//     if (document.getElementById('outMessage').innerText === 'Одинаковых символов в строке:')
//         document.getElementById('outMessage').innerText = 'Одинаковых символов в строке нет'
// }

// //4 Високосный год
// document.getElementById('userConfirm').onclick = function () {
//     let userInput = document.getElementById('userInput').value
//     //
//     if (userInput % 4 === 0 && userInput % 100 !== 0  || userInput % 400 === 0)
//         document.getElementById('outMessage').innerText = 'Год високосный'
//     else  document.getElementById('outMessage').innerText = 'Год не високосный'
// }


// //5 Проверка на зеркальное число (5 символов)
// document.getElementById('userConfirm').onclick = function () {
//     let  userInput = document.getElementById('userInput').value
//
//     document.getElementById('outMessage').innerText = 'Введен палиндром'
//     // поиск отличных символов с разных концов ввода
//     let j = userInput.length - 1    // счетчик для обхода массива с конца
//     for (let i = 0; i < userInput.length; i++) {
//         if (userInput[i] !== userInput[j]) {
//             document.getElementById('outMessage').innerText = 'Введен не палиндром'
//             break
//         }
//         j--
//     }
// }





