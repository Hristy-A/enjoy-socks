const React = require('react');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
