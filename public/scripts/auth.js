const formAuth = document.forms[0];

formAuth.addEventListener('submit', async (event) => {
  event.preventDefault();

  const response = await fetch(formAuth.action, {
    method: formAuth.method,
    headers: ContentType.json,
    body: JSON.stringify(Object.fromEntries([...new FormData(formAuth).entries()])),
  });

  if (response.ok) {
    const responseData = await response.json();

    if (hasFavorites()) {
      await fetch('api/favorites/bulk', {
        method: 'POST',
        headers: ContentType.json,
        body: getFavorites({ parse: false, clear: true }),
      });
    }
    if (hasCarts()) {
      await fetch('api/carts/bulk', {
        method: 'POST',
        headers: ContentType.json,
        body: getCarts({ parse: false, clear: true }),
      });
    }

    window.location = responseData.redirect;
  } else if (response.status === StatusCode.BadRequest) {
    const responseData = await response.json();
    console.log(responseData);

    let error = '';

    if (responseData.notfound) {
      error = 'Неверное имя пользователя или пароль';
      console.log(error);
    } else if (responseData.duplicate) {
      error = 'Пользователь уже существует';
    } else if (responseData.validation) {
      error = 'Введите данные в указанном формате';
    } else {
      error = 'Что-то пошло не так...';
      console.log(error);
    }

    const errors = document.querySelector('.error-box');
    errors.innerHTML = `<div class="error">${error}</div>`;
  }
});
