require('@babel/register');
require('dotenv').config();

const express = require('express');
const session = require('express-session'); // библиотека для работы с сессиями// cookie-parser уже включен в express-session
const FileStore = require('session-file-store')(session); // мини БД для хранения cookies (в данном случае файловая система на сервере)
const configureApp = require('./config/configureApp');
require('dotenv').config(); // подключаем чтение из файла .env

const app = express();
const dbConnect = require('../db/dbconnect');
dbConnect();

configureApp(app);

const index = require('./routes/index');

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false,                     // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
}

app.use(session(sessionConfig));

app.use((req, res, next) => {
  // req.session.user: { id: 1, name: 'Oleg' };

  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);

  res.locals.username = req.session?.user?.name;
  next();
});



app.use('/', index);

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
