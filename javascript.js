const addButton = document.getElementById('addButton');
const resultDiv = document.getElementById('resultDiv');

addButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);


    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num2)) {
        const sum = num1 + num2 + num3;
        resultDiv.textContent = `Result: ${sum}`;
    } else {
        resultDiv.textContent = 'Please enter valid numbers.';
    }
});
const next1 = document.getElementById('next1');
    const q1 = document.getElementById('q1');

    next1.addEventListener('click', () => {
        if (q1.style.display === 'block' || q1.style.display === '') {
            q1.style.display = 'none'; // Show the div
            q2.style.display = 'block'
        } 
        else {
            q1.style.display = 'none'; // Hide the div
            q2.style.display = 'block'

        }
    }); 
    const next2 = document.getElementById('next2');
    const q2 = document.getElementById('q2');

    next2.addEventListener('click', () => {
        if (q2.style.display === 'block' || q2.style.display === '') {
            q2.style.display = 'none'; // Show the div
            q3.style.display = 'block'
        } 
        else {
            q2.style.display = 'none'; // Hide the div
            q3.style.display = 'block'

        }
    });