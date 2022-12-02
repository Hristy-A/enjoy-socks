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

exports.sendMail = function sendMail(to, text, html) {
  const mail = {
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: `${to}, ${to}`,
    subject: 'Благодарим за покупку!',
    text,
  };

  if (html) {
    mail.html = html;
  }

  return transporter.sendMail(mail);
};

exports.notifyOwner = function notifyOwner(text, html) {
  const mail = {
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: `${process.env.OWNER_EMAIL}, ${process.env.OWNER_EMAIL}`,
    subject: 'Оформлен новый заказ',
    text,
  };

  if (html) {
    mail.html = html;
  }

  return transporter.sendMail(mail);
};
