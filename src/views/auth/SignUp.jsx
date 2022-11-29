const React = require('react');
const Layout = require('../Layout');

function Index({ username }) {
  return (
    <Layout username={username}>
      <div className="container mt-5">
        <h2>Регистрация</h2>
        <form id="signupForm" method="POST" action="/auth/signup">
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="form-control"
              name="email"
              type="text"
              pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
              required
              title="qwe@qwe.com"
            />
            
          </div>

          <div className="form-group">
            <label htmlFor="phone">phone:</label>
            <input
              id="phone"
              className="form-control"
              name="phone"
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
              title="не менее 4 символов"
              minLength={3}
            />
          </div>
          <button type="submit" className="btn btn-light">
            Зарегистрироваться
          </button>
        </form>
        {/*<script src='/js/signup.js'/>*/}
      </div>
    </Layout>
  );
}

module.exports = Index;
