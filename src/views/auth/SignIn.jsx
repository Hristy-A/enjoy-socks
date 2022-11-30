const React = require('react');
const Layout = require('../Layout');

function SignInForm({ username, name }) {
  //JS Code

  return (
    <Layout username={username}>
      <div className="container mt-5">
        <h2>Вход на сайт</h2>
        <form id="signinForm" method="POST" action="/auth/SignIn">
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-light">
            Войти
          </button>
        </form>
        {/*<script src="/js/signin.js" />*/}
      </div>
    </Layout>
  );
}

module.exports = SignInForm;