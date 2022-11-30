function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

const ct = {
  json: {
    'Content-Type': 'application/json',
  },
};

function addFavorite(sock) {
  sock.uuid = uuidv4();
  const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
  favorites.push(sock);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return sock.uuid;
}
function removeFavorite(uuid) {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  if (!favorites) return;
  const sockId = favorites.findIndex((sock) => sock.uuid === uuid);
  if (sockId !== -1) favorites.splice(sockId, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
function clearFavorites() {
  localStorage.setItem('favorites', null);
}
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites'));
}

function addCart(sock) {
  sock.uuid = uuidv4();
  const carts = JSON.parse(localStorage.getItem('carts')) ?? [];
  carts.push(sock);
  localStorage.setItem('carts', JSON.stringify(carts));
  return sock.uuid;
}
function removeCart(uuid) {
  const carts = JSON.parse(localStorage.getItem('carts'));
  if (!carts) return;
  const sockId = carts.findIndex((sock) => sock.uuid === uuid);
  if (sockId !== -1) carts.splice(sockId, 1);
  localStorage.setItem('carts', JSON.stringify(carts));
}
function clearCarts() {
  localStorage.setItem('carts', null);
}
function getCarts() {
  return JSON.parse(localStorage.getItem('carts'));
}
