const authForm = document.querySelector('authForm');
const usernameInput = document.querySelector('username');
const emailInput = document.querySelector('email');
const usernameValidation = document.querySelector('usernameValidation');
const emailValidation = document.querySelector('emailValidation');
const result = document.querySelector('result');

async function fetchUsers(username, email) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function validateUsername() {
    const username = usernameInput.value.trim();
    if (username === '') {
        usernameValidation.textContent = 'Поле обязательно для заполнения.';
        return;
    }

    const users = await fetchUsers(username, emailInput.value.trim());

    if (users.length === 0) {
        usernameValidation.textContent = 'Такого пользователя не существует.';
    } else {
        usernameValidation.textContent = 'Пользователь существует.';
    }
}

async function validateEmail() {
    const email = emailInput.value.trim();
    if (email === '') {
        emailValidation.textContent = 'Поле обязательно для заполнения.';
        return;
    }

    const users = await fetchUsers(usernameInput.value.trim(), email);

    if (users.length === 0) {
        emailValidation.textContent = 'Такого пользователя не существует.';
    } else {
        emailValidation.textContent = 'Пользователь существует.';
    }
}

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();

    const users = await fetchUsers(username, email);

    if (users.length === 0) {
        result.textContent = 'Такого пользователя не существует.';
    } else {
        result.textContent = `Пользователь ${username} с email ${email} существует.`;
    }
});