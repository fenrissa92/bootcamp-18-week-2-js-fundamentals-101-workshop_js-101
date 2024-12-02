/*
MVP 1
Develop a JavaScript function displayTemperatureInCelsius that takes in a numerical Fahrenheit temperature reading and converts it to Celsius, returning the number representing the Celsius value.
MVP 2
Implement another function displayTemperatureInFahrenheit that performs the inverse operation.
MVP 3
Create a function toggleTemperatureDisplay that returns either Celsius or Fahrenheit depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). Start with a default of the last returned format being Celsius.
*/

/* 
MVP 1
Develop a JavaScript function displayTemperatureInCelsius 
that takes in a numerical Fahrenheit temperature reading
 and converts it to Celsius, 
 returning the number representing the Celsius value.
*/

//ATTEMPTS TO CREATE A FUNCTION:

// °F = °C * 1.8 + 32
// °C = (°F - 32) × 5/9

/*
function displayTemperatureInCelsius (celcius) {
    
    let F = 1
    let C = (F - 32) / 1.8
    return C;
}

celsius = (fahrenheit - 32) * 5/9;
*/

/*
let fahrenheit = prompt("Temperature in Fahrenheit:");
let celsius = (fahrenheit - 32) * 5/9;
console.log(`Temperature in Celsius is ${celsius}`);
*/

function displayTemperatureInCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
console.log(displayTemperatureInCelsius(80));



/*
MVP 2
Implement another function displayTemperatureInFahrenheit that performs the inverse operation.
 */


function displayTemperatureInFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
console.log(displayTemperatureInFahrenheit(80));


/* MVP 3
Create a function toggleTemperatureDisplay 
that returns either Celsius or Fahrenheit depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). 
Start with a default of the last returned format being Celsius.
*/

/*
function toggleTemperatureDisplay() {
    let temp = {fahrenheit, celsius};

switch (temp) {
	case celsius:
		console.log(displayTemperatureInFahrenheit(80));
		break;
	case fahrenheit:
		console.log(displayTemperatureInCelsius(80));
		break;
	default:
		console.log(displayTemperatureInFahrenheit(80));
}
}
console.log(toggleTemperatureDisplay);

*/

function toggleTemperatureDisplay(temp) {
switch (temp) {
	case celsius = true:
		console.log(displayTemperatureInFahrenheit);
		break;
	case celsius = false:
		console.log(displayTemperatureInCelsius);
		break;
	default:
		console.log(displayTemperatureInFahrenheit);
}
}

console.log(toggleTemperatureDisplay(true));