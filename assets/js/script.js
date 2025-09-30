document.querySelectorAll('button.option').forEach(button => {
    button.addEventListener('click', () => {
        let valueContainer = document.getElementById('value');
        let option = button.value;
        if (option === '=') {
            // Evaluate the value
            let values = valueContainer.value;
            let result = eval(values);
            valueContainer.value = `${result}`;
        } else if (option === 'C') {
            // Clear current inputs
            valueContainer.value = '';
        } else if (option === 'X') {
            // Remove last value
            valueContainer.value = valueContainer.value.slice(0, -1);
        } else {
            // Add values
            valueContainer.value += `${option}`;
        }
    });
});
