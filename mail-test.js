const nodemailer = require('nodemailer');

async function sendMail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'enjoysocks@mail.ru',
      pass: 'HtvnjWZh6mXas512QAbi',
    },
  });

  const sellerMail = await transporter.sendMail({
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: 'enjoysocks@mail.ru, enjoysocks@mail.ru',
    subject: 'Новый заказ',
    text: 'This message was sent from Node js server.',
    html:
    'This <i>message</i> was sent from <strong>Node js</strong> server.',
  });

  const byerMail = await transporter.sendMail({
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: '<почта покупателя>, <почта покупателя>',
    subject: 'Заказ успешно оформлен',
    text: 'This message was sent from Node js server.',
    html:
    'This <i>message</i> was sent from <strong>Node js</strong> server.',
  });

  console.log(sellerMail);
  console.log(byerMail);
}

sendMail();
