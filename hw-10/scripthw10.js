// // 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let numbersWord = [12, 17, 123, `adfdf`, `row`, 58, `food`, 99, -14, -3]; 

    let positiveArr = numbersWord.filter(function(item) {
        return typeof(item) === "number";
    });

    let getAverage = (positiveArr) => {
        const sum = positiveArr.reduce((acc, number) => acc + number, 0);
        const length = positiveArr.length;
        return sum / length;
      };
    console.log(getAverage(positiveArr));

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
   x = +prompt('Ввести перше число');
   y = +prompt('Ввести друге число');
   znak = prompt('Ввести один із знаків +, -, *, **, /, %');
    let resultMath;

    switch (znak) {
      case "+":{
        resultMath = x + y;
        break;
      }
      case "-":{
        resultMath = x - y;
        break;
      }
      case "*":{
        resultMath = x * y;
        break;
      }
      case "**":{
        resultMath = x ** y;
        break;
      }
      case "/":{
        resultMath = x / y;
        break;
      }
      case "%":{
        resultMath = x % y;
        break;
      }
    }
    return resultMath;

}
  let result = doMath();
  console.log(result);

// 3.Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.

let num = [10, 29, - 17, 200, 1890, 234, 1, 994];

function max(num) {
  return num.reduce((acc, number) => acc > number ? acc : number);
}
console.log(max([10, 29, - 17, 200, 1890, 234, 1, 994]));

// 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// function regReplaceString (str, pattern) {
//     return str.split ('').filter(item => !pattern.includes(item)).join('');
// }
// const res = regReplaceString("hello world", ['l', 'd']);
// console.log(res);

function regReplaceString(str, pattern) {
  const arr = str.split ('');
  const wordsFilter = arr.filter(item => !pattern.includes(item)).join('');
  return wordsFilter
}
const res = regReplaceString("hello world", ['l', 'd']);
console.log(res);