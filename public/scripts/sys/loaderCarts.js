window.addEventListener('DOMContentLoaded', async () => {
  let response = await fetch('/renderCarts', { method: 'POST' });

  if (response.ok) return document.write(await response.text());
  if (response.status === StatusCode.Unauthorized) {
    response = await fetch(
      '/renderCarts',
      {
        method: 'POST',
        headers: ContentType.json,
        body: getCarts({ parse: false, clear: false }),
      },
    );

    document.write(await response.text());
  }
});
