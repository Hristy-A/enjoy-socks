document.querySelector('main').addEventListener('click', async (event) => {
  const { target } = event;
  const aim = target.closest('[data-delete-btn]');
  if (aim === null) return;

  if (aim.dataset.idType === 'uuid') removeCart(aim.dataset.uuid);
  else await fetch(`/api/carts/${aim.dataset.id}`, { method: 'DELETE' });

  target.closest('[data-card]')?.remove();
});
