//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let i = 10; i <= 20;  i += 0.5) {
    console.log(i);
}

//2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let r = 27;
for (let i = 10; i <= 100;  i += 10) {
    console.log( i + ' долларов'+ ' = ' + r * i + ' грн');
}

//3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let N = 80;
for (let i = 1; i <= 100; i++) {
    if (i**2 > N) { continue;}
     console.log(i);
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let k = 18;
let simpleNumber = true;

for (let i = 2; i < k; i++) {
    if (i % k === 0) {
        simpleNumber = false;
        break;
    }

}
let massageNumber = simpleNumber ? 'число просте' : 'число не просте';
console.log(massageNumber);

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let p = 49; 
let i = 1;
let s;
do {
    s = 3**i;
    i++
} while (s < p);
    let massage = s === p ? 'Число 49 дорівнює піднесенням в 3 ступень' : 'Число 49 не дорівнює піднесенням в 3 ступень'

console.log(s);
console.log(massage);