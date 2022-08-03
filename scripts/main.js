// Task 1 🖥

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
students.splice([students.length - 1], 1, 'Borya');
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




