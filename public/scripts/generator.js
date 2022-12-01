const generatorBox = document.querySelector('.cst-generator-box');
const sockPalettes = document.querySelectorAll('.cst-select-parent');

const generatorImage = generatorBox.querySelector('.cst-image');
const generatorPattern = generatorBox.querySelector('.cst-pattern');
const generatorColor = generatorBox.querySelector('.cst-color');

sockPalettes.forEach((sockPalette) => {
  sockPalette.addEventListener('click', (event) => {
    let { target } = event;

    if (target.closest('.cst-select-parent') === null) return;
    if (target.tagName !== 'DIV') target = target.closest('div');
    if (target.dataset?.id === undefined) return;

    const modifier = target.closest('.cst-select-parent').dataset.bind;

    const layer = generatorBox.querySelector(`.${modifier}`);
    console.log(layer);
    layer.src = target.dataset.src;
    layer.dataset.id = target.dataset.id;
  });
});

function formSock() {
  return {
    colorId: Number(generatorColor.dataset.id) || 1,
    imageId: Number(generatorImage.dataset.id) || null,
    patternId: Number(generatorPattern.dataset.id) || null,
    price: 990, //! hardcode
    size: 'L-XXL', //! hardcode
  };
}

const addFavoriteBtn = document.getElementById('add-favorite-btn');
const addCartBtn = document.getElementById('add-cart-btn');

addFavoriteBtn.addEventListener('click', async (event) => {
  const sock = formSock();
  const response = await fetch('/api/favorites', {
    method: 'POST',
    headers: ContentType.json,
    body: JSON.stringify(sock),
  });

  if (response.status === StatusCode.Unauthorized) addFavorite(formSock());
});
addCartBtn.addEventListener('click', async (event) => {
  const sock = formSock();
  const response = await fetch('/api/carts', {
    method: 'POST',
    headers: ContentType.json,
    body: JSON.stringify(sock),
  });

  if (response.status === StatusCode.Unauthorized) addCart(sock);
});
