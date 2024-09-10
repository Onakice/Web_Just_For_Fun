function formatBinaryWithSpaces(binaryString) {
    binaryString = binaryString.padStart(8, '0');
    return binaryString
        .split('')
        .reverse()
        .join('')
        .match(/.{1,4}/g)
        .join(' ')
        .split('')
        .reverse()
        .join('');
}

function calculate() {
    const bin1 = document.getElementById('binary1').value.split(' ').join("");
    const bin2 = document.getElementById('binary2').value.split(' ').join("");

    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    const sum = num1 + num2;
    
    const binaryResult = formatBinaryWithSpaces(sum.toString(2));
    const decimalResult = sum;
    const hexResult = sum.toString(16).toUpperCase();
    
    document.getElementById('binaryResult').innerText = binaryResult;
    document.getElementById('decimalResult').innerText = decimalResult;
    document.getElementById('hexResult').innerText = hexResult;
}

function generateRandomProblem() {
    const randomBinary = () => (Math.floor(Math.random() * 256)).toString(2).padStart(8, '0');
    document.getElementById('binary1').value = formatBinaryWithSpaces(randomBinary());
    document.getElementById('binary2').value = formatBinaryWithSpaces(randomBinary());
    calculate();
}

// ฟังก์ชันสำหรับซ่อนและแสดงคำตอบ
function toggleResults() {
    const results = document.getElementById('results');
    if (results.style.display === 'none') {
        results.style.display = 'block';
    } else {
        results.style.display = 'none';
    }
}
