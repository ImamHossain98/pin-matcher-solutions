function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin;
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

    console.log('pin');
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calacInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calacInput.value = '';
        }
    }
    else {
        const previousNumber = calacInput.value;
        const newNumber = previousNumber + number;
        calacInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    }
    else {
        successNotification.style.display = 'none';
        failNotification.style.display = 'block';
    }
}