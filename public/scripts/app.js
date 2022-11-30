const ct = {
  json: {
    'Content-Type': 'application/json',
  },
};

function addFavorite(sock) {
  sock.uuid = uuidv4();
  const favorites = JSON.parse(localStorage.getItem()) ?? [];
  favorites.push(sock);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return sock.uuid;
}
function removeFavorite(uuid) {
  const favorites = JSON.parse(localStorage.getItem());
  if (!favorites) return;
  const sockId = favorites.findIndex((sock) => sock.uuid === uuid);
  if (sockId !== -1) favorites.splice(sockId, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
function clearFavorites() {
  localStorage.setItem('favorites', null);
}
function sendFavorites(userId, href) {
  if (!localStorage.length) return;

  const response = fetch(link, {
    method: 'POST',
    headers: ct.json,
    body: localStorage.getItem('favorites')
  });
  //! доделать метод
  if (response.ok) {
    const result = (await response.json());
  }
}

function addCart(sock) {
  sock.uuid = uuidv4();
  const carts = JSON.parse(localStorage.getItem()) ?? [];
  carts.push(sock);
  localStorage.setItem('carts', JSON.stringify(carts));
  return sock.uuid;
}
function addCart(uuid) {
  const carts = JSON.parse(localStorage.getItem());
  if (!carts) return;
  const sockId = carts.findIndex((sock) => sock.uuid === uuid);
  if (sockId !== -1) carts.splice(sockId, 1);
  localStorage.setItem('carts', JSON.stringify(carts));
}
function clearCarts() {
  localStorage.setItem('carts', null);
}
function sendCarts(userId, href) {
  if (!localStorage.length) return;

  const response = fetch(link, {
    method: 'POST',
    headers: ct.json,
    body: localStorage.getItem('carts')
  });
  //! доделать метод
  if (response.ok) {
    const result = (await response.json());
  }
}
