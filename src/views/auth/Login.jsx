const React = require('react');
const Layout = require('../Layout');

module.exports = function Login() {
  return (
    <Layout styles="./styles/auth.css">
      <div>
        <form id="auth" action="/login" method="POST">

          <div className="error-box" />

          <div className="input-group mb-3 input-wigth">
            <span className="input-group-text " id="basic-addon1">📩</span>
            <input type="text" name="email" id="email" required className="form-control" placeholder="Электронная почта" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3 input-wigth">
            <span className="input-group-text" id="basic-addon1">🔑</span>
            <input type="password" name="password" id="password" required pattern="\w{4,}" className="form-control" placeholder="Пароль" aria-describedby="basic-addon1" />
          </div>

          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center cst-btn-log-reg">
              <button className="button-off" type="submit">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </form>
      </div>

      <script defer src="./scripts/auth.js" />
    </Layout>
  );
};
