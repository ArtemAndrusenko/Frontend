const authForm = document.getElementById('authForm');
    const userCard = document.getElementById('userCard');
    const errorMessage = document.getElementById('errorMessage');

    authForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;

      // Очистим сообщение об ошибке
      errorMessage.innerHTML = '';

      try {
        // Выполним запрос к API
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`);
        const data = await response.json();

        if (data.length === 0) {
          // Если пользователь не найден, выведем сообщение об ошибке
          errorMessage.innerHTML = 'Такого пользователя не существует.';
          userCard.style.display = 'none';
        } else {
          // Если пользователь найден, отобразим данные о нем
          const user = data[0];
          document.getElementById('userId').textContent = user.id;
          document.getElementById('userName').textContent = user.name;
          document.getElementById('userUsername').textContent = user.username;
          document.getElementById('userEmail').textContent = user.email;
          document.getElementById('userPhone').textContent = user.phone;
          document.getElementById('userWebsite').value = user.website;

          userCard.style.display = 'block';
        }
      } catch (error) {
        console.error(error);
        errorMessage.innerHTML = 'Произошла ошибка при выполнении запроса.';
        userCard.style.display = 'none';
      }
    });