/**
 * Практическое задание 2 JS
 * [JSDocs]{@link https://jsdoc.app/about-block-inline-tags.html}
 * [Основы JavaScript] {@link https://learn.javascript.ru/function-basics}
 * [Базовые операторы, математика] {@link https://learn.javascript.ru/operators}
 * [Преобразование типов] {@link https://learn.javascript.ru/type-conversions}
 * ВВЕДЕНИЕ В JAVASCRIPT
 * @package 02_pz
 * @author Oleksandr Hvizda <gvizda94@gmail.com>
 */

/**1
 * имя пользователя
 * @type {string}
 */
let userName = prompt('Запрашиваю имя, пользователь!')

/**
 * сообщение-приветствие пользователя
 */
alert('Привет, ' + userName + '!')

/**2
 * год рождения пользователя
 * @type {string}
 */
let birthYear = prompt('Запрашиваю год рождения, пользователь!')

/**
 * текущий год, константа
 * @type {number}
 */
let CURR_YEAR = 2022

/**
 * сообщение-вычисление возраст пользователя
 */
alert('Ваш возраст: ' + (CURR_YEAR - birthYear) + ', или на 1 год меньше')

/**3
 * сторона квадрата
 * @type {string}
 */
let squareLength = prompt('Задайте стороны квадрата')

/**
 * сообщение-вычисление периметр квадрата
 */
alert('Периметр квадрата ' + (squareLength * 4) + 'ед.')

/**4
 * радиус окружности
 * @type {string}
 */
let circleRadius = prompt('Задайте радиус окружности')

/**
 * Пи-константа
 * @type {number}
 */
const PI = 3.14159
/**
 * сообщение-вычисление площадь круга
 */
alert('Площадь круга ' + (PI ** circleRadius) + 'ед.')

/**5
 * расстояние между городами
 * @type {string}
 */
let cityDistance = prompt('Задайте расстояние между двумя городами, [км]')

/**
 * желаемое время на перемещение между городами
 * @type {string}
 */
let travelTime = prompt('Задайте желаемое время пути, [ч]')

/**
 * сообщение-вычисление требуемой скорости
 */
alert('Чтобы добраться до второго города за ' + travelTime + 'ч., нужно двигаться со скоростью' + (cityDistance / travelTime) +  'км/ч')

/**6
 * количество долларов
 * @type {string}
 */
let exchangeUSD = prompt('Перевод USD в EUR. Введите количество USD')

/**
 * текущий курс доллара к евро, константа
 * @type {number}
 */
const EXCHANGE_RATE = 0.88

/**
 * сообщение-перевод долларов в евро
 */
alert (exchangeUSD + '$ = ' + (exchangeUSD * EXCHANGE_RATE) + 'EUR')

/**7
 * объем флешки, Гб
 * @type {string}
 */
let UsbMemory = prompt('Укажите объем флешки, Гб')

/**
 * Размер файла, Гб
 * @type {number}
 */
const FILE_SIZE = 820 / 1024

/**
 * сообщение-вычисление макс. количества файлов на флешке
 */
alert ('На флешке поместится максимум' + ((UsbMemory - UsbMemory % FILE_SIZE) / FILE_SIZE ) + ' файлов')

/**8
 * сумма денег в кошельке
 * @type {string}
 */
let walletValue = prompt('Введите количество денег в кошельке')

/**
 * цена шоколадки
 * @type {string}
 */
let chocoPrice = prompt('Введите цену одной шоколадки')

/**
 * вычисление, максимум шоколадок для покупки
 * @type {number}
 */
let chocoQuantity = (walletValue - walletValue % chocoPrice) / chocoPrice

/**
 * сообщение-вычисление макс. количества шоколадок для покупки, сдачи после покупки
 */
alert ('Максимум можно купить' + chocoQuantity + ' шоколадок, после этого в кошельке останется ' + walletValue - chocoQuantity * chocoPrice  + 'ед.')

/**9
 * 3-х значное число
 * @type {string}
 */
let  unMirroredNumber = prompt('Введите 3х-значное число')


/**
 * отзеркаленное 3хзначное число вида (сотни+десятки+единицы)
 * @type {number}
 */
let mirroredNumber =  unMirroredNumber%10*100  + (unMirroredNumber%100 - unMirroredNumber%10)  + (unMirroredNumber%1000 - unMirroredNumber%100)/100


/**
 * сообщение, отзеркаленное 3хзначное число
 */
alert('Отзеркаленная версия:' + mirroredNumber)


// Запросите у пользователя целое число и выведите в ответ,
//     четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch
/**10
 * число пользователя
 */
let randNumber = prompt('Введите число')

/**
 * сообщение, проверка четности
 */
alert('Четное ли ваше число? ' + Boolean((randNumber+1) % 2))

