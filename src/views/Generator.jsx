const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({
  user, colors, images, patterns,
}) {
  return (
    <Layout user={user} styles="generator.css">
      <div>
        <img className="cst-home-element" src="./images/logo.png" alt="" width="350" height="350" />
      </div>

      <div>
        <div className="d-flex">
          Цвет:
          { colors?.map((color) => (
            <div style={{ width: '50px', height: '50px', background: color.origin }} />
          ))}
        </div>

        <div>
          Рисунок:
          { images?.map((image) => (
            <img src={image.origin} className="card-img-top cst-generator-btn" alt="" />
          ))}
        </div>

        <div>
          Узор:
          { patterns?.map((pattern) => (
            <img src={pattern.origin} className="card-img-top cst-generator-btn" alt="" />
          ))}
        </div>
      </div>

      <div>
        <a className="nav-link" href="/favorites">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
        </a>

        <a className="nav-link" href="/cart">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
              <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
            </svg>
          </div>
        </a>
      </div>

    </Layout>
  );
};
