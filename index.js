const user = document.getElementById('user');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement1 = document.getElementById('error1');
const errorElement2 = document.getElementById('error2');
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const userRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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
        messages2.push("Username must not include special characters or spaces.");
    };

    if (messages2.length > 0) {
        e.preventDefault();
        errorElement2.innerText = messages2.join(', ');
    }
})