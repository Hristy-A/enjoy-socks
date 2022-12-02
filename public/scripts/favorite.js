const cardsContainer = document.querySelector('[data-all-card-container]');
const emptyMessage = document.querySelector('[data-empty-message]');

document.querySelector('main').addEventListener('click', async (event) => {
  const { target } = event;
  let aim = target.closest('[data-delete-btn]');
  if (aim !== null) {
    const card = aim.closest('[data-card]');
    if (card.dataset.idType === 'uuid') removeFavorite(card.dataset.uuid);
    else await fetch(`/api/favorites/${card.dataset.id}`, { method: 'DELETE' });

    target.closest('[data-card]')?.remove();
  } else {
    aim = target.closest('[data-move-to-cart]');
    if (aim !== null) {
      const card = aim.closest('[data-card]');
      if (card.dataset.idType === 'uuid') swapToCart(card.dataset.uuid);
      else {
        await fetch(`/api/favorites/${card.dataset.id}`, { method: 'DELETE' });
        await fetch(`/api/carts/${card.dataset.id}`, { method: 'POST' });
      }

      target.closest('[data-card]')?.remove();
    }
  }

  if (cardsContainer.children.length === 0) {
    emptyMessage.className = 'd-flex flex-column justify-content-center align-items-center';
  }
});
document.querySelector('main').addEventListener('click', async (event) => {
  const { target } = event;
  const aim = target.closest('[data-delete-btn]');
  if (aim === null) return;

  if (aim.dataset.idType === 'uuid') removeFavorite(aim.dataset.uuid);
  else await fetch(`/api/favorites/${aim.dataset.id}`, { method: 'DELETE' });

  target.closest('[data-card]')?.remove();

  if (cardsContainer.children.length === 0) {
    emptyMessage.className = 'd-flex flex-column justify-content-center align-items-center';
  }
});
