const React = require('react');

function Layout({ children, title =  'Auth', username }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        {/*<script defer src="/js/application.js"></script>*/}
      </head>
      <body>
        <div className="container">
          <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Главная
                </a>
              </li>
              {username ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/private">
                      Приватная страница
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signout">
                      Выйти
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Привет, { username }
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signin">
                      Войти
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signup">
                      Регистрация
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
