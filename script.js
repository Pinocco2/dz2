let celsius = 25; 
let fahrenheit = (celsius * 9/5) + 32; 
console.log(`Температура в Фаренгейтах: ${fahrenheit}`);

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24; 
let minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у місяці: ${hoursInMonth}`);
console.log(`Кількість хвилин у місяці: ${minutesInMonth}`);

let health = 100; 
let energy = 80;
health -= 10; 
energy -= 15; 
console.log(`Рівень здоров'я: ${health}`);
console.log(`Рівень енергії: ${energy}`);

let purchaseAmount = 200; 
let discount = 0.10;
let finalAmount = purchaseAmount * (1 - discount); 
console.log(`Сума покупки зі знижкою: ${finalAmount}`);

let floatNumber = 3.7;
let flooredNumber = Math.floor(floatNumber); 
console.log(`Округлене число: ${flooredNumber}`);

let floatString = "4.5"; 
let parsedFloat = parseFloat(floatString); 
console.log(`Десяткове число: ${parsedFloat}`);

let intString = "42"; 
let parsedInt = parseInt(intString); 
console.log(`Ціле число: ${parsedInt}`);

let number = 16;
let squareRoot = Math.sqrt(number); 
console.log(`Квадратний корінь: ${squareRoot}`);

let intValue = 10; 
let stringNumber = "20"; 
let convertedInt = parseInt(stringNumber); 
let convertedString = intValue.toString(); 
console.log(`Перетворене ціле число: ${convertedInt}`);
console.log(`Перетворене цілочисельне значення у рядок: ${convertedString}`);