const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user} styles="./styles/home.css">
      <div className="cst-home">

        <div className="cst-home-element"><h3>Самое время быть уникальным!</h3></div>
        <div className="cst-home-element"><h3>Смоделируй свою любимую пару носков!</h3></div>
        <img className="cst-home-element" src="./images/logo.png" alt="" width="350" height="350" />

        <div className="nav-item text-center cst-nav-item">
          <a className="nav-link" href="/generator">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
              </svg>
            </div>
            <div>
              Создать!
            </div>
          </a>
        </div>

      </div>
    </Layout>
  );
};
