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
        'Заказ успешно оформлен! С Вами свяжутся в ближайшее время по деталям оформления.',
        '<h3>Заказ успешно оформлен! С Вами свяжутся в ближайшее время по деталям оформления.</h3>',
      );
      const message = `Детали заказа:\n  Заказчик: ${name} | ${email} | ${phone}\n  Заказаны носки: ${socks.map((sock) => {
        const msg = `    Цвет: ${sock.color.id} Узор: ${sock.pattern?.id ?? 'none'} Рисунок: ${sock.image?.id ?? 'none'}`;
        return msg;
      }).join('\n')}`;

      console.log(message);
      await notifyOwner(
        'Test',
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
