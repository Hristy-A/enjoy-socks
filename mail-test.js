const nodemailer = require('nodemailer');

async function sendMail() {
  // const testEmailAccount = await nodemailer.createTestAccount();
  // console.log(testEmailAccount);

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'enjoysocks@mail.ru',
      pass: 'HtvnjWZh6mXas512QAbi',
    },
  });

  const result = await transporter.sendMail({
    from: 'Enjoy Socks <enjoysocks@mail.ru>',
    to: 'enjoysocks@mail.ru, enjoysocks@mail.ru',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
    'This <i>message</i> was sent from <strong>Node js</strong> server.',
  });

  console.log(result);
}

sendMail();
