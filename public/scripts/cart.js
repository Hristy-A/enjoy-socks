const makeCellBtns = document.querySelector('[data-make-cell-btns]');
const emptyCartMsg = document.querySelector('[data-empty-cart-message]');
const socksCartContainer = document.querySelector('[data-socks-cards-container]');

document.querySelector('main').addEventListener('click', async (event) => {
  const { target } = event;
  const aim = target.closest('[data-delete-btn]');
  if (aim === null) return;

  if (aim.dataset.idType === 'uuid') removeCart(aim.dataset.uuid);
  else await fetch(`/api/carts/${aim.dataset.id}`, { method: 'DELETE' });

  target.closest('[data-card]')?.remove();

  if (socksCartContainer.children.length === 0) {
    makeCellBtns.className = 'd-none';
    emptyCartMsg.className = 'd-flex flex-column justify-content-center align-items-center';
  }
});

const formOrderBtn = document.getElementById('form-order');
const closeModalBtn = document.querySelector('#close-modal-btn');
const validationErrors = document.querySelector('.validation-errors');
formOrderBtn.addEventListener('click', async (event) => {
  const orderForm = formOrderBtn.closest('#form-order-modal').querySelector('#form-order-form');
  const response = await fetch('api/users/orders', {
    method: 'POST',
    headers: ContentType.json,
    body: JSON.stringify(Object.fromEntries([...new FormData(orderForm).entries()])),
  });

  if (response.status === StatusCode.BadRequest) {
    validationErrors.innerHTML = '<div>Введите данные в верном формате</div>';
    return;
  }
  if (response.ok) {
    closeModalBtn.click();
    socksCartContainer.innerHTML = '';
    makeCellBtns.className = 'd-none';
    emptyCartMsg.className = 'd-flex flex-column justify-content-center align-items-center';
  }
});

// const observer = new MutationObserver();
// observer.observe(document.querySelector('[data-card-container]'), {
//   childList: true,
// });
