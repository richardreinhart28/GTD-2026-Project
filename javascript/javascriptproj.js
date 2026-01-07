//Simple Counter App
let count = 0;
const countDisplay = document.getElementById('count');
const errorMsgBtn = document.getElementById('errorMsgBtn');

document.getElementById('increase').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
    errorMsgBtn.textContent = "";
});

document.getElementById('decrease').addEventListener('click', () => {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    } else {
        errorMsgBtn.textContent = "Counter cannot be a negative number!";
    }
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
    errorMsgBtn.textContent = "";
});

//Comment Box
document.getElementById('submitComment').addEventListener('click', (x) => {
    x.preventDefault();

    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Invalid Email Address!";
        return;
    }

    if (!comment) {
        errorMsg.textContent = "Comment cannot be empty!";
        return;
    }

    errorMsg.textContent = "";
    document.getElementById('email').value = "";
    document.getElementById('comment').value = "";
});

