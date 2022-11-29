const React = require('react');
const Layout = require('./Layout');

module.exports = function Cart({ user }) {
  return (
    <Layout user={user}>
      <div className="cst-home">
        <h1>Coming soon</h1>
        <a href="/" className="btn btn-primary">home</a>
      </div>
    </Layout>
  );
};
