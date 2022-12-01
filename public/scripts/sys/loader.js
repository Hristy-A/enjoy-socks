window.addEventListener('DOMContentLoaded', async () => {
  let response = await fetch('/renderFavorites');

  if (response.ok) return document.write(await response.text());
  if (response.status === StatusCode.Unauthorized) {
    response = await fetch(
      '/renderFavorites',
      {
        method: 'POST',
        headers: ContentType.json,
        body: getFavorites({ parse: false, clear: false }),
      },
    );

    if (response.ok) return document.write(await response.text());
  }
});
