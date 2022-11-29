const React = require('react');
const Layout = require('../Layout');

module.exports = function Login({ error }) {
  return (
    <Layout additionalStyle="auth.css">
      <div className="login-box">
        <h2>Login</h2>
        <form id="auth" action="/login" method="POST">
          <div className="error-box">
            {error ?? ''}
          </div>
          <div className="user-box">
            <input type="text" name="email" id="email" required pattern="\w{4,}" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" id="password" required pattern="\w{4,}" />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">send</button>
        </form>
      </div>
      <script defer src="auth.js" />
    </Layout>
  );
};
