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

    window.location.href = responseData.redirect;
  } else if (response.status === StatusCode.BadRequest) {
    const responseData = await response.json();
    const errors = document.querySelector('.error-box');
    errors.innerHTML = `<div class="error">${'error'}</div>`; //! hardcode
  }
});
