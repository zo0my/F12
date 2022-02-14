//console.log('123')
//alert('123')    // устар.
//let userName = prompt('name?', 'Ivan') // останавливает выполнение скрипта


let result = document.getElementById("result")


document.getElementById("btnStart").onclick = function () {
    let userNumber = document.getElementById("userName").value
    console.log(" S: " + userNumber)
    let tmp = 0


    while (Number(userNumber) > 10) {

        tmp += userNumber % 10 + 's'
        userNumber = Math.floor(+userNumber % 10)


        console.log(userNumber)
    }

    // userNumber.toString()
    // for (let i = tmp; i >= 0; i--) {
    //     console.log(tmp[i])
    // }


    console.log('dd' + tmp)

    
    // result.innerText = "Нажата кнопка"
    //
    // if (userNumber > 18) {
    //     result.style.backgroundColor = 'red'
    //     result.innerText = "Вам меньше 18"
    //
    // } else {
    //     result.style.backgroundColor = 'red'
    //
    // }


}

//console.log(userName)


//console.log('321')