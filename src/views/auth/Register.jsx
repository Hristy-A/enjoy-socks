const React = require('react');
const Layout = require('../Layout');

module.exports = function Register() {
  return (
    <Layout additionalStyle="auth.css">

      <div className="d-flex justify-content-center">

        <form id="auth" action="/register" method="POST">
          <div className="login-box">

            <div className="error-box" />

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">👤</span>
              <input type="text" name="name" id="name" required pattern="\w{4,}" className="form-control" placeholder="Имя пользователя" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">📩</span>
              <input type="text" name="email" id="email" required pattern=".{4,}" className="form-control" placeholder="Электронная почта" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">📞</span>
              <input type="phone" name="phone" id="phone" className="form-control" placeholder="Номер телефона" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">🔑</span>
              <input type="password" name="password" id="password" required pattern="\w{4,}" className="form-control" placeholder="Пароль" aria-describedby="basic-addon1" />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary btn-lg" type="submit">Зарегистрироваться</button>
            </div>
          </div>

        </form>

      </div>

      <script defer src="./scripts/auth.js" />
    </Layout>
  );
};
