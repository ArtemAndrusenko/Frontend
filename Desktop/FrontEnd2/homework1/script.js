const Url = 'https://jsonplaceholder.typicode.com/users/';

let userId = 1;


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const websiteInput = document.getElementById('website');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const editNameButton = document.getElementById('editName');
const editEmailButton = document.getElementById('editEmail');
const editWebsiteButton = document.getElementById('editWebsite');




async function fetchUser(userId) {
    try {
        const response = await fetch(Url + userId); // отправляем запрос на сервер. Url - переменная, содержащая базовый URL сервера, к которому мы добавляем userId, чтобы сформировать конечный URL запроса
        if (!response.ok) { // проверяем, был ли HTTP-ответ успешным (статус 200-299). Если статус ответа не в этом диапазоне, это обычно означает, что произошла ошибка на сервере или запрос был сделан к недоступному ресурсу
            throw new Error('Network response was not ok'); // если статус ответа не был успешным - выдаём ошибку
        }
        const user = await response.json(); // если статус ответа успешен - извлекаем данные из ответа в формате JSON
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}



function displayUser(user) {
    nameInput.value = user.name;
    emailInput.value = user.email;
    websiteInput.value = user.website;
}

function enableEdit(input, editButton) {
    input.removeAttribute('disabled'); // удаляем атрибут disabled у элемента input, который предотвращает пользовательский ввод в поле ввода, делая его заблокированным
    input.classList.add('editable'); // добавляем CSS-класс editable к элементу input
    editButton.style.display = 'none'; // после включения режима редактирования иконка карандаша скрываеться
}

function disableEdit(input, editButton) {
    input.setAttribute('disabled', true); // устанавливаем атрибут disabled для элемента input, присваивая ему значение true. Пользователь больше не может вносить изменения в его содержимое
    input.classList.remove('editable'); // убраем стили, связанные с редактированием
    editButton.style.display = 'inline-block'; // возвращаем иконку карандаша
}



editNameButton.addEventListener('click', () => { // добавляем обработчик события клика на элемент editNameButton. Когда пользователь кликает на иконку карандаша для имени пользователя, вызывается функция, переданная внутрь () => { ... }, которая вызывает функцию enableEdit для поля nameInput, чтобы включить режим редактирования.
    enableEdit(nameInput, editNameButton);
});

editEmailButton.addEventListener('click', () => {
    enableEdit(emailInput, editEmailButton);
});

editWebsiteButton.addEventListener('click', () => {
    enableEdit(websiteInput, editWebsiteButton);
});


nameInput.addEventListener('blur', () => { // добавляем обработчик события blur для элемента nameInput. Событие blur происходит, когда элемент теряет фокус (например, после завершения редактирования поля). Когда происходит событие blur для nameInput, вызывается функция, переданная внутрь () => { ... }, которая вызывает функцию disableEdit для поля nameInput, чтобы отключить режим редактирования.
    disableEdit(nameInput, editNameButton);
});
emailInput.addEventListener('blur', () => {
    disableEdit(emailInput, editEmailButton);
});
websiteInput.addEventListener('blur', () => {
    disableEdit(websiteInput, editWebsiteButton);
});



prevButton.addEventListener('click', async () => { 
    if (userId > 1) { 
        userId--; // уменьшаем значение userId на 1, чтобы перейти к предыдущему пользователю
        const user = await fetchUser(userId); // выполняем асинхронный запрос, чтобы получить данные о пользователе с новым userId
        displayUser(user);
    }
});
nextButton.addEventListener('click', async () => {
    userId++; // увеличиваем значение userId на 1, чтобы перейти к следующему пользователю
    const user = await fetchUser(userId);
    displayUser(user);
});




fetchUser(userId)
    .then((user) => {
        displayUser(user);
});