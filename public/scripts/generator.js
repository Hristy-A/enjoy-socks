const generatorBox = document.querySelector('.cst-generator-box');
const sockPalettes = document.querySelectorAll('.cst-select-parent');

const generatorImage = generatorBox.querySelector('.cst-image');
const generatorPattern = generatorBox.querySelector('.cst-pattern');
const generatorColor = generatorBox.querySelector('.cst-color');

sockPalettes.forEach((sockPalette) => {
  console.log('tut', sockPalette);
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
    colorId: generatorColor.dataset.id,
    imageId: generatorImage.dataset.id || null,
    patternId: generatorPattern.dataset.id || null,
    price: 990, //! hardcode
    size: 'L-XXL', //! hardcode
  };
}

const addFavoriteBtn = document.getElementById('add-favorite-btn');
const addCartBtn = document.getElementById('add-cart-btn');

addFavoriteBtn.addEventListener('click', (event) => {
  addFavorite(formSock());
});
addCartBtn.addEventListener('click', (event) => {
  addCart(formSock());
});
