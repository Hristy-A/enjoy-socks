const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({
  user, colors, images, patterns,
}) {
  return (
    <Layout user={user} styles="./styles/generator.css">
      <div className="d-flex flex-wrap justify-content-center">

        <div className="d-flex">
          <div className="cst-generator-box">
            <img className="cst-sock cst-image" src="" alt="" />
            <img className="cst-sock cst-pattern" src="" alt="" />
            <img className="cst-sock cst-color" src={colors[0].link} alt="" />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div>

            <div className="cst-block-title">Цвет:</div>
            <div data-bind="cst-color" className="d-flex cst-color-select cst-select-parent">

              { colors?.map((color) => (
                <div className="cst-select-el" data-id={color.id} data-src={color.link} style={{ background: color.origin }} />
              ))}
            </div>

            <div className="cst-block-title">Рисунок:</div>
            <div data-bind="cst-image" className="d-flex cst-image-select cst-select-parent cst-select-block">
              { images?.map((image) => (
                <div className="cst-select-el" data-id={image.id} data-src={image.link}>
                  <img src={image.origin} className="card-img-top cst-generator-btn" alt="" />
                </div>
              ))}
              <div data-id="" data-src="" className="d-flex justify-content-center cst-clear">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>

            <div className="cst-block-title">Узор:</div>
            <div data-bind="cst-pattern" className="d-flex cst-pattern-select cst-select-parent cst-select-block">
              { patterns?.map((pattern) => (
                <div className="cst-select-el" data-id={pattern.id} data-src={pattern.link}>
                  <img src={pattern.origin} className="card-img-top cst-generator-btn" alt="" />
                </div>
              ))}
              <div data-id="" data-src="" className="d-flex justify-content-center cst-clear">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>

            <div className="d-flex justify-content-center cst-btn-block">

              <div id="add-favorite-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>

              <div id="add-cart-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
                  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
      <script defer src="./scripts/generator.js" />
    </Layout>
  );
};
