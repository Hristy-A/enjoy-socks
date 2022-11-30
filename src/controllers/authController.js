const bcrypt = require('bcrypt');
const { User } = require('../models');
const render = require('../lib/renderComponent');
const SignInForm = require('../views/auth/SignIn');
const SignUpForm = require('../views/auth/SignUp');
const AuthError = require('../views/error/Error');

/**
 * Завершает запрос с ошибкой аутентификации
 * @param {object} res Ответ express
 * @param err  сообщение об ошибке
 */
const failAuth = (res, err) => {
  res.status(401)
  return render(AuthError, { error: err }, res);
};

exports.createUserAndSession = async (req, res, next) => {
  const {name, password, email, phone} = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name: name, passhash: hashedPassword, email: email, phone: phone});

    req.session.user = {id: user.id, name: user.name}; // записываем в req.session.user данные (id & name) (создаем сессию)
    res.redirect('/auth/SignIn'); // ответ + автоматическое создание и отправка cookies в заголовке клиенту

  } catch (error) {
    console.log("\x1b[31m", 'SignUp Error', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      error.message = error.errors[0].message;
      error.name = 'Ошибка валидации данных в Sequelize'
      return  failAuth(res, error);
    }
    next(error);
  }
};

exports.checkUserAndCreateSession = async (req, res, next) => {
  try {
    const {name, password} = req.body;
    console.log(name, password)
    const user = await User.findOne({where: {name: name}});
    console.log(user)

    if(!user) return failAuth(res, {message: 'Не правильное имя пользователя или пароль!'})
    const isPasswValid = await bcrypt.compare(password, user.passhash);
    if(!isPasswValid) return failAuth(res, {message: 'Не правильное имя пользователя или пароль!!'})

    req.session.user = {id: user.id, name: user.name}; // записываем в req.session.user данные (id & name) (создаем сессию)
    res.redirect('/'); // ответ + автоматическое создание и отправка cookies в заголовке клиенту

  } catch (error) {
    console.log("\x1b[31m", 'SignIn Error:', error);
    next(error);
  }
};


exports.renderSignInForm = (req, res) =>
  render(SignInForm, {}, res);

exports.renderSignUpForm = (req, res) =>
render(SignUpForm, {}, res);

exports.destroySession = (req, res, next) => {
  req.session.destroy( (err) => {
    if(err) next(err);
    res.clearCookie('sid');
    res.redirect('/');
  })
};