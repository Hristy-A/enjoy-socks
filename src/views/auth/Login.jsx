const React = require('react');
const Layout = require('../Layout');

module.exports = function Login({ error, user }) {
  return (
    <Layout user={user}>
      <div className="d-flex justify-content-center">

        <form id="auth" action="/login" method="POST">

          <div className="error-box">
            {error ?? ''}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">📩</span>
            <input type="text" name="email" id="email" className="form-control" placeholder="Электронная почта" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">🔑</span>
            <input type="password" name="password" id="password" required pattern="\w{4,}" className="form-control" placeholder="Пароль" aria-describedby="basic-addon1" />
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-lg" type="submit">Войти</button>
          </div>

        </form>

      </div>

      <script defer src="auth.js" />
    </Layout>
  );
};
