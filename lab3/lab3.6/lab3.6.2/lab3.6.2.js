const bill = prompt("Enter the bill amount");
const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill} and the tip is ${tip} and the total is ${bill}+${tip}`);