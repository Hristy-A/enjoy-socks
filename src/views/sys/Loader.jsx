const React = require('react');

module.exports = function Loader() {
  return (
    <html lang="ru">
      <head>
        <title>-</title>
      </head>
      <body>
        <script src="./scripts/app.js" />
        <script src="./scripts/sys/loader.js" />
      </body>
    </html>
  );
};
