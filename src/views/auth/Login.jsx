const React = require('react');
const Layout = require('../Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div>
        <form id="auth" action="/login" method="POST">

          <div className="error-box" />

          <div className="input-group mb-3 input-wigth">
            <span className="input-group-text " id="basic-addon1">📩</span>
            <input type="text" name="email" id="email" className="form-control" placeholder="Электронная почта" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3 input-wigth">
            <span className="input-group-text" id="basic-addon1">🔑</span>
            <input type="password" name="password" id="password" required pattern="\w{4,}" className="form-control" placeholder="Пароль" aria-describedby="basic-addon1" />
          </div>

          <div className="nav-item text-center">
            <a className="nav-link" href="/">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                </svg>
              </div>
              <div>
                Войти!
              </div>
            </a>
          </div>

        </form>
      </div>

      <script defer src="./scripts/auth.js" />
    </Layout>
  );
};
