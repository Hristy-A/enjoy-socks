const React = require('react');
const Layout = require('./Layout');

function Index({username}) {
  //JS Code

  return (
    <Layout username={username}>
      <div className="container mt-5">
        <h2>Главная страница!!!!</h2>
      </div>
    </Layout>
  );
}

module.exports = Index;