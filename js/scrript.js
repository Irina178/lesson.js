'use strict'
// СМЕНА ЗНАЧЕНИй
let name = 'Irina'
name = 'Ira'
console.log(name)

//ПЕРЕДАЧА ЗНАЧЕНИЙ С ОДНОЙ ПЕРЕМЕННОЙ В ДРУГУЮ
let city = 'Odessa'
let newCity = 'kiev'
city = newCity
console.log(city)

let age = 29
let newAge = 30
age = newAge
console.log(age)

let cet = 'Visi'
let newCet = 'Alex'
cet = newCet
console.log(cet)
// ПОМЕНЯТЬ ЗНАЧЕНИЕ ВНУТРИ CONST

const mysity = {
  native: 'Odessa',
  love: 'kiev',
}
mysity.love = 'Paris'
console.log(mysity)
// ОПРЕДЕЛЕНИЕ ТИПА ДАННЫХ
console.log(typeof mysity)
//ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ
let hom = 27
hom = String(hom)
console.log(hom)
console.log(typeof hom)

//УВЕЛИЧИТЬ ЧИСЛО НА 1
let num = 25
num++
console.log(num)
//УМЕНЬШИТЬ ЧИСЛО НА 1
let nuumber = 36
nuumber--
console.log(nuumber)
//ОПЕРАТОР ИЛИ / AND &&
let one = 150
let two = 258
let result = one > two && two > one
console.log(result)

let doc = 'vasilisa'
let docnew = 'Vasilisa'
let resultt = doc > docnew && docnew < doc
console.log(resultt)

//ОПЕРАТОР ИЛИ ||
let booc = 5;
let difference = booc > 10 || 25 > booc 
console.log(difference)

// ОКРУГЛЕНИЕ ЦЫФР MATH FLOOR В МЕНЬШУЮ СТОРОНУ
let numeral = Math.floor (5.9)
console.log( numeral)

// ОКРУГЛЕНИЕ ЦЫФР MATH сei В большую сторону
let numeralOne = Math.ceil (5.3)
console.log(numeralOne)

//ВОЗВРАТ ПСЕВДОСЛУЧАЙНОГО ЧИСЛА 
console.log( Math.random ())
// ВЩЗВРАТ НАИБОЛЬШЕГО ЧИСЛА ИЗ ПЕРЕЧИСЛЕНЫХ
console.log (Math.max (1,8.,25,459,789))
console.log (Math.min (1,8.,25,459,789))

// СКОЛЬКО ЗНАКОВ ПОСЛЕ ТОЧКИ
let four = 15.3679452
console.log(four.toFixed(2))
// ПРОБЛЕМА С ПЛАВАЮЩЕЙ ТОЧКОЙ 
let sum = 0.2 + 0.4
console.log((0.2*10 + 0.4*10)/10)
// ПРОВЕРКА is NAN 
// вывести из 158.58 px = 158
let pixsel = parseInt ('158.58 px');
console.log(pixsel)

//ВІВЕСТИ ИЗ '158.58 px' = 158,58
let pixsel1 = parseFloat ('158.58 px');
console.log(pixsel1)


// ПОДСТАВЛЕНИЕ СТРОК С ПОДСТАВКОЙ ЗНАЧЕНИЙ
let firstName = 'Irina Bugaenko'
let sz = "18.05.2021 \\15.45"
let boos = 742
let masseger = `У ${firstName} назначен прием в \"центре занятости'\ ${sz}.\n\t И поеду я туда на  ${boos} маршрутке `
console.log(masseger)


//длина строки 
let string = "Строка"
console.log(string.length)
let firstSumbol = string[1]
console.log (firstSumbol)

const text = "Vasilisa"
for (const char of text) {
    console.log (char)
}


console.log ( text.toUpperCase())
console.log ( text.toLowerCase())