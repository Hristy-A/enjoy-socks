const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user}>
      <div className="cst-home">
        <div className="cst-home-element">Самое время быть уникальным! Смоделируй свою любимую пару носков!</div>
        <img className="cst-home-element" src="./images/logo.png" alt="" width="350" height="350" />
        <button className="btn btn-primary cst-home-element" type="submit">Создать!</button>
      </div>
    </Layout>
  );
};
