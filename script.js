// 👉 Завдання 1:

// Написати тест на довільну тему з 10-ти питань. 
// Якщо користувач відповідає вірно додаємо бал. 
// Якщо відповідає не вірно тоді нічого не робимо. 
// В кінці виводимо статистику про кількість правильних відповідей з можливих 10. 
// І повідомлення для користувача про рівень знань відносно набраних балів.


let min=0;
let max=100;
let counter=0;
let i=0;

while(i<10){
	let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
	let ans = confirm("Питання "+(i+1)+"/10:\n Число "+rnd+" більше або дорівнює 50?");

	if( (rnd>=50) && (ans==true) ){
		++counter;
	}
	if( (rnd<50) && (ans==false) ){
		++counter;
	}
	i++;
}

alert("Вірних відповідей: "+counter+" з 10");


// 👉 Завдання 2:

// Якщо користувач вводить «Ім’я», то питати пароль, 
// якщо натиснув скасувати(escape) - виводити «Вхід скасований», 
// якщо вводить щось інше - «Я вас не знаю». 

// Пароль перевіряти так. Якщо введений пароль «ЛОГОС», 
// то виводити «Ласкаво просимо!», 
// Інакше - «Пароль невірний», 
// при скасуванні - «Вхід скасований».


//Task 2

let userName = prompt("write name", '');
if (userName == 'Ім’я') {
  let pass = prompt('Password?', '');
  if (pass == 'ЛОГОС') {
        alert('Ласкаво просимо!');
  } else if (pass == '' || pass == null) {
        alert('Вхід скасований');
  } else {
        alert('Пароль невірний');
  }
} else if (userName == '' || userName == null) {
    alert('Вхід скасований');
} else {
    alert('Я вас не знаю');
}


// 👉 Завдання 3:

// Написати програму яка видає користувачу ввести число. 
// Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач. 
// Якщо число не входить в діапазон від 1 до 12 тоді неможливо.


//Task 3

let month = prompt('write month');
if (month == 1) {
    alert('Січень');
} else if (month == 2) {
    alert('Лютий');
} else if (month == 3) {
    alert('Березень');
} else if (month == 4) {
    alert('Квітень');
} else if (month == 5) {
    alert('Травень');
} else if (month == 6) {
    alert('Червень');
} else if (month == 7) {
    alert('Липень');
} else if (month == 8) {
    alert('Серпень');
} else if (month == 9) {
    alert('Вересень');
} else if (month == 10) {
    alert('Жовтень');
} else if (month == 11) {
    alert('Листопад');
} else if (month == 12) {
    alert('Грудень');
} else if (month >= 13) {
    alert('Такого місяця немає');
} else (month == '' || month == null); {
    alert('Вхід скасований');
}
