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

exports.sendMain = function sendMail(to, html) {
  return transporter.sendMail({
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: `${to}, ${to}`,
    subject: 'Благодарим за покупку!',
    text: 'Это письмо было отправлено Вам автоматически. Пожалуйста, не отвечайте на него. Переданная информация предназначена только для человека или юридического лица, к которому обращаются, и может содержать конфиденциальный материал. Любой обзор, передача, распространение или другое использование информации людьми или объектами кроме намеченного получателя запрещены. Если Вы не являетесь получателем данного письма, просьба сообщить об этом по указанным контактам.',
    html,
  });
};

exports.notifyOwner = function notifyOwner(html) {
  return transporter.sendMail({
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: `${process.env.OWNER_EMAIL}, ${process.env.OWNER_EMAIL}`,
    subject: 'Оформлен новый заказ',
    text: 'Это письмо было отправлено Вам автоматически. Пожалуйста, не отвечайте на него. Переданная информация предназначена только для человека или юридического лица, к которому обращаются, и может содержать конфиденциальный материал. Любой обзор, передача, распространение или другое использование информации людьми или объектами кроме намеченного получателя запрещены. Если Вы не являетесь получателем данного письма, просьба сообщить об этом по указанным контактам.',
    html,
  });
};
