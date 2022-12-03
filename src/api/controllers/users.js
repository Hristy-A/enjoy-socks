const { StatusCodes: StatusCode } = require('http-status-codes');
const { sendMail, notifyOwner } = require('../../lib/mailer');

const { User } = require('../../models');
const auth = require('../../middlewares/auth').onUnauth((res) => {
  res.status(StatusCode.UNAUTHORIZED).json({ redirect: '/login' });
});

module.exports = function carts(cartsRoute) {
  cartsRoute.post('/orders', auth, async (req, res, next) => {
    try {
      const { name, email, phone } = req.body;
      const socks = await User.formOrder(req.session.user, { name, email, phone });

      await sendMail(
        email,
        '<h2>Заказ успешно оформлен!</h2><h3>С Вами свяжутся в ближайшее время по деталям оформления.</h3>',
      );
      const message = `<h2>Детали заказа:</h2><div>Заказчик: имя - ${name} | почта - ${email} | телефон - ${phone}\n</div><div>Заказаны носки:</div><table border="2" style="border-collapse: collapse;font-family: sans-serif;"><thead><tr align="center"><th>Номер</th><th>Цвет</th><th>Узор</th><th>Рисунок</th></tr></thead><tbody>${socks.map((sock, i) => {
        const msg = `<tr align="center"><td>${i + 1}</td><td>${sock.color.link.match(/(\w+).png$/)[1]}</td><td>${sock.pattern?.link?.match(/(\w+).png$/)?.[1] ?? '---'}</td><td>${sock.image?.link?.match(/(\w+).png$/)?.[1] ?? '---'}</td></tr>`;
        return msg;
      }).join('')}</tbody></table>`;

      console.log(message);
      await notifyOwner(
        message,
      );

      res.sendStatus(StatusCode.OK);
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        res.status(StatusCode.BAD_REQUEST).json({ validation: true });
      }
      next();
    }
  });

  return cartsRoute;
};
