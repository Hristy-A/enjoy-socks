const path = require('path');
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return Promise.all(
      [
        queryInterface.bulkInsert(
          'Patterns',
          [
            {
              link: './images/socks/patterns/1.png',
              origin: './images/socks/patterns/origin/1.png',
            },
            {
              link: './images/socks/patterns/2.png',
              origin: './images/socks/patterns/origin/2.png',
            },
            {
              link: './images/socks/patterns/3.png',
              origin: './images/socks/patterns/origin/3.png',
            },
            {
              link: './images/socks/patterns/4.png',
              origin: './images/socks/patterns/origin/4.png',
            },
          ],
          {},
        ),
        queryInterface.bulkInsert(
          'Images',
          [
            {
              link: './images/socks/images/1.png',
              origin: './images/socks/images/origin/1.png',
            },
            {
              link: './images/socks/images/2.png',
              origin: './images/socks/images/origin/2.png',
            },
            {
              link: './images/socks/images/3.png',
              origin: './images/socks/images/origin/3.png',
            },
            {
              link: './images/socks/images/4.png',
              origin: './images/socks/images/origin/4.png',
            },
          ],
          {},
        ),
        queryInterface.bulkInsert(
          'Colors',
          [
            { link: './images/socks/colors/white.png' },
            { link: './images/socks/colors/blue.png' },
            { link: './images/socks/colors/green.png' },
            { link: './images/socks/colors/pink.png' },
            { link: './images/socks/colors/purple.png' },
            { link: './images/socks/colors/yellow.png' },
          ],
          {},
        ),
      ],
    );
  },

  async down(queryInterface) {
    const parametersPath = path.resolve('public', 'images', 'socks');
    const folders = fs.readdirSync(parametersPath);

    await Promise.all(folders.map((folder) => queryInterface.bulkDelete(
      folder[0].toUpperCase().concat(folder.slice(1)),
      {
        truncate: true,
        restartIdentity: true,
      },
      {},
    )));
  },
};
