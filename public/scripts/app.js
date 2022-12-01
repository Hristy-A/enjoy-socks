function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

const ContentType = {
  json: {
    'Content-Type': 'application/json',
  },
};
const StatusCode = {
  Ok: 200,
  NoContent: 204,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
};

function addFavorite(sock) {
  sock.uuid = uuidv4();
  const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
  favorites.push(sock);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return sock.uuid;
}
function hasFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) !== null;
}
function removeFavorite(uuid) {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  if (!favorites) return;
  const sockId = favorites.findIndex((sock) => sock.uuid === uuid);
  if (sockId !== -1) {
    const [favoriteSock] = favorites.splice(sockId, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favoriteSock;
  }
}
function clearFavorites() {
  localStorage.setItem('favorites', null);
}
function getFavorites({ parse = true, clear = false } = {}) {
  const favorites = localStorage.getItem('favorites');
  if (clear) clearFavorites();
  return parse ? JSON.parse(favorites) : (favorites === null || favorites === 'null' ? '[]' : favorites);
}
function swapToCart(uuid) {
  const favoriteSock = removeFavorite(uuid);
  if (favoriteSock) {
    addExistingCart(favoriteSock);
  }
}

function addCart(sock) {
  sock.uuid = uuidv4();
  const carts = JSON.parse(localStorage.getItem('carts')) ?? [];
  carts.push(sock);
  localStorage.setItem('carts', JSON.stringify(carts));
  return sock.uuid;
}
function addExistingCart(sock) {
  const carts = JSON.parse(localStorage.getItem('carts')) ?? [];
  carts.push(sock);
  localStorage.setItem('carts', JSON.stringify(carts));
}
function hasCarts() {
  return JSON.parse(localStorage.getItem('carts')) !== null;
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
function getCarts({ parse = true, clear = false } = {}) {
  const carts = localStorage.getItem('carts');
  if (clear) clearCarts();
  return parse ? JSON.parse(carts) : (carts === null || carts === 'null' ? '[]' : carts);
}
