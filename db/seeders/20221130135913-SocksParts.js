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
              link: './images/socks/patterns/triangles.png',
              origin: './images/socks/patterns/origin/1.png',
            },
            {
              link: './images/socks/patterns/polkadot.png',
              origin: './images/socks/patterns/origin/2.png',
            },
            {
              link: './images/socks/patterns/night-sky.png',
              origin: './images/socks/patterns/origin/3.png',
            },
            {
              link: './images/socks/patterns/math.png',
              origin: './images/socks/patterns/origin/4.png',
            },
          ],
          {},
        ),
        queryInterface.bulkInsert(
          'Images',
          [
            {
              link: './images/socks/images/cactus.png',
              origin: './images/socks/images/origin/1.png',
            },
            {
              link: './images/socks/images/yoda.png',
              origin: './images/socks/images/origin/2.png',
            },
            {
              link: './images/socks/images/duck.png',
              origin: './images/socks/images/origin/3.png',
            },
            {
              link: './images/socks/images/lama.png',
              origin: './images/socks/images/origin/4.png',
            },
          ],
          {},
        ),
        queryInterface.bulkInsert(
          'Colors',
          [
            {
              link: './images/socks/colors/white.png',
              origin: '#e8e8e8',
            },
            {
              link: './images/socks/colors/blue.png',
              origin: '#3fcdec',
            },
            {
              link: './images/socks/colors/green.png',
              origin: '#0eec39',
            },
            {
              link: './images/socks/colors/pink.png',
              origin: '#e89cae',
            },
            {
              link: './images/socks/colors/purple.png',
              origin: '#c951e6',
            },
            {
              link: './images/socks/colors/yellow.png',
              origin: '#eeef5d',
            },
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
