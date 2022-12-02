require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_TOKEN,
  },
});

exports.sendMail = function sendMail(to, html) {
  const mail = {
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: `${to}, ${to}`,
    subject: 'Благодарим за покупку!',
    html,
  };

  return transporter.sendMail(mail);
};

exports.notifyOwner = function notifyOwner(html) {
  const mail = {
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: `${process.env.OWNER_EMAIL}, ${process.env.OWNER_EMAIL}`,
    subject: 'Оформлен новый заказ',
    html,
  };

  return transporter.sendMail(mail);
};
