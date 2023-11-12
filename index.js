const user = document.getElementById('user');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement1 = document.getElementById('error1');
const errorElement2 = document.getElementById('error2');
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const userRegex = /^[a-zA-Z0-9]+$/;

form.addEventListener('submit', (e) => {
    //Validação da password//
    let messages1 = []

    if (!passwordRegex.test(password.value)) {
        messages1.push('Password must be longer and contain special characters');
    };

    if (messages1.length > 0) {
        e.preventDefault();
        errorElement1.innerText = messages1.join(', ');
    }

    //Validação do user//
    let messages2 = []

    if (!userRegex.test(user.value)) {
        messages2.push("Username must not include special characters or spaces");
    };

    if (messages2.length > 0) {
        e.preventDefault();
        errorElement2.innerText = messages2.join(', ');
    }

    if (messages1.length === 0 && messages2.length === 0) {
        showModal();
    }
})

document.getElementById('icon').addEventListener('mousedown', function() {
    document.getElementById('password').type = 'text';
});

document.getElementById('icon').addEventListener('mouseup', function() {
    document.getElementById('password').type = 'password';
});


function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    const okClose = document.getElementById('okClose');
    const loginButton = document.getElementById('loginButton');

    okClose.onclick = function () {
        modal.style.display = 'none';
    };

    loginButton.onclick = function () {
        window.location.href = 'login.html';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
