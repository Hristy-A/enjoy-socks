const generatorBox = document.querySelector('.cst-generator-box');
const sockPalettes = document.querySelectorAll('.cst-select-parent');

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
