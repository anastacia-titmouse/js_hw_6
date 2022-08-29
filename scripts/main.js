// Task 1 🖥
/
// Дан массив:
// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//Task 2
//Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

//Task 3

//Удалите все элементы в массиве и выведите в консоль полученный результат.

const numbers = [5, 43, 63, 23, 90];

//1й способ
console.log(numbers.splice(0, numbers.length));
console.log(numbers);

//2й способ
while (numbers.length > 0) {
    pop();
}
console.log(numbers);

//Task 4
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha'];
students.splice(students.length - 1, 1, 'Borya');
console.log(students);
students.splice(0, 1, 'Andrey');
console.log(students);

//Task 5
//Выведите в консоль все элементы массива. 
// Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for(catsElements of cats) {
    console.log(catsElements);
}

//Task 6
// + Соедините два массива чисел в один. - concat
// + В полученном массиве попробуйте найти индекс числа **`8`** - indexOf

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const num = evenNumbers.concat(oddNumbers);
console.log(num);
console.log(num.indexOf(8));

//Task 7
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

const binary = [0, 0, 0, 0]
console.log(binary.join('1'));

//Advanced
//Task 1
//Variant 1
function palindrome(str) {
    return str.split('').reverse().join('') == str;
}
console.log(palindrome( '49094'));
console.log(palindrome('А роза упала на лапу Азора'));//почему не работает с предложением?

//Variant 2
function palindromeChecker(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');// что за стремная штука?
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindromeChecker('А роза упала на лапу Азора'));
//Task 2
//> Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
for(let i = 0; i < matrix.length; i++) {
    let avr = 0;
    for(let k=0; k < matrix[i].length; k++) {
        /* складываем все элементы вложенного массива по очереди, 
        сохраняя в переменную и делим на длину каждого массива*/
        avr += (matrix[i][k])/matrix[i].length;
    }
    console.log(avr);
}

//Task 3
// Создайте два массива, в один поместите все положительные числа включая 0, 
// в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const positiveNumbers = [];
const negativeNumbers =[];
for (let numb of mixedNumbers) {
    if (numb < 0){
        negativeNumbers.push(numb);
    }
    else if (numb >= 0){
        positiveNumbers.push(numb);
    }
}
console.log(positiveNumbers);
console.log(negativeNumbers);

//Task 4



