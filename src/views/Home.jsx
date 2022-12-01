const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user} styles="./styles/home.css">
      <div className="cst-home">

        <div>
          <div className="cst-home-text">Самое время быть уникальным!</div>
          <div className="cst-home-text">Смоделируй свою любимую пару носков!</div>
        </div>

        <div>
          <img className="cst-home-img" src="./images/logo.png" alt="" width="350" height="350" />
        </div>

        <div>
          <a className="btn btn-primary" href="/generator">Создать!</a>
        </div>

      </div>
    </Layout>
  );
};
