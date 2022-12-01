const React = require('react');
const Layout = require('../Layout');

module.exports = function Register() {
  return (
    <Layout styles="./styles/auth.css">

      <div className="d-flex justify-content-center">

        <form id="auth" action="/register" method="POST">
          <div className="login-box">

            <div className="error-box" />

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">👤</span>
              <input type="text" name="name" id="name" required pattern="\w{4,}" className="form-control" placeholder="Имя пользователя" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">📩</span>
              <input type="text" name="email" id="email" required pattern=".{4,}" className="form-control" placeholder="Электронная почта" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">📞</span>
              <input type="phone" name="phone" id="phone" className="form-control" placeholder="Номер телефона" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">🔑</span>
              <input type="password" name="password" id="password" required pattern="\w{4,}" className="form-control" placeholder="Пароль" aria-describedby="basic-addon1" />
            </div>

            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-center cst-btn-log-reg">
                <button className="button-off" type="submit">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-save-fill" viewBox="0 0 16 16">
                      <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </form>

      </div>

      <script defer src="./scripts/auth.js" />
    </Layout>
  );
};
