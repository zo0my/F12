/**
 * Практическое задание 3 JS
 * [JSDocs]{@link https://jsdoc.app/about-block-inline-tags.html}
 * Условное ветвление: if, '?'
 *  https://learn.javascript.ru/ifelse
 * Операторы сравнения
 * https://learn.javascript.ru/comparison
 *
 * Циклы while и for
 * https://learn.javascript.ru/while-for
 *
 * Function Expression
 * https://learn.javascript.ru/function-expressions
 *
 * Функции
 * https://learn.javascript.ru/function-basics
 *
 * Метод slice()
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
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


// //6 Конвертор валют
// function showExchange (rate, currency) {
//     let userInput = document.getElementById('userInput').value
//     document.getElementById('outMessage').innerText = userInput * rate + ' ' + currency
// }
// document.getElementById('EUR').onclick = function () {
//     const EXCHANGE_EUR = 0.88
//     showExchange(EXCHANGE_EUR, 'EUR')
// }
// document.getElementById('UAH').onclick = function () {
//     const EXCHANGE_UAH = 28.18
//     showExchange(EXCHANGE_UAH, 'UAH')
// }
// document.getElementById('AZN').onclick = function () {
//     const EXCHANGE_AZN = 1.70
//     showExchange(EXCHANGE_AZN, 'AZN')
// }

// //7 Скидка >= 200=3% >= 300=5% >=500=7%
// document.getElementById('userConfirm').onclick = function () {
//     let userInput = document.getElementById('userInput').value
//     let finalPrice = (userInput>=500) ? Math.round(userInput * 93)/100:
//         (userInput>=300) ? Math.round(userInput * 95)/100 :
//         (userInput>=200) ? Math.round(userInput * 97)/100 :
//         userInput
//     document.getElementById('outMessage').innerText = finalPrice
// }

// //8 Может ли окружность поместится в квадрат (длина окружности, периметр)
// document.getElementById('userConfirm').onclick = function () {
//     let userCircleDistance = document.getElementById('userInput').value
//     let userPerimeter = document.getElementById('userPerimeter').value
//     let userCircleDiameter = userCircleDistance/Math.PI
//     let userSquareL = userPerimeter / 4
//
//     if ( userCircleDiameter > userSquareL)
//         document.getElementById('outMessage').innerText = 'Не поместится окружность в квадрат'
//     else
//         document.getElementById('outMessage').innerText = 'Поместится окружность в квадрат'
//
// }


//9. 3 вопроса, 3 варианта ответа, 2 балла за +, отобразить баллы
function  hideElement(elementId) {
    document.getElementById(elementId).style.display = "none"
}
function  renderElement(elementId)  {
    document.getElementById(elementId).style.display = "flex"
}

hideElement('testBody')
hideElement('testEnd')


document.getElementById('testStart').onclick = function () {
    hideElement('testStart')
    renderElement('testBody')
    let testData = {
        question:['Редкая ... долетит до середины Днепра',
        'Пустой тест2','Пустой тест3'],
        answers:['Птица','Рыба','Мышь',
            '2-1','2-2','2-3',
            '3-1','3-2','3-3'],
        rightAnswer: [2,1,0],
        increment: 2,
        total: 0
    }

    let testCounter = 0

    function renderTestText(testCount) {
        document.getElementById('testQuestion').innerText = testData.question[testCount]

        document.getElementById('answerLabel0').innerText = testData.answers[testCount*3+0]
        document.getElementById('answerLabel1').innerText = testData.answers[testCount*3+1]
        document.getElementById('answerLabel2').innerText = testData.answers[testCount*3+2]
    }
    renderTestText(testCounter)

    function isAnswer(testCount) {
        let radio = document.getElementsByName('testAnswer')
        document.getElementById('outMessage').innerText = String(radio.length)
        document.getElementById('outMessage').innerText = String(radio[0].value)
        document.getElementById('outMessage').innerText += String(radio[1].value)
        document.getElementById('outMessage').innerText += String(radio[2].value)


        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked && i == testData.rightAnswer[testCount]) {
                return true
            }
            else
                return false

        }

    }


    document.getElementById('testNext').onclick = function () {
        if (isAnswer(testCounter)) {
            testData.total+=testData.increment
        }
        if (testCounter===2) {
            renderElement('testEnd')
            hideElement('testBody')
            document.getElementById('testResult').innerText = testData.total
         }
         else {
            testCounter++
            renderTestText(testCounter)
            }
    }


    document.getElementById('testAgane').onclick = function () {
        testCounter = 0
        testData.total = 0
        hideElement('testEnd')
        renderElement('testBody')
        renderTestText(testCounter)
    }
}


// //10 Следующий день
// function ifLeapYear(currYear) {
//     return (currYear % 4 === 0 && currYear % 100 !== 0 || currYear % 400 === 0)
// }
//
// function unFormatDate(date) {
//     if (String(date)[0] === '0')
//         return date.slice(-1)
//     else
//         return date
// }
// function formatDate(date) {
//     if (String(date)[1] === undefined)
//         return ('0'+date)
//     else
//         return date
// }
//
// document.getElementById('userConfirm').onclick = function () {
//     let userDate = document.getElementById('userInput').value
//
//     let dayInMonth = [31, 28, 31,30,31,30,31,31,30,31,30,31]
//     let userYear = userDate.slice(0, 4)
//     let userMonth = userDate.slice(5, 7)
//     let userDay = userDate.slice(-2)
//
//     if (ifLeapYear(userYear)) dayInMonth = [31, 29, 31,30,31,30,31,31,30,31,30,31]
//     userMonth = unFormatDate(userMonth)
//     userDay = unFormatDate(userDay)
//
//     userDay=Number(userDay)+1
//     while (userDay > dayInMonth[userMonth-1]) {
//         userDay -=dayInMonth[userMonth-1]
//         userMonth++
//         while (userMonth > 12) {
//             userMonth-=12
//             userYear++
//         }
//     }
//     userMonth = formatDate(userMonth)
//     userDay = formatDate(userDay)
//     //document.getElementById('outMessage').innerText = userYear + '-' + userMonth + '-' + userDay
//     document.getElementById('outDate').value = userYear + '-' + userMonth + '-' + userDay
// }