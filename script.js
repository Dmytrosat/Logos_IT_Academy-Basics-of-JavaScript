//Task 1
// Написати розв’язок нижче описаного завдання за допомогою конструкції switch:
// 1. Користувач вводить число в prompt
// 2. Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.
// 3. Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.

let month = prompt('write month');
switch (month) {
    case '1':
        alert('Січень');
        break;
    case '2':
        alert('Лютий');
        break;
    case '3':
        alert('Березень');
        break;
    case '4':
        alert('Квітень');
        break;
    case '5':
        alert('Травень');
        break;
    case '6':
        alert('Червень');
        break;
    case '7':
        alert('Липень');
        break;
    case '8':
        alert('Серпень');
        break;
    case '9':
        alert('Вересень');
        break;
    case '10':
        alert('Жовтень');
        break;
    case '11':
        alert('Листопад');
        break;
    case '12':
        alert('Грудень');
        break;
    default:
        alert('Такого місяця немає');
        break;
}

//Task 2
// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Створити функцію яка буде приймати одне число.
// 2. В середині функції перевіряємо чи це число є простим.
// 3. Після перевірки виводимо повідомлення в console.log().

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // прості числа
    }
}
  
showPrimes(28);
console.log(`Кінець завдання`);

  //Task 3
// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2. Кількість параметрів у функції може бути від 2х і більше.
// 3. Забороняється використовувати Math.max().
// — Приклад роботи:
// 1. max(5,-2) – має повернути 5.
// 2. max(5,-2, 30, 6) – має повернути 30


function maxElement (num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4){ 
        console.log(num1);
        return num1;
    } else if (num2 > num1 && num2 > num3 && num2 > num4){
        console.log(num2);
        return num2;
    }else if (num3 > num1 && num3 > num2 && num3 > num4){
        console.log(num3);
        return num3;
    }else{
        console.log(num4);
        return num4;
    };
}

maxElement(9,-2, 19, -6);
console.log(`Кінець завдання`);
