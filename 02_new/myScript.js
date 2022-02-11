/**
 * Lesson 2
 * [Документация JsDOC] {@link https://jsdoc.app/about-block-inline-tags.html}
 * [Уроки Js] {@link }
 *
 *Присваивание
 * Сравнение
 * < > >= <=
 * == !=
 * (true | false) boolean
 *
 * @package Lesson 2
 * @author Oleksander Hvizda <gvizda94@gmail.com>
 */

let myAge = 42
let myWife = 42
console.log(myAge == myWife)


//
// // age of user
// let Age = 12
// console.log(Age)
// //
//
// Age += 1
//
//
// console.log(Age)
//
// //dok-vo opercii prisvaivaniya????????
// let k = 1, x = 1, b = 1, y = 1
// //k * x + b = y // error
// y = k * x + b

let dog1 = {
    age: 12,
    name: 'Vasya',
    img: 'https://www.purinaone.ru/dog/sites/default/files/2021-10/%D0%A8%D0%BF%D0%B8%D1%86%20OG_0.jpg'
}
/**
 *
 * @type {{img: string, name: string, age: number}}
 */
let dog2 = {
    age: 12,
    name: 'Fedya',
    img: 'https://www.purinaone.ru/dog/sites/default/files/2021-10/%D0%A8%D0%BF%D0%B8%D1%86%20OG_0.jpg'

}

let dogs = [dog1, dog2]

/**
 *
 * @type {HTMLElement}
 */
let main = document.getElementById("main")

let ul = document.createElement("ul")

/**
 * Перербор собак, отобржение собак
 */

dogs.map(dog => {
    let li = document.createElement("li")
    let img = document.createElement("img")
    img.src = dog.img
    li.appendChild(img)
    let span = document.createElement("span")
    span.innerText = dog.name

    li.appendChild(span)
    ul.appendChild(li)
})
main.appendChild(ul)
