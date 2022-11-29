const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ }) {
  return (
    <Layout>
      <div>
        <img className="cst-home-element" src="./images/logo.png" alt="" width="350" height="350" />
      </div>
      <div>
        <div>
          <div>Color:</div>
          <div>Image: </div>
          <div>Patern: </div>
        </div>
        <div>
          <button type="submit">В избранное</button>
          <button type="submit">В избранное</button>
        </div>
      </div>
    </Layout>
  );
};
// generator
