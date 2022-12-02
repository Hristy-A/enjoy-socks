const React = require('react');
const Layout = require('../Layout');

module.exports = function Register() {
  return (
    <Layout styles="./styles/auth.css">

      <div>

        <form id="auth" action="/register" method="POST">
          <div className="login-box">

            <div className="error-box" />

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">👤</span>
              <input type="text" name="name" id="name" required className="form-control" placeholder="Имя пользователя" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">📩</span>
              <input type="text" name="email" id="email" required className="form-control" placeholder="Электронная почта" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">📞</span>
              <input type="phone" name="phone" id="phone" required className="form-control" placeholder="Номер телефона" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 input-wigth">
              <span className="input-group-text" id="basic-addon1">🔑</span>
              <input type="password" name="password" id="password" required className="form-control" placeholder="Пароль" aria-describedby="basic-addon1" />
            </div>

            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-center cst-btn-log-reg">
                <button className="button-off" type="submit">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
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
