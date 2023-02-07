// Task one

const todayDate = new Date();
document.write(todayDate)

// Task Two

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2023-02-07");
let month = months[d.getMonth()];
alert("Current Month : " + month)

// Task three

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const today = new Date().getDay();
// const todayShort = daysOfWeek[today];

// alert(`Today's first 3 letters are: ${todayShort}`);

// Task four

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date().getDay();
const todayShort = daysOfWeek[today];

if (todayShort === "Sat" || todayShort === "Sun") {
  alert("It's Fun day");
} else {
  alert("Today is a weekday");
}

// Task five

const todayd = new Date();
const currentDay = todayd.getDate();

if (currentDay < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}


// Task Six

let date = new Date();
let millisecondsSinceMidnightJan11970 = date.getTime();
let minutesSinceMidnightJan11970 = millisecondsSinceMidnightJan11970 / 1000 / 60;

console.log(minutesSinceMidnightJan11970);


// Task Seven

const todaydt = new Date();
const currentHours = todaydt.getHours();

if (currentHours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Task eight

let todaydf = new Date();
let laterDate = new Date(2020, 11, 31);

console.log(laterDate);

// Task nine

const startingDateOfRamadan = new Date(2015, 5, 18); // June 18, 2015
const todaydd = new Date();
const timeDifference = todaydd - startingDateOfRamadan;
const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

alert(`${Math.floor(daysDifference)} days have passed since 1st Ramadan.`);


// Task ten

const referenceDate = new Date();
const beginningOf2015 = new Date(2015, 0, 1); // January 1, 2015
const timeDifferencetd = referenceDate - beginningOf2015;
const secondsDifference = timeDifferencetd / 1000;

document.write(`${secondsDifference} seconds have elapsed since the beginning of 2015.`);

// Task eleven

let currentDate = new Date();
let currentHoursch = currentDate.getHours();

currentDate.setHours(currentHoursch + 1);

document.write(currentDate);

// Task twelve

let currentDatecdd = new Date();
let year = currentDatecdd.getFullYear();

currentDatecdd.setFullYear(year - 100);

alert(currentDatecdd);

// Task thirteen

let currentYear = 2023;

let age = prompt("What's your age?");
let birthYear = currentYear - age;

document.write("Your birth year is " + birthYear);

// Task fourteen

let customerName = prompt("Enter customer name:");
let currentMonth = prompt("Enter current month:");
let units = parseFloat(prompt("Enter number of units consumed:"));
let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
let latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

let netAmount = units * chargesPerUnit;
let grossAmount = netAmount + latePaymentSurcharge;

netAmount = netAmount.toFixed(2);
grossAmount = grossAmount.toFixed(2);

document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + units + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit + "</p>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmount + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + grossAmount + "</p>");












