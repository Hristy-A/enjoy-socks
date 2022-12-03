const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user} styles="./styles/home.css">
      <div className="cst-home">

        <div className="cst-home-title"><h3>Самое время быть уникальным!</h3></div>
        <div className="cst-home-title2"><h3>Смоделируй свою любимую пару носков!</h3></div>
        <img className="cst-home-img" src="./images/logo-title-image.png" alt="" width="500" />

        <div className="nav-item text-center cst-nav-item">
          <a className="nav-link" href="/generator">
            <div>
              <img className="cst-home-element" src="./images/generator.png" alt="" width="100" height="100" />
            </div>
            <div>
              Начать
            </div>
          </a>
        </div>

      </div>
    </Layout>
  );
};
