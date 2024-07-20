function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    if (celsiusInput.value === "" && fahrenheitInput.value === "") {
        alert("Enter a number to convert");
        return;
    } else if (celsiusInput.value === "") {
        // From Fahrenheit to Celsius conversion
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2); 
    } else {
        // From Celsius to Fahrenheit conversion
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2); 
    }
}
