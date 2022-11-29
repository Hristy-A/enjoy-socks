const React = require('react');

module.exports = function Layout({ children, user }) {
  return (

    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="http://wzrd.in/standalone/uuid%2Fv4@latest" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="./styles/style.css" />
        <title>Enjoy Socks</title>
      </head>

      <body>
        <div className="cst-wrapper">
          <header className="cst-header">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid d-flex">
                <span className="pb-2">
                  <a className="navbar-brand" href="./">
                    <img src="./images/logo.png" alt="" width="50" height="50" className="d-inline-block align-text-top" />
                  </a>
                </span>
                <h3>Enjoy Socks</h3>
                <div className="flex-grow-1" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <div className="flex-grow-1" />
                  <ul className="navbar-nav justify-content-end">
                    <li className="nav-item text-center">
                      <a className="nav-link" href="#">Избранное</a>
                    </li>
                    <li className="nav-item text-center">
                      <a className="nav-link" href="#">Корзина</a>
                    </li>
                    { user ? (
                      <>
                        <li className="nav-item text-center">
                          <span className="nav-link">{ user.name }</span>
                        </li>
                        <li className="nav-item text-center">
                          <a className="nav-link" href="/logout">Выход</a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item text-center">
                          <a className="nav-link" href="/register">Регистрация</a>
                        </li>
                        <li className="nav-item text-center">
                          <a className="nav-link" href="/login">Вход</a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>

          </header>
          <main className="cst-main">
            {children}
          </main>
          <footer className="cst-footer">
            <span>
              <b>Почта:</b>
              {' '}
              info@enjoysocks.ru |
              {' '}
              <b>Адрес:</b>
              {' '}
              г. Москва, Шоссе Энтузиастов 12 ст2 |
              {' '}
              <b>Номер телефона:</b>
              {' '}
              +7 999 666 36 36
            </span>
          </footer>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
      </body>
    </html>
  );
};
