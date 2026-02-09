document.getElementById('addBtn').addEventListener('click', () => {
    const val1 = parseFloat(document.getElementById('input1').value) || 0;
    const val2 = parseFloat(document.getElementById('input2').value) || 0;
    const sum = val1 + val2;
    document.getElementById('result').textContent = 'Sum: ' + sum;
});
